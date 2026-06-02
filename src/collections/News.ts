import type { CollectionConfig } from 'payload'

export const News: CollectionConfig = {
  slug: 'news',
  labels: {
    singular: 'Мэдээ',
    plural: 'Мэдээнүүд',
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'publishedAt'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Гарчиг',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'URL (slug)',
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Агуулга',
    },
    {
      name: 'coverImage',
      type: 'upload',
      label: 'Нүүр зураг',
      relationTo: 'media',
    },
    {
      name: 'category',
      type: 'select',
      label: 'Ангилал',
      options: [
        { label: 'Тэмцээн', value: 'competition' },
        { label: 'Зөвлөгөө & Блог', value: 'blog' },
        { label: 'Зар мэдээ', value: 'announcement' },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      label: 'Нийтлэгдсэн огноо',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
      defaultValue: () => new Date().toISOString(),
    },
  ],
}
