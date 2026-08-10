import { defineField, defineType } from 'sanity'

export const qualificationsSection = defineType({
  name: 'qualificationsSection',
  title: 'Qualifications Section',
  type: 'document',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'subheading', title: 'Subheading', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({
      name: 'qualifications',
      title: 'Qualifications',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'qualificationItem',
          title: 'Qualification',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'price', title: 'Price', type: 'string' }),
            defineField({ name: 'points', title: 'Bullet Points', type: 'array', of: [{ type: 'string' }] }),
            defineField({ name: 'secondaryTitle', title: 'Secondary Title', type: 'string' }),
            defineField({ name: 'secondaryPoints', title: 'Secondary Bullet Points', type: 'array', of: [{ type: 'string' }] }),
        ]
      }]
    }),
  ]
})