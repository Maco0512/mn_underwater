import 'dotenv/config'
import { getPayload } from 'payload'
import config from './payload.config'

async function seed() {
  const payload = await getPayload({ config: await config })

  console.log('🌱 Seed эхэлж байна...')

  // ── Teachers ──
  console.log('👨‍🏫 Багш нар үүсгэж байна...')

  const t1 = await payload.create({
    collection: 'teachers',
    data: {
      name: 'Батмөнх Дорж',
      role: 'Ахлах тренер / CMAS II',
      bio: 'Монгол улсад сэлүүрт сэлэлтийг нэвтрүүлсэн анхны тренеруудын нэг. CMAS II зэрэгтэй, 10+ жилийн туршлагатай.',
      certifications: [
        { cert: 'CMAS ★★ Instructor' },
        { cert: 'Finswimming Coach' },
        { cert: 'Apnea Instructor' },
      ],
      order: 1,
    },
  })

  const t2 = await payload.create({
    collection: 'teachers',
    data: {
      name: 'Сарантуяа Нямгэрэл',
      role: 'Тренер / Усан доорх буудлага',
      bio: 'Усан доорх буудлагын мэргэжлийн тренер. Олон улсын тэмцээнд оролцогч.',
      certifications: [
        { cert: 'CMAS Underwater Target Shooting Coach' },
        { cert: 'CMAS ★ Diver' },
      ],
      order: 2,
    },
  })

  const t3 = await payload.create({
    collection: 'teachers',
    data: {
      name: 'Энхбаяр Гантулга',
      role: 'Туслах тренер',
      bio: 'Залуу тренер, сэлүүрт сэлэлтийн дотоодын тэмцээнд амжилттай оролцогч.',
      certifications: [
        { cert: 'CMAS ★ Instructor' },
        { cert: 'National Finswimming Medalist' },
      ],
      order: 3,
    },
  })

  console.log(`  ✓ ${t1.name}, ${t2.name}, ${t3.name}`)

  // ── Pricing ──
  console.log('💰 Үнийн багц үүсгэж байна...')

  const p1 = await payload.create({
    collection: 'pricing',
    data: {
      name: 'Эхлэлийн багц',
      price: 50000,
      period: 'month',
      description: 'Усны спортод анх эхлэгчдэд зориулсан багц',
      features: [
        { item: 'Долоо хоногт 2 хичээл' },
        { item: 'Эхлэлийн техникийн сургалт' },
        { item: 'Тоног төхөөрөмж ашиглах' },
        { item: 'CMAS гэрчилгээний бэлтгэл' },
      ],
      highlighted: false,
      order: 1,
    },
  })

  const p2 = await payload.create({
    collection: 'pricing',
    data: {
      name: 'Стандарт багц',
      price: 80000,
      period: 'month',
      description: 'Тогтмол дасгалжих хүмүүст хамгийн тохиромжтой',
      features: [
        { item: 'Долоо хоногт 3 хичээл (бүгд)' },
        { item: 'Дунд болон дэвшилтэт техник' },
        { item: 'Тоног төхөөрөмж ашиглах' },
        { item: 'Тэмцээнд бэлтгэх дэмжлэг' },
        { item: 'CMAS ★ зэрэг авах боломж' },
      ],
      highlighted: true,
      order: 2,
    },
  })

  const p3 = await payload.create({
    collection: 'pricing',
    data: {
      name: 'Улирлын багц',
      price: 200000,
      period: 'quarter',
      description: '3 сарын тогтмол сургалт, хямдралтай үнэ',
      features: [
        { item: '3 сарын бүх хичээлүүд' },
        { item: 'Бүх түвшний сургалт' },
        { item: 'Тоног төхөөрөмж ашиглах' },
        { item: 'CMAS зэрэг авах дэмжлэг' },
        { item: 'Тэмцээнд бүртгүүлэх зөвлөгөө' },
        { item: '20% хямдрал' },
      ],
      highlighted: false,
      order: 3,
    },
  })

  console.log(`  ✓ ${p1.name}, ${p2.name}, ${p3.name}`)

  // ── News ──
  console.log('📰 Мэдээ үүсгэж байна...')

  const n1 = await payload.create({
    collection: 'news',
    data: {
      title: 'Mongolian Under Water клуб байгуулагдлаа',
      slug: 'club-established',
      category: 'announcement',
      publishedAt: new Date('2024-01-15').toISOString(),
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'Монгол улсад анх удаа сэлүүрт сэлэлт болон усан доорх буудлагыг хөгжүүлэх зорилгоор "Mongolian Under Water" клуб байгуулагдлаа.',
                  version: 1,
                },
              ],
              version: 1,
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'Энэхүү клуб нь CMAS (Confederation Mondiale des Activités Subaquatiques) байгууллагын бүрэн эрхт гишүүн бөгөөд олон улсын стандартын дагуу сургалт явуулна.',
                  version: 1,
                },
              ],
              version: 1,
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'Сургалт Улаанбаатар хотын 2 газарт — Сэлбэ Интернэшнл Сургууль болон Баянзүрх дүүргийн бассейнд явагдана. Бүртгэлийн мэдэгдэл тун удахгүй гарна.',
                  version: 1,
                },
              ],
              version: 1,
            },
          ],
          direction: null,
          format: '',
          indent: 0,
          version: 1,
        },
      },
    },
  })

  const n2 = await payload.create({
    collection: 'news',
    data: {
      title: 'Дотоодын анхны сэлүүрт сэлэлтийн тэмцээн амжилттай болов',
      slug: 'first-finswimming-competition',
      category: 'competition',
      publishedAt: new Date('2024-06-20').toISOString(),
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'Монгол улсад анх удаа явагдсан сэлүүрт сэлэлтийн тэмцээн амжилттай дуусав. Тэмцээнд 20 гаруй тамирчин оролцож, хурдны болон апна (амьсгал барих) ангиллаар өрсөлдлөө.',
                  version: 1,
                },
              ],
              version: 1,
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'Тэмцээн Сэлбэ Интернэшнл Сургуулийн бассейнд явагдаж, үзэгчдийн дунд маш их сонирхол төрүүллээ. Манай клубын тамирчид медалийн тоонд орж, сайн үзүүлэлт харуулав.',
                  version: 1,
                },
              ],
              version: 1,
            },
          ],
          direction: null,
          format: '',
          indent: 0,
          version: 1,
        },
      },
    },
  })

  const n3 = await payload.create({
    collection: 'news',
    data: {
      title: 'Шинэ сургалтын бүртгэл нээгдлээ — 2025 намрын улирал',
      slug: 'enrollment-open-2025-autumn',
      category: 'announcement',
      publishedAt: new Date('2025-08-01').toISOString(),
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: '2025 оны намрын улиралд сэлүүрт сэлэлт болон усан доорх буудлагын сургалтад бүртгэл нээлтэй байна. Анх орогчдод туршилтын хичээл үнэ төлбөргүй.',
                  version: 1,
                },
              ],
              version: 1,
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'Бүртгүүлэхийн тулд манай Facebook хуудсаар эсвэл 95101737 дугаарт холбоо барина уу. Байрны тоо хязгаартай тул эрт бүртгүүлэхийг зөвлөж байна.',
                  version: 1,
                },
              ],
              version: 1,
            },
          ],
          direction: null,
          format: '',
          indent: 0,
          version: 1,
        },
      },
    },
  })

  console.log(`  ✓ "${n1.title}"`)
  console.log(`  ✓ "${n2.title}"`)
  console.log(`  ✓ "${n3.title}"`)

  console.log('\n✅ Seed амжилттай дууслаа!')
  process.exit(0)
}

seed().catch((err) => {
  console.error('❌ Seed алдаа:', err)
  process.exit(1)
})
