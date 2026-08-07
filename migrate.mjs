import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'w8ngou5u',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'skYfSPZdi6OpjiVTw1qcEFGGrIq4MhPJgGc0Qf8peWYoCOgfTePTlqIBaokZdiF8UffIz4vUnIzT1Z8UCRcvKkWHikx5aZv1pj3DvkD9YPgZpL1YV9jh7V2YYvlIkB1x5FxrIgvEPn7CdeaNG9xP7smcESjgiHpySvt1wmSevkQYgSqJgAFf', // Keep this secure
  useCdn: false,
})

const featuresSectionData = {
  _type: 'featuresSection',
  _id: 'featuresSection',
  title: 'What We Offer',
  items: [
    {
      _key: 'feature-1',
      title: 'Only A* Tutors',
      description: "We are a team of <span class='font-semibold'>A<sup>*</sup> achievers</span>, stemming from the most prestigious institutions across the UK such as <span class='font-semibold'>LSE</span> and <span class='font-bold'>Imperial College London</span>.",
    },
    {
      _key: 'feature-2',
      title: 'Free Mentoring',
      description: "Every student is paired with a <span class='font-semibold'>dedicated mentor</span> at <span class='font-semibold'>no extra cost</span>. This includes guidance on subject choices and university applications.",
    },
    {
      _key: 'feature-3',
      title: 'Vetted Mentors',
      description: "Every tutor at Ascensus Academy has been <span class='font-semibold'>DBS checked</span> and <span class='font-semibold'>ID verified</span>, so you can feel confident about who’s teaching your child.",
    },
    {
      _key: 'feature-4',
      title: 'Tailored 1-to-1 Lessons',
      description: "Our <span class='font-semibold'>1-to-1 sessions</span> are online and personalised, giving students focused support that adapts to their individual needs.",
    },
  ],
}

async function migrateFeatures() {
  console.log('Migrating features section...')
  await client.createOrReplace(featuresSectionData)
  console.log('Done migrating features section.')
}

migrateFeatures().catch(console.error)