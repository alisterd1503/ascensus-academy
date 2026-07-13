import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'w8ngou5u',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'skwpI6Zvof8PgfBeFztOXYFz5EaIzeKzAr7z7KanCQWUVVJPJjyneij7QnO1MrhQPQXbprjFftjtk4qsdJ7gRreWnmIF3KksGF4OaHukIYqr6Hr3EGaIY654rgxi40O4dUn9TwxtRS7W87fflWCUhGw5Mn3zw9N4TJVispzfBY5zPAzzJbF9',
  useCdn: false,
})

const tutors = [
  {
    _type: 'tutor',
    id: { _type: 'slug', current: 'seion' },
    name: 'Seion',
    university: 'University of Warwick',
    course: 'Physics',
    bio: "Seion is a clear-thinking, structured tutor studying Physics at the University of Warwick. <span class='font-semibold'>He achieved A<sup>*</sup>A<sup>*</sup>A<sup>*</sup>A at A-Levels</span> and scored <span class='font-semibold'>1st in his cohort for both A-level Physics and Mathematics.</span> He brings a clear, step-by-step teaching style that helps students master even the most challenging topics. Providing a structured yet friendly approach, Seion focuses on breaking down challenging concepts into clear, manageable steps, whilst building deep understanding in his students.",
    subjects: ['Physics', 'Mathematics', 'Further Maths'],
    order: 1,
  },
  {
    _type: 'tutor',
    id: { _type: 'slug', current: 'sabrina' },
    name: 'Sabrina',
    university: 'Imperial College London',
    course: 'Medicine',
    bio: "Sabrina is a calm, patient, and encouraging tutor studying Medicine at Imperial College London. Known for her clarity and steady approach, she helps students feel at ease with even the trickiest topics. <span class='font-semibold'>Achieving A<sup>*</sup>AAA at A-level</span> and having a <span class='font-semibold'>strong background in Biology</span>, Sabrina supports her students in building confidence, developing consistency, and making meaningful academic progress - one step at a time.",
    subjects: ['Biology'],
    order: 2,
  },
  {
    _type: 'tutor',
    id: { _type: 'slug', current: 'jeff' },
    name: 'Jeff',
    university: 'University of Birmingham',
    course: 'Medicine',
    bio: "Jeff is a dedicated, methodical tutor studying Medicine at the University of Birmingham. Achieving <span class='font-semibold'>A<sup>*</sup>A<sup>*</sup>A in Biology, Chemistry, and Mathematics</span>, he brings a strong scientific foundation and a calm, structured approach to his teaching. He helps students break down complex concepts with clarity, building confidence through step-by-step explanations and practical exam strategies. Jeff's supportive style helps students develop consistency and achieve tangible progress across even the most demanding topics.",
    subjects: ['Biology', 'Chemistry'],
    order: 3,
  },
  {
    _type: 'tutor',
    id: { _type: 'slug', current: 'shainuja' },
    name: 'Shainuja',
    university: 'Imperial College London',
    course: 'Medicine',
    bio: "Shainuja is a patient, results-driven tutor studying Medicine at Imperial College London. She achieved <span class='font-semibold'>A<sup>*</sup>A<sup>*</sup>AA in Chemistry, Mathematics, Biology, and Further Maths</span>, placing her among the top of her cohort in quantitative and scientific subjects. She combines a gentle teaching manner with rigorous academic discipline, helping students grasp difficult material through clear frameworks, worked examples, and steady reinforcement. Shainuja focuses on confidence-building and long-term retention, guiding students to excel in both understanding and exam performance.",
    subjects: ['Chemistry', 'Maths'],
    order: 4,
  },
  {
    _type: 'tutor',
    id: { _type: 'slug', current: 'sajana' },
    name: 'Sajana',
    university: 'University of Bath',
    course: 'Aerospace Engineering',
    bio: "Sajana is an analytical, forward-thinking tutor studying Aerospace Engineering at the University of Bath. With <span class='font-semibold'>A<sup>*</sup>A<sup>*</sup>A<sup>*</sup> in Mathematics, Physics, and Design Technology</span>, he brings a strong technical background and a passion for problem-solving. His teaching style blends logical breakdowns with real-world application, making abstract concepts intuitive and engaging. He supports students by simplifying challenging topics into manageable steps and encouraging structured thinking, essential skills for high-level STEM success.",
    subjects: ['Physics', 'Maths'],
    order: 5,
  },
  {
    _type: 'tutor',
    id: { _type: 'slug', current: 'felix' },
    name: 'Felix',
    university: 'University College London',
    course: 'Economics',
    bio: "Felix is a clear-thinking and structured tutor studying Economics at UCL. <span class='font-semibold'>He achieved A<sup>*</sup>A<sup>*</sup>AA in Mathematics, Physics, Economics, and Further Mathematics.</span> He brings a logical, step-by-step approach to teaching, helping students break down complex concepts into manageable steps. Felix focuses on building strong fundamentals and exam confidence, enabling students to make consistent progress.",
    subjects: ['Maths', 'Physics'],
    order: 6,
  },
  {
    _type: 'tutor',
    id: { _type: 'slug', current: 'azam' },
    name: 'Azam',
    university: 'University of Warwick',
    course: 'Physics',
    bio: "Azam is a dedicated and methodical tutor studying Physics at the University of Warwick.<span class='font-semibold'> He achieved A<sup>*</sup>A<sup>*</sup>A<sup>*</sup> at A-Level in Mathematics, Physics, and Biology.</span> With a calm and structured approach, Azam simplifies challenging topics and supports students in building confidence and precision. He focuses on clear understanding and consistent progress across all areas.",
    subjects: ['Maths', 'Physics', 'Biology'],
    order: 7,
  },
]

