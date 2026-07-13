import { defineField, defineType } from 'sanity'

export const founder = defineType({
  name: 'founder',
  title: 'Founders',
  type: 'document',
  fields: [
    defineField({ name: 'id', title: 'ID', type: 'slug', options: { source: 'name' } }),
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({ name: 'title', title: 'Title/Role', type: 'string' }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'bio', title: 'Bio', type: 'text', description: 'HTML is supported' }),
    defineField({ name: 'subjects', title: 'Subjects', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  orderings: [{ title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }]
})