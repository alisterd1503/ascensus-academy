import { client } from './sanity'

export async function getTutors() {
  return client.fetch(`*[_type == "tutorsSection"][0]{ title, subtitle, tutors}`)
}

export async function getFounders() {
  return client.fetch(`*[_type == "foundersSection"][0]{ title, subtitle, founders }`)
}

export async function getFeatures() {
  return client.fetch(`*[_type == "featuresSection"][0]{ title, "features": items }`)
}

export async function getSubjects() {
  return client.fetch(`*[_type == "subject"] | order(order asc)`)
}

export async function getQualifications() {
  return client.fetch(`*[_type == "qualificationsSection"][0]`)
}

export async function getHomePage() {
  return client.fetch(`*[_type == "homePage"][0]`)
}

export async function getAboutPage() {
  return client.fetch(`*[_type == "aboutPage"][0]`)
}

export async function getMedicineWorkshop() {
  return client.fetch(`*[_type == "medicineWorkshop"][0]`)
}