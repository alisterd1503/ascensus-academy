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
  return client.fetch(`*[_type == "subjectsSection"][0]`)
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

export async function getSignUpPage() {
  return client.fetch(`*[_type == "signUpPage"][0]`)
}

export async function getJoinTheTeamPage() {
  return client.fetch(`*[_type == "joinTheTeamPage"][0]`)
}

export async function getPortalLoginPage() {
  return client.fetch(`*[_type == "portalLoginPage"][0]`)
}