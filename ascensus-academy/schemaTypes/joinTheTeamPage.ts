import { defineField, defineType } from 'sanity'

export const joinTheTeamPage = defineType({
  name: 'joinTheTeamPage',
  title: 'Join The Team Page',
  type: 'document',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'image', title: 'Background Image', type: 'image', options: { hotspot: true } }),
  ]
})