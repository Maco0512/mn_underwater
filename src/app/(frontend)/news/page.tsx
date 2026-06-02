import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPayload } from 'payload'

export const revalidate = 60
import config from '@/payload.config'
import type { News, Media } from '@/payload-types'

export const metadata: Metadata = {
  title: 'Мэдээ',
  description:
    'Mongolian Under Water клубын мэдээ, тэмцээний дүн, зар мэдээ.',
}

const categoryLabels: Record<string, string> = {
  competition: 'Тэмцээн',
  blog: 'Зөвлөгөө & Блог',
  announcement: 'Зар мэдээ',
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('mn-MN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function NewsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const { category } = await searchParams
  const payload = await getPayload({ config: await config })

  const { docs: articles } = await payload.find({
    collection: 'news',
    sort: '-publishedAt',
    where: category ? { category: { equals: category } } : undefined,
  }) as { docs: News[] }

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="breadcrumb">
            <Link href="/">Нүүр</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Мэдээ</span>
          </nav>
          <h1>Мэдээнүүд</h1>
          <p>Клубын шинэ мэдээ, тэмцээний дүн, зар мэдээ</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Category filter */}
          <nav className="filter-tabs" aria-label="Ангилалаар шүүх">
            <Link
              href="/news"
              className={`filter-tab${!category ? ' active' : ''}`}
            >
              Бүгд
            </Link>
            {Object.entries(categoryLabels).map(([value, label]) => (
              <Link
                key={value}
                href={`/news?category=${value}`}
                className={`filter-tab${category === value ? ' active' : ''}`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {articles.length === 0 ? (
            <div className="text-center" style={{ padding: '4rem 0', color: 'var(--color-gray-500)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📰</div>
              <p>Одоогоор мэдээ байхгүй байна.</p>
            </div>
          ) : (
            <div className="grid-3">
              {articles.map((article) => {
                const cover = article.coverImage as Media | null
                return (
                  <Link key={article.id} href={`/news/${article.slug}`} className="news-card">
                    <div className="news-card-img-wrap">
                      {cover && typeof cover === 'object' && cover.url ? (
                        <Image
                          src={cover.url}
                          alt={cover.alt || article.title}
                          width={768}
                          height={432}
                          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        />
                      ) : (
                        <div style={{
                          width: '100%',
                          height: '100%',
                          minHeight: 180,
                          background: 'linear-gradient(135deg, var(--color-ocean), var(--color-teal))',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '2.5rem',
                        }}>🌊</div>
                      )}
                    </div>
                    <div className="news-card-body">
                      <div className="news-card-meta">
                        {article.category && (
                          <span className={`tag tag-${article.category}`}>
                            {categoryLabels[article.category] || article.category}
                          </span>
                        )}
                        {article.publishedAt && (
                          <span>{formatDate(article.publishedAt)}</span>
                        )}
                      </div>
                      <h3>{article.title}</h3>
                      <span className="news-read-more">Дэлгэрэнгүй →</span>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
