import { defineField, defineType } from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({
      name: 'aboutUs',
      title: 'Who Are We',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'text', title: 'Story Text', type: 'text', description: 'HTML is supported' }),
        defineField({ name: 'secondaryTitle', title: 'Secondary Title', type: 'string' }),
        defineField({ name: 'points', title: 'Points', type: 'array', of: [{ type: 'string' }] }),
        defineField({ name: 'secondaryText', title: 'Secondary Text', type: 'text', description: 'HTML is supported' }),
        defineField({ name: 'image', title: 'Background Image', type: 'image', options: { hotspot: true } }),
      ]
    }),
    defineField({
      name: 'aboutJourney',
      title: 'Our Journey',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'text', title: 'Story Text', type: 'text', description: 'HTML is supported' }),
        defineField({ name: 'image', title: 'Our Story Image', type: 'image', options: { hotspot: true } }),
      ]
    }),
  ]
})