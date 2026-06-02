import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './styles.css'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'),
  title: {
    default: 'Mongolian Under Water — Сэлүүрт сэлэлт & Усан доорх буудлага',
    template: '%s | Mongolian Under Water',
  },
  description:
    'CMAS-ын гишүүн клуб. Монгол улсад сэлүүрт сэлэлт болон усан доорх буудлагыг хөгжүүлж буй клуб. Улаанбаатар хотод сургалт явуулж байна.',
  keywords: ['сэлүүрт сэлэлт', 'усан доорх буудлага', 'CMAS', 'Монгол', 'Улаанбаатар', 'сэлэлт'],
  openGraph: {
    type: 'website',
    locale: 'mn_MN',
    siteName: 'Mongolian Under Water',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="mn">
      <body>
        <Navbar />
        <div className="page-content">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
