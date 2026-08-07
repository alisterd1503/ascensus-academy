import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Tutors from "../components/Tutors";
import CTA from "../components/CTA";
import UsePageMeta from "../hooks/UsePageMeta";
import Founders from "../components/Founders";
import { getHomePage, getTutors, getFounders, getFeatures } from "../lib/queries";
import { FeatureSection } from "../types";

const HomePage: React.FC = () => {
  const [homePage, setHomePage] = useState<any>(null);
  const [tutors, setTutors] = useState<any[]>([]);
  const [founders, setFounders] = useState<any[]>([]);
  const [featuresSection, setFeaturesSection] = useState<FeatureSection | null>(null);

  UsePageMeta({
    title: "Ascensus Academy – A-Level Tutoring by Top University Students",
    description: "Premium A* tutoring by top UK university students. Personalised mentoring, vetted tutors, 1-to-1 online lessons, and tailored academic support.",
    url: "https://ascensusacademy.com/",
    image: "/uploads/ascensus-academy.jpg",
  });

  useEffect(() => {
    getHomePage().then(setHomePage);
    getTutors().then(setTutors);
    getFounders().then(setFounders);
    getFeatures().then(setFeaturesSection);
    console.log(featuresSection);
  }, []);

  if (!homePage) return null;

  return (
    <MainLayout>
      <Hero hero={homePage.hero} />
      <About story={homePage.story} model={homePage.model} />
      <Features features={featuresSection?.features || []} />
      <Tutors tutors={tutors} />
      <Founders founders={founders} />
      <CTA cta={homePage.cta} />
    </MainLayout>
  );
};

export default HomePage;