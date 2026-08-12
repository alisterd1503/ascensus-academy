import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'w8ngou5u',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'skZnfqSaU4LDFYdKnMUh0WtBoT0yo5dG6622j4BMX1NlwJuHZQI7cFQV30nHWVOVfChPSav0m6nRae6r0sWuzXICfEkzgtaJYyoZ80aO9MGU2yWzeA1MnwDAMU6eHzA1s3uCge1YHeURznAoU3PyYCTVUvnMcBQniVsAJOgHgeG36uBbdrLh', // Keep this secure
  useCdn: false,
})

const joinTheTeamPageData = {
  _type: 'joinTheTeamPage',
  _id: 'joinTheTeamPage',
  heading: "Join The Team",
}

async function migrateJoinTheTeamPage() {
  console.log('Migrating join the team page...')
  await client.createOrReplace(joinTheTeamPageData)
  console.log('Done migrating join the team page!')
}

migrateJoinTheTeamPage().catch(console.error)