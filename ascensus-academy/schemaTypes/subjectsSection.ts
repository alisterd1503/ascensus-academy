import { defineField, defineType } from 'sanity'

export const subjectsSection = defineType({
  name: 'subjectsSection',
  title: 'Subjects Section',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({
      name: 'subjects',
      title: 'Subjects',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'subjectItem',
          title: 'Subject',
          fields: [
            defineField({ name: 'subject', title: 'Subject Name', type: 'string' }),
            defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
            defineField({ name: 'order', title: 'Display Order', type: 'number' })
          ]
        }
      ]
    }),
  ]
})