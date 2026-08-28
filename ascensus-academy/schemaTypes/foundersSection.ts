import { defineField, defineType } from 'sanity'

export const foundersSection = defineType({
  name: 'foundersSection',
  title: 'Founders Section',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Section Title', type: 'string', initialValue: 'Meet the Founders' }),
    defineField({ name: 'subtitle', title: 'Section Subtitle', type: 'string', initialValue: "<span class='text-gray-900 font-bold'>Over 7 years of tutoring experience between us</span>, we built Ascensus Academy to deliver the kind of structured, high-impact support we felt was missing; focused not just on understanding, but on achieving top grades." }),
    defineField({
          name: 'founders',
          title: 'Founders',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'founderItem',
              title: 'Founder',
              fields: [
                defineField({ name: 'name', title: 'Name', type: 'string' }),
                defineField({ name: 'title', title: 'Title', type: 'string' }),
                defineField({ name: 'bio', title: 'Bio', type: 'text', description: 'HTML is supported' }),
                defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
                defineField({ 
                  name: 'subjects', 
                  title: 'Subjects', 
                  type: 'array', 
                  of: [{ type: 'string' }] 
                }),
              ],
            },
          ],
        }),
      ],
    })