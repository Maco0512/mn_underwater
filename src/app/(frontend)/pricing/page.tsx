import type { Metadata } from 'next'
import Link from 'next/link'
import { getPayload } from 'payload'

export const dynamic = 'force-dynamic'
import config from '@/payload.config'
import type { Pricing } from '@/payload-types'

export const metadata: Metadata = {
  title: 'Үнийн мэдээлэл',
  description:
    'Mongolian Under Water клубын сургалтын үнийн мэдээлэл. Сарын болон улирлын багцуудаас сонгоорой.',
}

const periodLabels: Record<string, string> = {
  month: 'сар',
  quarter: 'улирал',
  once: 'нэг удаа',
}

export default async function PricingPage() {
  const payload = await getPayload({ config: await config })

  const { docs: tiers } = await payload.find({
    collection: 'pricing',
    sort: 'order',
  }) as { docs: Pricing[] }

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="breadcrumb">
            <Link href="/">Нүүр</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Үнэ</span>
          </nav>
          <h1>Үнийн мэдээлэл</h1>
          <p>Танд тохирсон сургалтын багцыг сонгоорой</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {tiers.length === 0 ? (
            <div className="text-center" style={{ padding: '4rem 0', color: 'var(--color-gray-500)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💰</div>
              <p>Үнийн мэдээлэл тун удахгүй нэмэгдэнэ. Холбоо барьж лавлана уу.</p>
              <Link href="/contact" className="btn btn-teal" style={{ marginTop: '1rem' }}>Холбоо барих</Link>
            </div>
          ) : (
            <div className="grid-3">
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className={`pricing-card${tier.highlighted ? ' highlighted' : ''}`}
                  style={{ position: 'relative' }}
                >
                  {tier.highlighted && (
                    <div className="pricing-badge">★ Хамгийн алдартай</div>
                  )}
                  <div className="pricing-name">{tier.name}</div>
                  <div className="pricing-price">
                    {tier.price?.toLocaleString('mn-MN')}₮
                    {tier.period && (
                      <span> / {periodLabels[tier.period] ?? tier.period}</span>
                    )}
                  </div>
                  {tier.description && (
                    <p className="pricing-desc" style={{ marginTop: '0.5rem' }}>{tier.description}</p>
                  )}
                  {tier.features && tier.features.length > 0 && (
                    <ul className="pricing-features">
                      {tier.features.map((f, i) => (
                        <li key={i}>{f.item}</li>
                      ))}
                    </ul>
                  )}
                  <Link
                    href="/contact"
                    className={`btn ${tier.highlighted ? 'btn-teal' : 'btn-primary'}`}
                    style={{ marginTop: 'auto', textAlign: 'center', justifyContent: 'center' }}
                  >
                    Одоо бүртгүүлэх
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section bg-light">
        <div className="container" style={{ maxWidth: 800 }}>
          <div className="section-title">
            <h2>Түгээмэл <span className="gradient-text">асуултууд</span></h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              {
                q: 'Туршилтын хичээл байдаг уу?',
                a: 'Тийм. Эхлэхийн өмнө нэг туршилтын хичээлд үнэ төлбөргүй орох боломжтой.',
              },
              {
                q: 'Тоног төхөөрөмж шаардлагатай юу?',
                a: 'Эхний шатанд зөвхөн усны хувцас, нүдний шил шаардлагатай. Мэргэжлийн тоног төхөөрөмж клубаас хэсэг хугацаанд ашиглах боломжтой.',
              },
              {
                q: 'Насны хязгаар байдаг уу?',
                a: '8-аас дээш насны хүн бүр сурч болно. Хүүхдийн болон насанд хүрэгчдийн ангилалтай.',
              },
              {
                q: 'Төлбөрийг хэрхэн хийдэг вэ?',
                a: 'Бэлэн мөнгөөр эсвэл банкны шилжүүлгээр хийх боломжтой. Дэлгэрэнгүйг холбоо барьж лавлана уу.',
              },
            ].map((faq) => (
              <div key={faq.q} style={{
                background: 'white',
                borderRadius: 'var(--radius)',
                padding: '1.5rem',
                boxShadow: 'var(--shadow)',
              }}>
                <strong style={{ display: 'block', color: 'var(--color-deep)', marginBottom: '0.5rem' }}>
                  {faq.q}
                </strong>
                <p style={{ color: 'var(--color-gray-500)', marginBottom: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-2">
            <Link href="/contact" className="btn btn-primary">Дэлгэрэнгүй лавлах</Link>
          </div>
        </div>
      </section>
    </>
  )
}
