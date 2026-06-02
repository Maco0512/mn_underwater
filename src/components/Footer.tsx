import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>🌊 Mongolian Under Water</h3>
            <p>
              CMAS-ын гишүүн клуб. Монгол улсад сэлүүрт сэлэлт болон усан доорх
              буудлагыг хөгжүүлж буй цорын ганц клуб.
            </p>
          </div>

          <div className="footer-links">
            <h4>Холбоос</h4>
            <ul>
              <li><Link href="/">Нүүр</Link></li>
              <li><Link href="/about">Бидний тухай</Link></li>
              <li><Link href="/training">Сургалт</Link></li>
              <li><Link href="/pricing">Үнэ</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Мэдээлэл</h4>
            <ul>
              <li><Link href="/teachers">Багш нар</Link></li>
              <li><Link href="/news">Мэдээ</Link></li>
              <li><Link href="/contact">Холбоо барих</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Холбоо барих</h4>
            <ul>
              <li><a href="tel:+97695101737">📞 95101737</a></li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61571766446542"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li><span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>СБД, Сэлбэ Интернэшнл Сургууль, УБ</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} Mongolian Under Water. Бүх эрх хамгаалагдсан.</p>
          <p>CMAS гишүүн клуб — Улаанбаатар, Монгол</p>
        </div>
      </div>
    </footer>
  )
}
