import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Tutors from "../components/Tutors";
import CTA from "../components/CTA";
import UsePageMeta from "../hooks/UsePageMeta";
import Founders from "../components/Founders";
import { getSiteSettings, getTutors, getFounders, getFeatures, getSubjects, getPricing } from "../lib/queries";

const HomePage: React.FC = () => {
  const [siteSettings, setSiteSettings] = useState<any>(null);
  const [tutors, setTutors] = useState<any[]>([]);
  const [founders, setFounders] = useState<any[]>([]);
  const [features, setFeatures] = useState<any[]>([]);

  UsePageMeta({
    title: "Ascensus Academy – A-Level Tutoring by Top University Students",
    description: "Premium A* tutoring by top UK university students. Personalised mentoring, vetted tutors, 1-to-1 online lessons, and tailored academic support.",
    url: "https://ascensusacademy.com/",
    image: "/uploads/ascensus-academy.jpg",
  });

  useEffect(() => {
    getSiteSettings().then(setSiteSettings);
    getTutors().then(setTutors);
    getFounders().then(setFounders);
    getFeatures().then(setFeatures);
  }, []);

  if (!siteSettings) return null;

  return (
    <MainLayout>
      <Hero />
      <About homepage={siteSettings.homepage} />
      <Features features={features} />
      <Tutors tutors={tutors} />
      <Founders founders={founders} />
      <CTA />
    </MainLayout>
  );
};

export default HomePage;