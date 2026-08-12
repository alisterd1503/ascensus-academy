import { defineField, defineType } from 'sanity'

export const signUpPage = defineType({
  name: 'signUpPage',
  title: 'Sign Up Page',
  type: 'document',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'subheading', title: 'Subheading', type: 'string' }),
    defineField({ name: 'image', title: 'Background Image', type: 'image', options: { hotspot: true } }),
  ]
})