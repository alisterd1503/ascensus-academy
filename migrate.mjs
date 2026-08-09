import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'w8ngou5u',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'skYfSPZdi6OpjiVTw1qcEFGGrIq4MhPJgGc0Qf8peWYoCOgfTePTlqIBaokZdiF8UffIz4vUnIzT1Z8UCRcvKkWHikx5aZv1pj3DvkD9YPgZpL1YV9jh7V2YYvlIkB1x5FxrIgvEPn7CdeaNG9xP7smcESjgiHpySvt1wmSevkQYgSqJgAFf', // Keep this secure
  useCdn: false,
})

const tutorsSectionData = {
  _type: 'tutorsSection',
  _id: 'tutorsSection',
  title: 'Meet Some Of Our Tutors',
  subtitle: "Top achievers from the UK's best universities",
  tutors: [
    {
      _key: 'seion',
      name: 'Seion',
      university: 'University of Warwick',
      course: 'Physics',
      bio: "Seion is a clear-thinking, structured tutor studying Physics at the University of Warwick. <span class='font-semibold'>He achieved A<sup>*</sup>A<sup>*</sup>A<sup>*</sup>A at A-Levels</span> and scored <span class='font-semibold'>1st in his cohort for both A-level Physics and Mathematics.</span> He brings a clear, step-by-step teaching style that helps students master even the most challenging topics. Providing a structured yet friendly approach, Seion focuses on breaking down challenging concepts into clear, manageable steps, whilst building deep understanding in his students.",
      subjects: ['Physics', 'Mathematics', 'Further Maths']
    },
    {
      _key: 'sabrina',
      name: 'Sabrina',
      university: 'Imperial College London',
      course: 'Medicine',
      bio: "Sabrina is a calm, patient, and encouraging tutor studying Medicine at Imperial College London. Known for her clarity and steady approach, she helps students feel at ease with even the trickiest topics. <span class='font-semibold'>Achieving A<sup>*</sup>AAA at A-level</span> and having a <span class='font-semibold'>strong background in Biology</span>, Sabrina supports her students in building confidence, developing consistency, and making meaningful academic progress - one step at a time.",
      subjects: ['Biology']
    },
    {
      _key: 'jeff',
      name: 'Jeff',
      university: 'University of Birmingham',
      course: 'Medicine',
      bio: "Jeff is a dedicated, methodical tutor studying Medicine at the University of Birmingham. Achieving <span class='font-semibold'>A<sup>*</sup>A<sup>*</sup>A in Biology, Chemistry, and Mathematics</span>, he brings a strong scientific foundation and a calm, structured approach to his teaching. He helps students break down complex concepts with clarity, building confidence through step-by-step explanations and practical exam strategies. Jeff’s supportive style helps students develop consistency and achieve tangible progress across even the most demanding topics.",
      subjects: ['Biology', 'Chemistry']
    },
    {
      _key: 'shainuja',
      name: 'Shainuja',
      university: 'Imperial College London',
      course: 'Medicine',
      bio: "Shainuja is a patient, results-driven tutor studying Medicine at Imperial College London. She achieved <span class='font-semibold'>A<sup>*</sup>A<sup>*</sup>AA in Chemistry, Mathematics, Biology, and Further Maths</span>, placing her among the top of her cohort in quantitative and scientific subjects. She combines a gentle teaching manner with rigorous academic discipline, helping students grasp difficult material through clear frameworks, worked examples, and steady reinforcement. Shainuja focuses on confidence-building and long-term retention, guiding students to excel in both understanding and exam performance.",
      subjects: ['Chemistry', 'Maths']
    },
    {
      _key: 'sajana',
      name: 'Sajana',
      university: 'University of Bath',
      course: 'Aerospace Engineering',
      bio: "Sajana is an analytical, forward-thinking tutor studying Aerospace Engineering at the University of Bath. With <span class='font-semibold'>A<sup>*</sup>A<sup>*</sup>A<sup>*</sup> in Mathematics, Physics, and Design Technology</span>, he brings a strong technical background and a passion for problem-solving. His teaching style blends logical breakdowns with real-world application, making abstract concepts intuitive and engaging. He supports students by simplifying challenging topics into manageable steps and encouraging structured thinking, essential skills for high-level STEM success.",
      subjects: ['Physics', 'Maths']
    },
    {
      _key: 'felix',
      name: 'Felix',
      university: 'University College London',
      course: 'Economics',
      bio: "Felix is a clear-thinking and structured tutor studying Economics at UCL. <span class='font-semibold'>He achieved A<sup>*</sup>A<sup>*</sup>AA in Mathematics, Physics, Economics, and Further Mathematics.</span> He brings a logical, step-by-step approach to teaching, helping students break down complex concepts into manageable steps. Felix focuses on building strong fundamentals and exam confidence, enabling students to make consistent progress.",
      subjects: ['Maths', 'Physics']
    },
    {
      _key: 'azam',
      name: 'Azam',
      university: 'University of Warwick',
      course: 'Physics',
      bio: "Azam is a dedicated and methodical tutor studying Physics at the University of Warwick.<span class='font-semibold'> He achieved A<sup>*</sup>A<sup>*</sup>A<sup>*</sup> at A-Level in Mathematics, Physics, and Biology.</span> With a calm and structured approach, Azam simplifies challenging topics and supports students in building confidence and precision. He focuses on clear understanding and consistent progress across all areas.",
      subjects: ['Maths', 'Physics', 'Biology']
    }
  ]
}

async function migrateTutors() {
  console.log('Migrating tutors section...')
  await client.createOrReplace(tutorsSectionData)
  console.log('Done migrating tutors section.')
}

migrateTutors().catch(console.error)