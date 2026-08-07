import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settingss',
  type: 'document',
  fields: [
    defineField({
      name: 'homepage',
      title: 'Homepage',
      type: 'object',
      fields: [
        defineField({ name: 'story', title: 'Our Story Text', type: 'text', description: 'HTML is supported' }),
        defineField({ name: 'model', title: 'Model Quote', type: 'string' }),
      ]
    }),
    defineField({
      name: 'medWorkshop',
      title: 'Med Workshop',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'price', title: 'Price', type: 'string' }),
        defineField({ name: 'points', title: 'Bullet Points', type: 'array', of: [{ type: 'string' }] }),
      ]
    }),
    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({ name: 'email', title: 'Email Address', type: 'string' }),
      ]
    }),
  ]
})