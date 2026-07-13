import { defineField, defineType } from 'sanity'

export const pricing = defineType({
  name: 'pricing',
  title: 'Pricing',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'price', title: 'Price', type: 'string' }),
    defineField({ name: 'points', title: 'Bullet Points', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'secondaryTitle', title: 'Secondary Title', type: 'string' }),
    defineField({ name: 'secondaryPoints', title: 'Secondary Bullet Points', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  orderings: [{ title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }]
})