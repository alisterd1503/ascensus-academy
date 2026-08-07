import { defineField, defineType } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({ name: 'welcomeText', title: 'Welcome Text', type: 'string' }),
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
        defineField({ name: 'primaryButtonLabel', title: 'Primary Button Label', type: 'string' }),
        defineField({ name: 'secondaryButtonLabel', title: 'Secondary Button Label', type: 'string' }),
        defineField({ name: 'image', title: 'Background Image', type: 'image', options: { hotspot: true } }),
      ]
    }),
    defineField({
      name: 'story',
      title: 'Our Story',
      type: 'object',
      fields: [
        defineField({ name: 'text', title: 'Story Text', type: 'text', description: 'HTML is supported' }),
        defineField({ name: 'buttonLabel', title: 'Button Label', type: 'string' }),
        defineField({ name: 'image', title: 'Our Story Image', type: 'image', options: { hotspot: true } }),
      ]
    }),
    defineField({
      name: 'model',
      title: 'Our Model',
      type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'quote', title: 'Quote', type: 'string' }),
      ]
    }),
    defineField({
      name: 'cta',
      title: 'CTA',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'text', title: 'Text', type: 'text' }),
        defineField({ name: 'primaryButtonLabel', title: 'Primary Button Label', type: 'string' }),
        defineField({ name: 'secondaryButtonLabel', title: 'Secondary Button Label', type: 'string' }),
      ]
    }),
  ]
})