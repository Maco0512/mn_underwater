import type { CollectionConfig } from 'payload'

export const Pricing: CollectionConfig = {
  slug: 'pricing',
  labels: {
    singular: 'Үнийн багц',
    plural: 'Үнийн багцууд',
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'price', 'period', 'highlighted', 'order'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Багцын нэр',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      label: 'Үнэ ₮',
      required: true,
    },
    {
      name: 'period',
      type: 'select',
      label: 'Хугацаа',
      options: [
        { label: 'Сар', value: 'month' },
        { label: 'Улирал', value: 'quarter' },
        { label: 'Нэг удаа', value: 'once' },
      ],
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Тайлбар',
    },
    {
      name: 'features',
      type: 'array',
      label: 'Багтсан зүйлс',
      fields: [
        {
          name: 'item',
          type: 'text',
          label: 'Зүйл',
        },
      ],
    },
    {
      name: 'highlighted',
      type: 'checkbox',
      label: 'Онцлох',
      defaultValue: false,
    },
    {
      name: 'order',
      type: 'number',
      label: 'Дэс дараалал',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
