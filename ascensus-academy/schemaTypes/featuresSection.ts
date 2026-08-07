import { defineField, defineType } from 'sanity'

export const featuresSection = defineType({
  name: 'featuresSection',
  title: 'Features Section',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Section Title', type: 'string', initialValue: 'What We Offer' }),
    defineField({
      name: 'items',
      title: 'Feature Items',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'featureItem',
          title: 'Feature Item',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text', description: 'HTML is supported' }),
            defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
          ],
        },
      ],
    }),
  ],
})