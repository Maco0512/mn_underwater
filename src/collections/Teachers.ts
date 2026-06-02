import type { CollectionConfig } from 'payload'

export const Teachers: CollectionConfig = {
  slug: 'teachers',
  labels: {
    singular: 'Багш',
    plural: 'Багш нар',
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'role', 'order'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Нэр',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
      label: 'Албан тушаал / Зэрэг',
    },
    {
      name: 'photo',
      type: 'upload',
      label: 'Зураг',
      relationTo: 'media',
    },
    {
      name: 'bio',
      type: 'textarea',
      label: 'Танилцуулга',
    },
    {
      name: 'certifications',
      type: 'array',
      label: 'Гэрчилгээ',
      fields: [
        {
          name: 'cert',
          type: 'text',
          label: 'Гэрчилгээний нэр',
        },
      ],
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
