import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Сургалт & Хуваарь',
  description:
    'Mongolian Under Water клубын сургалтын хуваарь, байршил, элсэлтийн мэдээлэл. Даваа, Лхагва, Баасан гарагт Улаанбаатарын 2 бассейнд сургалт явагдана.',
}

const schedule = [
  { day: 'Даваа', location: 'Сэлбэ Интернэшнл Сургууль', shift1: '07:00–08:30', shift2: '18:00–19:30' },
  { day: 'Лхагва', location: 'Сэлбэ Интернэшнл Сургууль', shift1: '07:00–08:30', shift2: '18:00–19:30' },
  { day: 'Баасан', location: 'Баянзүрх дүүргийн бассейн', shift1: '07:00–08:30', shift2: '18:00–19:30' },
]

export default function TrainingPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="breadcrumb">
            <Link href="/">Нүүр</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Сургалт & Хуваарь</span>
          </nav>
          <h1>Сургалт & Хуваарь</h1>
          <p>Долоо хоногт 3 удаа, 2 газарт явагддаг мэргэжлийн сургалт</p>
        </div>
      </div>

      {/* ── Schedule ── */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Сургалтын <span className="gradient-text">хуваарь</span></h2>
            <p>Өглөө болон орой гэсэн 2 ээлжтэй</p>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table className="schedule-table">
              <thead>
                <tr>
                  <th>Гараг</th>
                  <th>Байршил</th>
                  <th>Өглөөний ээлж</th>
                  <th>Оройн ээлж</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((row) => (
                  <tr key={row.day}>
                    <td><strong>{row.day}</strong></td>
                    <td>{row.location}</td>
                    <td>🌅 {row.shift1}</td>
                    <td>🌆 {row.shift2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ color: 'var(--color-gray-500)', marginTop: '1rem', fontSize: '0.9rem', textAlign: 'center' }}>
            * Хуваарь өөрчлөгдсөн тохиолдолд манай Facebook хуудсаар мэдэгдэнэ.
          </p>
        </div>
      </section>

      {/* ── Locations ── */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Дасгалжуулах <span className="gradient-text">газрууд</span></h2>
          </div>
          <div className="grid-2">
            <div style={{ background: 'white', borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
              <div style={{
                background: 'linear-gradient(135deg, var(--color-ocean), var(--color-blue))',
                padding: '2rem',
                color: 'white',
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🏫</div>
                <h3 style={{ color: 'white', marginBottom: '0.25rem' }}>Сэлбэ Интернэшнл Сургууль</h3>
                <p style={{ opacity: 0.85, marginBottom: 0 }}>Даваа, Лхагва</p>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-text">
                    <strong>Байршил</strong>
                    <span>СБД, Сүхбаатар дүүрэг, Улаанбаатар</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">🏊</div>
                  <div className="contact-text">
                    <strong>Бассейн</strong>
                    <span>25 метрийн олон улсын стандартын бассейн</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">🚌</div>
                  <div className="contact-text">
                    <strong>Хүрэх зам</strong>
                    <span>Сүхбаатар дүүргийн төв хэсэг, нийтийн тээврээр хүрэх боломжтой</span>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ background: 'white', borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
              <div style={{
                background: 'linear-gradient(135deg, var(--color-teal), #00695c)',
                padding: '2rem',
                color: 'white',
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🏊</div>
                <h3 style={{ color: 'white', marginBottom: '0.25rem' }}>Баянзүрх дүүргийн бассейн</h3>
                <p style={{ opacity: 0.85, marginBottom: 0 }}>Баасан</p>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-text">
                    <strong>Байршил</strong>
                    <span>Баянзүрх дүүрэг, Улаанбаатар</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">🏊</div>
                  <div className="contact-text">
                    <strong>Бассейн</strong>
                    <span>Дүүргийн спортын төвийн бассейн</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">🚌</div>
                  <div className="contact-text">
                    <strong>Хүрэх зам</strong>
                    <span>Баянзүрх дүүргийн төв, нийтийн тээврээр хүрэх боломжтой</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What to bring ── */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start', gap: '4rem' }}>
            <div>
              <h2>Авч <span className="gradient-text">явах зүйлс</span></h2>
              <p style={{ color: 'var(--color-gray-500)', marginBottom: '1.5rem' }}>
                Эхний сургалтад орохдоо дараах зүйлсийг авч ирнэ үү:
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { icon: '🩱', item: 'Усны хувцас (завьсан бус)' },
                  { icon: '🥽', item: 'Усны нүдний шил' },
                  { icon: '🧢', item: 'Усны малгай' },
                  { icon: '🏊', item: 'Алгайт гутал (байгаа бол)' },
                  { icon: '🧴', item: 'Алчуур, хувийн цүнх' },
                  { icon: '💧', item: 'Ус уух савтай ус' },
                ].map((row) => (
                  <li key={row.item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>{row.icon}</span>
                    <span>{row.item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2>Элсэлтийн <span className="gradient-text">мэдээлэл</span></h2>
              <p style={{ color: 'var(--color-gray-500)', marginBottom: '1.5rem' }}>
                Манай клубт нэгдэхийн тулд дараах алхмуудыг дагана уу:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { n: 1, title: 'Холбоо барих', desc: 'Утас эсвэл Facebook-ээр холбоо барь' },
                  { n: 2, title: 'Танилцуулга хичээл', desc: 'Эхний туршилтын хичээлд орно' },
                  { n: 3, title: 'Элсэлт', desc: 'Гэрээ байгуулж, төлбөр хийнэ' },
                  { n: 4, title: 'Сургалт эхлэнэ', desc: 'Мэргэжлийн тренертэй сургалт эхлэнэ' },
                ].map((step) => (
                  <div key={step.n} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{
                      width: 36, height: 36,
                      background: 'linear-gradient(135deg, var(--color-blue), var(--color-teal))',
                      borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'white', fontWeight: 700, fontSize: '0.9rem',
                      flexShrink: 0,
                    }}>{step.n}</div>
                    <div>
                      <strong style={{ display: 'block', marginBottom: '0.15rem' }}>{step.title}</strong>
                      <span style={{ color: 'var(--color-gray-500)', fontSize: '0.9rem' }}>{step.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '2rem' }}>
                <Link href="/contact" className="btn btn-teal">Одоо нэгдэх</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Levels ── */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Сургалтын <span className="gradient-text">түвшнүүд</span></h2>
            <p>Эхлэлийн шатнаас мэргэжлийн зэрэг хүртэл бүх түвшинд сургалт</p>
          </div>
          <div className="grid-3">
            {[
              { icon: '🌱', level: 'Эхлэлийн', desc: 'Усны хөдөлгөөний суурь мэдлэг, аюулгүй байдал, хамгийн энгийн техникүүд.' },
              { icon: '🌊', level: 'Дунд', desc: 'Техникийн чанарыг сайжруулах, хурд нэмэгдүүлэх, олон улсын дүрмийг сурах.' },
              { icon: '🏆', level: 'Дэвшилтэт', desc: 'Тэмцээнд бэлтгэх, олон улсын зэрэг авах, CMAS гэрчилгээ олгоно.' },
            ].map((l) => (
              <div key={l.level} className="feature-card">
                <div className="feature-icon">{l.icon}</div>
                <h3>{l.level} түвшин</h3>
                <p>{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
