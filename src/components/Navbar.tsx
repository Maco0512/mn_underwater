'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/', label: 'Нүүр' },
  { href: '/about', label: 'Бидний тухай' },
  { href: '/training', label: 'Сургалт' },
  { href: '/pricing', label: 'Үнэ' },
  { href: '/teachers', label: 'Багш нар' },
  { href: '/news', label: 'Мэдээ' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar" aria-label="Үндсэн цэс">
      <div className="container navbar-inner">
        <Link href="/" className="navbar-logo" onClick={() => setOpen(false)}>
          <span className="navbar-logo-icon" aria-hidden="true">🌊</span>
          <span>Mongolian Under Water</span>
        </Link>

        <ul className={`navbar-links${open ? ' open' : ''}`}>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={pathname === link.href ? 'page' : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="navbar-cta">
            <Link href="/contact" onClick={() => setOpen(false)}>
              Холбоо барих
            </Link>
          </li>
        </ul>

        <button
          className="navbar-toggle"
          aria-label="Цэс нээх/хаах"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  )
}
