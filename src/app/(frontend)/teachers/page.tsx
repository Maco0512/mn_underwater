import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPayload } from 'payload'

export const dynamic = 'force-dynamic'
import config from '@/payload.config'
import type { Teacher, Media } from '@/payload-types'

export const metadata: Metadata = {
  title: 'Багш нар',
  description:
    'Mongolian Under Water клубын мэргэжлийн тренерүүд, CMAS гэрчилгээтэй багш нар.',
}

export default async function TeachersPage() {
  const payload = await getPayload({ config: await config })

  const { docs: teachers } = await payload.find({
    collection: 'teachers',
    sort: 'order',
  }) as { docs: Teacher[] }

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="breadcrumb">
            <Link href="/">Нүүр</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Багш нар</span>
          </nav>
          <h1>Багш нар</h1>
          <p>Мэргэжлийн CMAS-гэрчилгээтэй тренерүүдтэй танилц</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {teachers.length === 0 ? (
            <div className="text-center" style={{ padding: '4rem 0', color: 'var(--color-gray-500)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👨‍🏫</div>
              <p>Багш нарын мэдээлэл тун удахгүй нэмэгдэнэ.</p>
            </div>
          ) : (
            <div className="grid-3">
              {teachers.map((teacher) => {
                const photo = teacher.photo as Media | null
                return (
                  <article key={teacher.id} className="teacher-card">
                    <div className="teacher-photo-wrap">
                      {photo && typeof photo === 'object' && photo.url ? (
                        <Image
                          src={photo.url}
                          alt={photo.alt || teacher.name}
                          width={400}
                          height={400}
                          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        />
                      ) : (
                        <div className="teacher-photo-placeholder">👤</div>
                      )}
                    </div>
                    <div className="teacher-body">
                      <h3>{teacher.name}</h3>
                      {teacher.role && <p className="teacher-role">{teacher.role}</p>}
                      {teacher.bio && <p className="teacher-bio">{teacher.bio}</p>}
                      {teacher.certifications && teacher.certifications.length > 0 && (
                        <div className="teacher-certs">
                          {teacher.certifications.map((c, i) => (
                            <span key={i} className="cert-badge">{c.cert}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </article>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* ── Join ── */}
      <section className="section bg-ocean">
        <div className="container text-center">
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>Манай багш нараас сурахыг хүсч байна уу?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', maxWidth: 500, margin: '0 auto 2rem' }}>
            Мэргэжлийн тренерүүдтэй хамт сурснаар хурдан дэвших боломжтой.
          </p>
          <Link href="/contact" className="btn btn-primary">Холбоо барих</Link>
        </div>
      </section>
    </>
  )
}
