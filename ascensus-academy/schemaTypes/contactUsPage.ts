import { defineField, defineType } from 'sanity'

export const contactUsPage = defineType({
  name: 'contactUsPage',
  title: 'Contact Us Page',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'image', title: 'Background Image', type: 'image', options: { hotspot: true } }),
  ]
})