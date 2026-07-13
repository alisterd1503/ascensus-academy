import { defineField, defineType } from 'sanity'

export const tutor = defineType({
  name: 'tutor',
  title: 'Tutors',
  type: 'document',
  fields: [
    defineField({ name: 'id', title: 'ID', type: 'slug', options: { source: 'name' } }),
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({ name: 'university', title: 'University', type: 'string' }),
    defineField({ name: 'course', title: 'Course', type: 'string' }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'bio', title: 'Bio', type: 'text', description: 'HTML is supported e.g. <span class="font-semibold">bold</span>' }),
    defineField({ name: 'subjects', title: 'Subjects', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  orderings: [{ title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }]
})