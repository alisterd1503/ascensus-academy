import { client } from './sanity'

export async function getTutors() {
  return client.fetch(`*[_type == "tutorsSection"][0]{ title, subtitle, tutors}`)
}

export async function getFounders() {
  return client.fetch(`*[_type == "founder"] | order(order asc)`)
}

export async function getFeatures() {
  return client.fetch(`*[_type == "featuresSection"][0]{ title, "features": items }`)
}

export async function getSubjects() {
  return client.fetch(`*[_type == "subject"] | order(order asc)`)
}

export async function getPricing() {
  return client.fetch(`*[_type == "pricing"] | order(order asc)`)
}

export async function getHomePage() {
  return client.fetch(`*[_type == "homePage"][0]`)
}

export async function getAboutPage() {
  return client.fetch(`*[_type == "aboutPage"][0]`)
}