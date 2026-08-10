import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'w8ngou5u',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'skZnfqSaU4LDFYdKnMUh0WtBoT0yo5dG6622j4BMX1NlwJuHZQI7cFQV30nHWVOVfChPSav0m6nRae6r0sWuzXICfEkzgtaJYyoZ80aO9MGU2yWzeA1MnwDAMU6eHzA1s3uCge1YHeURznAoU3PyYCTVUvnMcBQniVsAJOgHgeG36uBbdrLh', // Keep this secure
  useCdn: false,
})

const qualificationsSectionData = {
  _type: 'qualificationsSection',
  _id: 'qualificationsSection',
   heading: "Pricing",
  subheading: "Choose the qualification level that suits your needs.",
  description: "Both GCSE and A-Level students receive the same high-quality tutoring, the only difference is the tailored mentorship included for each stage.",
  qualifications: [
    {
      _key: "a-level",
      title: "A-Level",
      price: "£36/hour",
      points: [
        "Expert tutor with deep knowledge of the A-Level curriculum.",
        "Lessons tailored to individual learning styles to maximise understanding.",
        "Exam technique coaching to build confidence and boost performance.",
      ],
      secondaryTitle: "Included mentorship",
      secondaryPoints: [
        "Guidance for UCAS and Degree Apprenticeship applications.",
        "Support with university entrance exams, personal statements, assessment centres and more!",
        "Interview preparation and academic enrichment advice.",
      ],
    },
    {
      _key: "gcse",
      title: "GCSE",
      price: "£24/hour",
      points: [
        "Experienced tutor with a passion for helping students succeed.",
        "Specialises in making complex topics understandable and engaging.",
        "Focuses on building confidence and study skills alongside subject knowledge.",
      ],
      secondaryTitle: "Included mentorship",
      secondaryPoints: [
        "Free personalised guidance on A-Level subject choices.",
        "Early career insights and pathways.",
        "Advice on building strong academic habits before sixth form.",
      ],
    },
  ]
}

async function migrateQualifications() {
  console.log('Migrating qualifications section...')
  await client.createOrReplace(qualificationsSectionData)
  console.log('Done migrating qualifications section.')
}

migrateQualifications().catch(console.error)