import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Бидний тухай',
  description:
    'Mongolian Under Water клубын түүх, эрхэм зорилго, CMAS гишүүнчлэл болон Монгол улсад усан доорх спортыг хөгжүүлэх тухай.',
}

export default function AboutPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="breadcrumb">
            <Link href="/">Нүүр</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Бидний тухай</span>
          </nav>
          <h1>Бидний тухай</h1>
          <p>Монголын усан доорх спортын хөгжлийн нэг хэсэг болоорой</p>
        </div>
      </div>

      {/* ── Mission ── */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <h2>Манай <span className="gradient-text">эрхэм зорилго</span></h2>
              <p>
                Mongolian Under Water нь Монгол улсад усан доорх спортыг хөгжүүлэх, дэлгэрүүлэх
                зорилгоор байгуулагдсан мэргэжлийн спортын клуб юм.
              </p>
              <p>
                Бид CMAS (Confederation Mondiale des Activités Subaquatiques) байгууллагын
                бүрэн эрхт гишүүн бөгөөд олон улсын стандартын дагуу сургалт явуулдаг.
              </p>
              <p>
                Манай зорилго бол Монголын залуу үеийнхэнд олон улсын тавцанд өрсөлдөх
                боломж олгох, улс орныхоо нэрийг усан доорх спортоор өргөх явдал юм.
              </p>
            </div>
            <div style={{
              background: 'var(--color-off-white)',
              borderRadius: 'var(--radius)',
              padding: '3rem',
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  { icon: '🏅', title: 'CMAS гишүүн', desc: 'Олон улсын усан доорх спортын холбооны бүрэн эрхт гишүүн' },
                  { icon: '🎯', title: 'Мэргэжлийн сургалт', desc: 'CMAS стандартын дагуу зэрэглэл олгодог сургалтын хөтөлбөр' },
                  { icon: '🌍', title: 'Олон улсын хөгжил', desc: 'Монгол тамирчдыг олон улсын тэмцээнд оролцуулах зорилт' },
                  { icon: '💧', title: '2 газарт сургалт', desc: 'Улаанбаатарын 2 дасгалжуулах газарт тогтмол сургалт' },
                ].map((item) => (
                  <div key={item.title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '1.75rem', flexShrink: 0 }}>{item.icon}</span>
                    <div>
                      <strong style={{ display: 'block', color: 'var(--color-deep)', marginBottom: '0.25rem' }}>{item.title}</strong>
                      <span style={{ color: 'var(--color-gray-500)', fontSize: '0.9rem' }}>{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sports ── */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Спортын <span className="gradient-text">төрлүүд</span></h2>
            <p>Бид дараах усан доорх спортын 2 төрлийг хөгжүүлж байна</p>
          </div>
          <div className="grid-2">
            <div style={{
              background: 'white',
              borderRadius: 'var(--radius)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow)',
            }}>
              <div style={{
                background: 'linear-gradient(135deg, var(--color-ocean), #0e5a8a)',
                padding: '2rem',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '4rem', marginBottom: '0.5rem' }}>🏊</div>
                <h3 style={{ color: 'white' }}>Сэлүүрт сэлэлт</h3>
              </div>
              <div style={{ padding: '2rem' }}>
                <p>
                  <strong>Finswimming</strong> буюу сэлүүрт сэлэлт нь моно сэлүүр (monofin) эсвэл
                  нэлд сэлүүр (bifins) ашиглан усан доор болон гадаргуугаар хурдан сэлэх
                  олон улсын спортын төрөл юм.
                </p>
                <p>
                  CMAS-ын оруулсан энэ спорт нь усанд хурдан хөдөлгөөн, агаар барих чадвар,
                  биеийн хүч чадлыг хосолсон өвөрмөц спорт юм.
                </p>
                <ul style={{ paddingLeft: '1.25rem', color: 'var(--color-gray-500)', lineHeight: 1.8 }}>
                  <li>Апна (Apnea) — амьсгалаа барьж гүн усанд сэлэх</li>
                  <li>Гадаргуу — усны гадаргуугаар хурдан сэлэх</li>
                  <li>Усан доор — усан дор хурдан сэлэх</li>
                </ul>
              </div>
            </div>

            <div style={{
              background: 'white',
              borderRadius: 'var(--radius)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow)',
            }}>
              <div style={{
                background: 'linear-gradient(135deg, var(--color-teal), #00695c)',
                padding: '2rem',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '4rem', marginBottom: '0.5rem' }}>🎯</div>
                <h3 style={{ color: 'white' }}>Усан доорх буудлага</h3>
              </div>
              <div style={{ padding: '2rem' }}>
                <p>
                  <strong>Underwater target shooting</strong> нь усан дор байрлах онилдог
                  сумаар (pneumatic speargun) тодорхой зайнаас хийн хийж онох спортын
                  төрөл юм.
                </p>
                <p>
                  Монгол улсад энэ спорт шинэ бөгөөд олон улсын тавцанд Монголыг төлөөлөх
                  боломжтой цоо шинэ спорт юм. Тэмцэн судалгаанд, техникт суурилсан спорт.
                </p>
                <ul style={{ paddingLeft: '1.25rem', color: 'var(--color-gray-500)', lineHeight: 1.8 }}>
                  <li>5 метрийн зайнаас онилох</li>
                  <li>Усан доор амьсгалаа барьж гүйцэтгэх</li>
                  <li>Олон улсын CMAS дүрмийн дагуу</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CMAS ── */}
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <div className="text-center">
            <h2>CMAS-ын <span className="gradient-text">гишүүнчлэл</span></h2>
            <p style={{ color: 'var(--color-gray-500)', marginBottom: '2rem' }}>
              CMAS (Confederation Mondiale des Activités Subaquatiques) нь 1959 онд байгуулагдсан
              усан доорх спортын хамгийн том олон улсын байгууллага юм. Mongolian Under Water нь
              энэ байгууллагын Монголын бүрэн эрхт гишүүн клуб болдог.
            </p>
            <div className="grid-3">
              {[
                { num: '130+', label: 'Орны гишүүн' },
                { num: '1959', label: 'Байгуулагдсан он' },
                { num: '20+', label: 'Спортын төрөл' },
              ].map((s) => (
                <div key={s.label} style={{
                  background: 'linear-gradient(135deg, var(--color-ocean), var(--color-teal))',
                  borderRadius: 'var(--radius)',
                  padding: '2rem',
                  color: 'white',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: '0.9rem', opacity: 0.85, marginTop: '0.5rem' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section bg-ocean">
        <div className="container text-center">
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>Бидэнтэй нэгдэх үү?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', maxWidth: 500, margin: '0 auto 2rem' }}>
            Туршлага шаардлагагүй. Бид таныг мэргэжлийн сургалтаар хүлээж байна.
          </p>
          <Link href="/contact" className="btn btn-primary">Холбоо барих</Link>
        </div>
      </section>
    </>
  )
}
