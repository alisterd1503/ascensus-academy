import { defineField, defineType } from 'sanity'

export const subject = defineType({
  name: 'subject',
  title: 'Subjects',
  type: 'document',
  fields: [
    defineField({ name: 'subject', title: 'Subject Name', type: 'string' }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  orderings: [{ title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }]
})