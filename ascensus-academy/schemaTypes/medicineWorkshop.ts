import { defineField, defineType } from 'sanity'

export const medicineWorkshop = defineType({
  name: 'medicineWorkshop',
  title: 'Medicine Workshop',
  type: 'document',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({
      name: 'information',
      title: 'Information',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'price', title: 'Price', type: 'string' }),
        defineField({ name: 'points', title: 'Bullet Points', type: 'array', of: [{ type: 'string' }] }),
        defineField({ name: 'secondaryTitle', title: 'Secondary Title', type: 'string' }),
        defineField({ name: 'secondaryPoints', title: 'Secondary Bullet Points', type: 'array', of: [{ type: 'string' }] }),
      ]
    }),
  ]
})