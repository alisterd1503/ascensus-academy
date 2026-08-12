import { defineField, defineType } from 'sanity'

export const portalLoginPage = defineType({
  name: 'portalLoginPage',
  title: 'Portal Login Page',
  type: 'document',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'image', title: 'Background Image', type: 'image', options: { hotspot: true } }),
  ]
})