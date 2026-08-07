import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'w8ngou5u',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'skYfSPZdi6OpjiVTw1qcEFGGrIq4MhPJgGc0Qf8peWYoCOgfTePTlqIBaokZdiF8UffIz4vUnIzT1Z8UCRcvKkWHikx5aZv1pj3DvkD9YPgZpL1YV9jh7V2YYvlIkB1x5FxrIgvEPn7CdeaNG9xP7smcESjgiHpySvt1wmSevkQYgSqJgAFf',
  useCdn: false,
})

const aboutPage = {
  _type: 'aboutPage',
  _id: 'aboutPage',
  title: 'About Us',
  aboutUs: {
    title: 'Who are we?',
    text: "Ascensus Academy was founded to <b>revolutionise</b> the future of tutoring. We believe the traditional education system needs an upgrade.",
    secondaryTitle: 'What sets our tutors apart?',
    points: [
      "They have <b>recently</b> been through the <b>same exams</b> themselves.",
      "They have <b>first-hand insight</b> into the demands, pressures and challenges that students face today.",
      "They bring<b> personalised and proven strategies</b> that actually work in today’s education system."
    ],
    secondaryText: "That’s why we only hire undergraduate tutors who have <b>personally achieved an A* at A-level</b> in the subject they teach. They’ve not only been through the system recently; <b>they’ve mastered it.</b>",
  },
  aboutJourney: {
    title: 'Our Journey',
    text: "This mentorship programme was born out of a <b>shared vision</b> to support students in navigating academic challenges, career choices, and personal growth. Having personally experienced the struggles of balancing studies, ambitions, and wellbeing, the founders wanted to create a <b>supportive and structured platform</b> that empowers others to thrive. Over time, the founders have reflected the <b>power of mentorship</b> in shaping confidence, resilience, and direction. While the programme began with personal experiences, it has since grown into a wider community effort - one that connects students with guidance, resources, and opportunity. The aim of Ascensus Academy is not just to mentor, but to build a <b>culture of support</b> that continues long after each individual’s journey with us.",
  },
}

async function migrate() {
  console.log('Migrating about page...')
  await client.createOrReplace(aboutPage)
  console.log('Done.')
}

migrate().catch(console.error)