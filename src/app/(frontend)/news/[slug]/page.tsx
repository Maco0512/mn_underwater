import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const revalidate = 60
import { getPayload } from 'payload'
import { RichText } from '@payloadcms/richtext-lexical/react'
import config from '@/payload.config'
import type { News, Media } from '@/payload-types'

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

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const payload = await getPayload({ config: await config })
  const { docs } = await payload.find({
    collection: 'news',
    where: { slug: { equals: slug } },
    limit: 1,
  }) as { docs: News[] }

  const article = docs[0]
  if (!article) return { title: 'Мэдээ олдсонгүй' }

  const cover = article.coverImage as Media | null

  return {
    title: article.title,
    openGraph: {
      title: article.title,
      images: cover && typeof cover === 'object' && cover.url ? [cover.url] : [],
    },
  }
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params
  const payload = await getPayload({ config: await config })

  const { docs } = await payload.find({
    collection: 'news',
    where: { slug: { equals: slug } },
    limit: 1,
  }) as { docs: News[] }

  const article = docs[0]
  if (!article) notFound()

  const cover = article.coverImage as Media | null

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="breadcrumb">
            <Link href="/">Нүүр</Link>
            <span aria-hidden="true">/</span>
            <Link href="/news">Мэдээ</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{article.title}</span>
          </nav>
          {article.category && (
            <div style={{ marginBottom: '1rem' }}>
              <span className={`tag tag-${article.category}`}>
                {categoryLabels[article.category] || article.category}
              </span>
            </div>
          )}
          <h1 style={{ maxWidth: 800, margin: '0 auto 1rem' }}>{article.title}</h1>
          {article.publishedAt && (
            <p style={{ marginBottom: 0 }}>{formatDate(article.publishedAt)}</p>
          )}
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          {cover && typeof cover === 'object' && cover.url && (
            <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', marginBottom: '2.5rem', boxShadow: 'var(--shadow-lg)' }}>
              <Image
                src={cover.url}
                alt={cover.alt || article.title}
                width={1600}
                height={900}
                style={{ width: '100%', height: 'auto', display: 'block' }}
                priority
              />
            </div>
          )}

          {article.content && (
            <div className="richtext">
              <RichText data={article.content as Parameters<typeof RichText>[0]['data']} />
            </div>
          )}

          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--color-gray-200)' }}>
            <Link href="/news" style={{ color: 'var(--color-blue)', fontWeight: 500 }}>
              ← Бүх мэдээ руу буцах
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
