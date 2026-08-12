import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'w8ngou5u',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'skZnfqSaU4LDFYdKnMUh0WtBoT0yo5dG6622j4BMX1NlwJuHZQI7cFQV30nHWVOVfChPSav0m6nRae6r0sWuzXICfEkzgtaJYyoZ80aO9MGU2yWzeA1MnwDAMU6eHzA1s3uCge1YHeURznAoU3PyYCTVUvnMcBQniVsAJOgHgeG36uBbdrLh', // Keep this secure
  useCdn: false,
})

const contactUsPageData = {
  _type: 'contactUsPage',
  _id: 'contactUsPage',
  title: "Contact Us",
  heading: "General Queries",
  description: "For all your general questions about our tutoring services, scheduling, or policies, please reach out to us at",
  email: "contact@ascensusacademy.com",
}

async function migrateContactUsPage() {
  console.log('Migrating contact us page...')
  await client.createOrReplace(contactUsPageData)
  console.log('Done migrating contact us page!')
}

migrateContactUsPage().catch(console.error)