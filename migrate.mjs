import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'w8ngou5u',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'skZnfqSaU4LDFYdKnMUh0WtBoT0yo5dG6622j4BMX1NlwJuHZQI7cFQV30nHWVOVfChPSav0m6nRae6r0sWuzXICfEkzgtaJYyoZ80aO9MGU2yWzeA1MnwDAMU6eHzA1s3uCge1YHeURznAoU3PyYCTVUvnMcBQniVsAJOgHgeG36uBbdrLh', // Keep this secure
  useCdn: false,
})

const medicineWorkshopData = {
  _type: 'medicineWorkshop',
  _id: 'medicineWorkshop',
  heading: "Medicine Interview Workshop",
  information: {
    title: "Medicine Workshop",
    price: "£34",
    points: [
      "Delivered by medics with a <b>100% interview success rate</b> across MMI and Oxbridge formats.",
      "Includes a 1-to-1 mock for <b>MMI or Oxbridge</b> interviews up to 90 minutes.",
      "<b>Personalised</b>, detailed feedback on structure, communication, and reasoning provided.",
      "Proven <b>techniques, frameworks, and strategies</b> used by successful applicants.",
      "Comes with a <b>FREE</b> interview notes PDF collated by our team."
    ],
    secondaryTitle: '',
    secondaryPoints: [],
  }
}

async function migrateMedicineWorkshop() {
  console.log('Migrating medicine workshop...')
  await client.createOrReplace(medicineWorkshopData)
  console.log('Done migrating medicine workshop.')
}

migrateMedicineWorkshop().catch(console.error)