const founders = [
  {
    _type: 'founder',
    id: { _type: 'slug', current: 'austin' },
    name: 'Austin Jiji',
    title: 'Incoming Level 7 Degree Apprentice with PwC (Chartered Accountancy)',
    bio: "Austin achieved <span class='font-semibold'>A<sup>*</sup>AB at A-Level in Economics, Mathematics, and Physics</span>, ranking <span class='font-semibold'>1st in his cohort for Economics.</span> He is an incoming Degree Apprentice in Chartered Accountancy with PwC and the University of Nottingham, starting in September 2026, bringing a structured, results-driven approach shaped by both academic and professional experience.",
    subjects: ['Economics'],
    order: 1,
  },
  {
    _type: 'founder',
    id: { _type: 'slug', current: 'noel' },
    name: 'Noel Chacko',
    title: 'Medical Student at the University of Birmingham',
    bio: "Noel achieved <span class='font-semibold'>A<sup>*</sup>AA at A-Level in Biology, Chemistry, and Mathematics</span>, ranking <span class='font-semibold'>1st in his cohort for Biology</span>. He is a second-year Medical student at the University of Birmingham, with a strong academic foundation and a precise, methodical approach to learning.",
    subjects: ['Biology'],
    order: 2,
  },
]

const features = [
  { _type: 'feature', title: 'Only A* Tutors', description: "We are a team of <span class='font-semibold'>A<sup>*</sup> achievers</span>, stemming from the most prestigious institutions across the UK such as <span class='font-semibold'>LSE</span> and <span class='font-bold'>Imperial College London</span>.", order: 1 },
  { _type: 'feature', title: 'Free Mentoring', description: "Every student is paired with a <span class='font-semibold'>dedicated mentor</span> at <span class='font-semibold'>no extra cost</span>. This includes guidance on subject choices and university applications.", order: 2 },
  { _type: 'feature', title: 'Vetted Mentors', description: "Every tutor at Ascensus Academy has been <span class='font-semibold'>DBS checked</span> and <span class='font-semibold'>ID verified</span>, so you can feel confident about who's teaching your child.", order: 3 },
  { _type: 'feature', title: 'Tailored 1-to-1 Lessons', description: "Our <span class='font-semibold'>1-to-1 sessions</span> are online and personalised, giving students focused support that adapts to their individual needs.", order: 4 },
]

