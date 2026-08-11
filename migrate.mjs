import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'w8ngou5u',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'skZnfqSaU4LDFYdKnMUh0WtBoT0yo5dG6622j4BMX1NlwJuHZQI7cFQV30nHWVOVfChPSav0m6nRae6r0sWuzXICfEkzgtaJYyoZ80aO9MGU2yWzeA1MnwDAMU6eHzA1s3uCge1YHeURznAoU3PyYCTVUvnMcBQniVsAJOgHgeG36uBbdrLh', // Keep this secure
  useCdn: false,
})

const subjectsSectionData = {
  _type: 'subjectsSection',
  _id: 'subjectsSection',
  title: "Subjects We Cover",
  subjects: [
    {
      _key: 'biology',
      subject: "Biology",
      order: 1,
    },
    {
      _key: 'chemistry',
      subject: "Chemistry",
      order: 2,
    },
    {
      _key: 'physics',
      subject: "Physics",
      order: 3,
    },
    {
      _key: 'maths',
      subject: "Maths",
      order: 4,
    },
    {
      _key: 'further-maths',
      subject: "Further Maths",
      order: 5,
    },
    {
      _key: 'economics',
      subject: "Economics",
      order: 6,
    },
    {
      _key: 'business',
      subject: "Business",
      order: 7,
    },
    {
      _key: 'english-lit',
      subject: "English Literature",
      order: 8,
    },
    {
      _key: 'english-lan',
      subject: "English Language",
      order: 9,
    },
    {
      _key: 'history',
      subject: "History",
      order: 10,
    },
    {
      _key: 'psychology',
      subject: "Psychology",
      order: 11,
    }
  ]
}

async function migrateSubjectsSection() {
  console.log('Migrating subjects section...')
  await client.createOrReplace(subjectsSectionData)
  console.log('Done migrating subjects section!')
}

migrateSubjectsSection().catch(console.error)