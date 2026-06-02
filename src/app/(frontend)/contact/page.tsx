import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Холбоо барих',
  description:
    'Mongolian Under Water клубтай холбоо барих. Утас: 95101737. СБД, Сэлбэ Интернэшнл Сургууль, Улаанбаатар.',
}

export default function ContactPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="breadcrumb">
            <Link href="/">Нүүр</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Холбоо барих</span>
          </nav>
          <h1>Холбоо барих</h1>
          <p>Асуулт байна уу? Бид таныг хүлээж байна</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '4rem', alignItems: 'flex-start' }}>
            {/* Contact info */}
            <div>
              <h2 style={{ marginBottom: '2rem' }}>Холбоо барих <span className="gradient-text">мэдээлэл</span></h2>

              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-text">
                  <strong>Утас</strong>
                  <a href="tel:+97695101737">95101737</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-text">
                  <strong>Хаяг</strong>
                  <span>СБД, Сэлбэ Интернэшнл Сургууль,<br />Сүхбаатар дүүрэг, Улаанбаатар</span>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">🌐</div>
                <div className="contact-text">
                  <strong>Facebook</strong>
                  <a
                    href="https://www.facebook.com/profile.php?id=61571766446542"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mongolian Under Water
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">🕒</div>
                <div className="contact-text">
                  <strong>Сургалтын цаг</strong>
                  <span>Да, Лха, Баа — 07:00–08:30 / 18:00–19:30</span>
                </div>
              </div>

              <div style={{
                marginTop: '2rem',
                background: 'var(--color-off-white)',
                borderRadius: 'var(--radius)',
                padding: '1.5rem',
              }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.75rem' }}>Хурдан холбоо барих</h3>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a
                    href="tel:+97695101737"
                    className="btn btn-primary"
                    style={{ flex: 1, justifyContent: 'center' }}
                  >
                    📞 Залгах
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61571766446542"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-teal"
                    style={{ flex: 1, justifyContent: 'center' }}
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            {/* Map + training locations */}
            <div>
              <h2 style={{ marginBottom: '2rem' }}>Байршил <span className="gradient-text">газрын зураг</span></h2>

              {/* Embedded Google Map - Selbe International School */}
              <div className="map-container" style={{ marginBottom: '1.5rem' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2673.3!2d106.91!3d47.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDU1JzEyLjAiTiAxMDbCsDU0JzM2LjAiRQ!5e0!3m2!1sen!2smn!4v1700000000000!5m2!1sen!2smn"
                  title="Сэлбэ Интернэшнл Сургуулийн байршил"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ width: '100%', height: '100%', border: 'none' }}
                />
              </div>

              <div style={{
                background: 'var(--color-off-white)',
                borderRadius: 'var(--radius)',
                padding: '1.5rem',
              }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Сургалтын байршлууд</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.25rem' }}>🏫</span>
                    <div>
                      <strong style={{ display: 'block', fontSize: '0.9rem' }}>Сэлбэ Интернэшнл Сургууль</strong>
                      <span style={{ fontSize: '0.85rem', color: 'var(--color-gray-500)' }}>Да, Лха — СБД, Сүхбаатар дүүрэг</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.25rem' }}>🏊</span>
                    <div>
                      <strong style={{ display: 'block', fontSize: '0.9rem' }}>Баянзүрх дүүргийн бассейн</strong>
                      <span style={{ fontSize: '0.85rem', color: 'var(--color-gray-500)' }}>Баа — Баянзүрх дүүрэг</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Join CTA ── */}
      <section className="section bg-light">
        <div className="container text-center">
          <h2 style={{ marginBottom: '1rem' }}>
            Бидэнтэй <span className="gradient-text">нэгдэхэд бэлэн үү?</span>
          </h2>
          <p style={{ color: 'var(--color-gray-500)', maxWidth: 500, margin: '0 auto 2rem' }}>
            Сургалтын үнэ, хуваарийг харж, өнөөдөр эхлэх шийдвэрийг гаргаарай.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/pricing" className="btn btn-primary">Үнэ харах</Link>
            <Link href="/training" className="btn btn-teal">Хуваарь харах</Link>
          </div>
        </div>
      </section>
    </>
  )
}
