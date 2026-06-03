import type { Metadata } from 'next'
import Image from 'next/image'

export const dynamic = 'force-dynamic'
import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@/payload.config'
import type { Media } from '@/payload-types'

export const metadata: Metadata = {
  title: 'Mongolian Under Water — Нүүр',
  description:
    'CMAS-ын гишүүн клуб. Монгол улсад сэлүүрт сэлэлт болон усан доорх буудлагыг хөгжүүлж буй клуб.',
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('mn-MN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const categoryLabels: Record<string, string> = {
  competition: 'Тэмцээн',
  blog: 'Зөвлөгөө & Блог',
  announcement: 'Зар мэдээ',
}

export default async function HomePage() {
  const payload = await getPayload({ config: await config })

  const { docs: latestNews } = await payload.find({
    collection: 'news',
    limit: 3,
    sort: '-publishedAt',
  })

  return (
    <>
      {/* ── Hero ── */}
      <section className="hero" aria-label="Нүүр хэсэг">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">🏅 CMAS гишүүн клуб</div>
            <h1>Mongolian<br />Under Water</h1>
            <p className="hero-tagline">
              Монгол улсын цорын ганц сэлүүрт сэлэлт болон усан доорх буудлагын клуб.
              Мэргэжлийн тренеруудтайгаа хамт усны ертөнцийг нээж мэдэр.
            </p>
            <div className="hero-actions">
              <Link href="/training" className="btn btn-primary">Сургалтын хуваарь</Link>
              <Link href="/pricing" className="btn btn-outline">Үнэ харах</Link>
            </div>
          </div>
        </div>
        <div className="hero-wave">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <div className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            <div>
              <div className="stat-number">2</div>
              <div className="stat-label">Спортын төрөл</div>
            </div>
            <div>
              <div className="stat-number">2</div>
              <div className="stat-label">Дасгалжуулах газар</div>
            </div>
            <div>
              <div className="stat-number">3</div>
              <div className="stat-label">Өдөр / 7 хоногт</div>
            </div>
            <div>
              <div className="stat-number">CMAS</div>
              <div className="stat-label">Олон улсын гишүүн</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Activities ── */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Бидний спортын <span className="gradient-text">төрлүүд</span></h2>
            <p>CMAS-ын стандартын дагуу явуулдаг мэргэжлийн сургалтууд</p>
          </div>
          <div className="grid-2">
            <div className="feature-card">
              <div className="feature-icon">🏊</div>
              <h3>Сэлүүрт сэлэлт</h3>
              <p>
                Моно сэлүүр буюу нэлд сэлүүрийг ашиглан усан доор эсвэл гадаргуугаар хурдан
                сэлэх спортын төрөл. Олон улсын тэмцээнд оролцох боломжтой.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Усан доорх буудлага</h3>
              <p>
                Монгол улсад шинэ дэлхийн чанарын спортын төрөл. Олон улсын тавцанд Монголын
                нэрийг өргөх боломжтой өвөрмөц, сонирхолтой спорт.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Training summary ── */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <h2>Сургалтын хуваарь &amp; <span className="gradient-text">байршил</span></h2>
              <p style={{ color: 'var(--color-gray-500)', marginBottom: '2rem' }}>
                Долоо хоногт 3 удаа, 2 газарт явагддаг сургалтад хаанаас ч нэгдэж болно.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-text">
                    <strong>1-р газар</strong>
                    <span>Сэлбэ Интернэшнл Сургууль — Сүхбаатар дүүрэг</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-text">
                    <strong>2-р газар</strong>
                    <span>Баянзүрх дүүргийн усан бассейн</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📅</div>
                  <div className="contact-text">
                    <strong>Хуваарь</strong>
                    <span>Даваа, Лхагва, Баасан — 2 ээлж</span>
                  </div>
                </div>
              </div>
              <Link href="/training" className="btn btn-primary">Дэлгэрэнгүй харах</Link>
            </div>
            <div style={{
              background: 'linear-gradient(135deg, var(--color-ocean), var(--color-teal))',
              borderRadius: 'var(--radius)',
              padding: '3rem 2rem',
              color: 'white',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🌊</div>
              <h3 style={{ color: 'white', marginBottom: '0.75rem' }}>Яаралтай нэгдэ!</h3>
              <p style={{ opacity: 0.85, marginBottom: '1.5rem' }}>
                Эхлэлийн шатнаас мэргэжлийн зэрэг хүртэл бүх түвшний сургалт байдаг.
              </p>
              <Link href="/contact" className="btn btn-outline">Холбоо барих</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Latest news ── */}
      {latestNews.length > 0 && (
        <section className="section bg-light">
          <div className="container">
            <div className="section-title">
              <h2>Сүүлийн <span className="gradient-text">мэдээнүүд</span></h2>
              <p>Клубын шинэ мэдээ, арга хэмжээний мэдэгдэл</p>
            </div>
            <div className="grid-3">
              {latestNews.map((item) => {
                const cover = item.coverImage as Media | null
                return (
                  <Link key={item.id} href={`/news/${item.slug}`} className="news-card">
                    <div className="news-card-img-wrap">
                      {cover && typeof cover === 'object' && cover.url ? (
                        <Image
                          src={cover.url}
                          alt={cover.alt || item.title}
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
                        {item.category && (
                          <span className={`tag tag-${item.category}`}>
                            {categoryLabels[item.category] || item.category}
                          </span>
                        )}
                        {item.publishedAt && (
                          <span>{formatDate(item.publishedAt)}</span>
                        )}
                      </div>
                      <h3>{item.title}</h3>
                      <span className="news-read-more">Дэлгэрэнгүй →</span>
                    </div>
                  </Link>
                )
              })}
            </div>
            <div className="text-center mt-2">
              <Link href="/news" className="btn btn-teal">Бүх мэдээ харах</Link>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="section bg-ocean">
        <div className="container text-center">
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>
            Усны ертөнцөд тавтай морилно уу!
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 560, margin: '0 auto 2rem', fontSize: '1.1rem' }}>
            Туршлага шаардлагагүй. Мэргэжлийн тренеруудтай хамт эхлэх боломжтой.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/pricing" className="btn btn-primary">Үнийн мэдээлэл</Link>
            <Link href="/contact" className="btn btn-outline">Холбоо барих</Link>
          </div>
        </div>
      </section>
    </>
  )
}
