import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'w8ngou5u',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'skZnfqSaU4LDFYdKnMUh0WtBoT0yo5dG6622j4BMX1NlwJuHZQI7cFQV30nHWVOVfChPSav0m6nRae6r0sWuzXICfEkzgtaJYyoZ80aO9MGU2yWzeA1MnwDAMU6eHzA1s3uCge1YHeURznAoU3PyYCTVUvnMcBQniVsAJOgHgeG36uBbdrLh', // Keep this secure
  useCdn: false,
})

const foundersSectionData = {
  _type: 'foundersSection',
  _id: 'foundersSection',
  title: 'Meet The Founders',
  subtitle: "<span className='text-gray-900 font-bold'>Over 7 years of tutoring experience between us</span>, we built Ascensus Academy to deliver the kind of structured, high-impact support we felt was missing; focused not just on understanding, but on achieving top grades.",
  founders: [
    {
      _key: 'austin',
      name: 'Austin Jiji',
      title: 'Incoming Level 7 Degree Apprentice with PwC (Chartered Accountancy)',
      image: '/uploads/tutors/austin.webp',
      bio: "Austin achieved <span class='font-semibold'>A<sup>*</sup>AB at A-Level in Economics, Mathematics, and Physics</span>, ranking <span class='font-semibold'>1st in his cohort for Economics.</span> He is an incoming Degree Apprentice in Chartered Accountancy with PwC and the University of Nottingham, starting in September 2026, bringing a structured, results-driven approach shaped by both academic and professional experience.",
      subjects: ['Economics']
    },
    {
      _key: 'noel',
      name: 'Noel Chacko',
      title: 'Medical Student at the University of Birmingham',
      image: '/uploads/tutors/noel.webp',
      bio: "Noel achieved <span class='font-semibold'>A<sup>*</sup>AA at A-Level in Biology, Chemistry, and Mathematics</span>, ranking <span class='font-semibold'>1st in his cohort for Biology</span>. He is a second-year Medical student at the University of Birmingham, with a strong academic foundation and a precise, methodical approach to learning.",
      subjects: ['Biology']
    },
  ]
}

async function migrateFounders() {
  console.log('Migrating founders section...')
  await client.createOrReplace(foundersSectionData)
  console.log('Done migrating founders section.')
}

migrateFounders().catch(console.error)