const subjects = [
  { _type: 'subject', subject: 'Biology', order: 1 },
  { _type: 'subject', subject: 'Chemistry', order: 2 },
  { _type: 'subject', subject: 'Physics', order: 3 },
  { _type: 'subject', subject: 'Maths', order: 4 },
  { _type: 'subject', subject: 'Further Maths', order: 5 },
  { _type: 'subject', subject: 'Economics', order: 6 },
  { _type: 'subject', subject: 'Business', order: 7 },
  { _type: 'subject', subject: 'English Literature', order: 8 },
  { _type: 'subject', subject: 'English Language', order: 9 },
  { _type: 'subject', subject: 'History', order: 10 },
  { _type: 'subject', subject: 'Psychology', order: 11 },
]

const pricing = [
  {
    _type: 'pricing',
    title: 'A-Level',
    price: '£36/hour',
    points: [
      'Expert tutor with deep knowledge of the A-Level curriculum.',
      'Lessons tailored to individual learning styles to maximise understanding.',
      'Exam technique coaching to build confidence and boost performance.',
    ],
    secondaryTitle: 'Included mentorship',
    secondaryPoints: [
      'Guidance for UCAS and Degree Apprenticeship applications.',
      'Support with university entrance exams, personal statements, assessment centres and more!',
      'Interview preparation and academic enrichment advice.',
    ],
    order: 1,
  },
  {
    _type: 'pricing',
    title: 'GCSE',
    price: '£24/hour',
    points: [
      'Experienced tutor with a passion for helping students succeed.',
      'Specialises in making complex topics understandable and engaging.',
      'Focuses on building confidence and study skills alongside subject knowledge.',
    ],
    secondaryTitle: 'Included mentorship',
    secondaryPoints: [
      'Free personalised guidance on A-Level subject choices.',
      'Early career insights and pathways.',
      'Advice on building strong academic habits before sixth form.',
    ],
    order: 2,
  },
]

const siteSettings = {
  _type: 'siteSettings',
  _id: 'siteSettings',
  homepage: {
    story: "Ascensus Academy was founded to <span class='font-medium text-primary'>revolutionise</span> the future of tutoring. We believe the traditional education system needs an upgrade. That is why we only hire undergraduate tutors who have personally achieved an <span class='font-medium text-primary'>A* at A-level in the subject</span> they teach.</br></br>Here, every student is paired with a <span class='font-medium text-primary'>personalised mentor</span>: a high achieving university student studying a similar course pathway.",
    model: `"If you want your child to succeed, connect them with someone who already has."`,
  },
  medWorkshop: {
    title: 'Medicine Workshop',
    price: '£34',
    points: [
      'Delivered by medics with a <b>100% interview success rate</b> across MMI and Oxbridge formats.',
      'Includes a 1-to-1 mock for <b>MMI or Oxbridge</b> interviews up to 90 minutes.',
      '<b>Personalised</b>, detailed feedback on structure, communication, and reasoning provided.',
      'Proven <b>techniques, frameworks, and strategies</b> used by successful applicants.',
      'Comes with a <b>FREE</b> interview notes PDF collated by our team.',
    ],
  },
  contact: {
    title: 'General Queries',
    description: 'For all your general questions about our tutoring services, scheduling, or policies, please reach out to us at',
    email: 'contact@ascensusacademy.com',
  },
}

async function migrate() {
  console.log('Starting migration...')

  console.log('Creating site settings...')
  await client.createOrReplace(siteSettings)

  console.log('Creating founders...')
  for (const doc of founders) await client.create(doc)

  console.log('Creating tutors...')
  for (const doc of tutors) await client.create(doc)

  console.log('Creating features...')
  for (const doc of features) await client.create(doc)

  console.log('Creating subjects...')
  for (const doc of subjects) await client.create(doc)

  console.log('Creating pricing...')
  for (const doc of pricing) await client.create(doc)

  console.log('Migration complete!')
}

migrate().catch(console.error)