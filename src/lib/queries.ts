import { client } from './sanity'

export async function getTutors() {
  return client.fetch(`*[_type == "tutor"] | order(order asc)`)
}

export async function getFounders() {
  return client.fetch(`*[_type == "founder"] | order(order asc)`)
}

export async function getFeatures() {
  return client.fetch(`*[_type == "feature"] | order(order asc)`)
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