import { defineField, defineType } from 'sanity'

export const tutorsSection = defineType({
  name: 'tutorsSection',
  title: 'Tutors Section',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Section Title', type: 'string', initialValue: 'Meet Some Of Our Tutors' }),
    defineField({ name: 'subtitle', title: 'Section Subtitle', type: 'string', initialValue: 'Top achievers from the UK\'s best universities' }),
    defineField({
          name: 'tutors',
          title: 'Tutors',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'tutorItem',
              title: 'Tutor',
              fields: [
                defineField({ name: 'name', title: 'Name', type: 'string' }),
                defineField({ name: 'university', title: 'University', type: 'string' }),
                defineField({ name: 'course', title: 'Course', type: 'string' }),
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