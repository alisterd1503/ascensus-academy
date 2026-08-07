import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import PageHeader from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { Check } from 'lucide-react';
import UsePageMeta from "../hooks/UsePageMeta";
import { getAboutPage } from "../lib/queries";
import { urlFor } from "../lib/sanity";

const AboutPage: React.FC = () => {
  const [aboutPage, setAboutPage] = useState<any>(null);

  UsePageMeta({
    title: "About Ascensus Academy – Our Tutors, Mentorship & Mission",
    description: "Discover Ascensus Academy's mission, our expert A* tutors, and the personalised mentorship approach that empowers students to succeed in today’s education system.",
    url: "https://ascensusacademy.com/about-us",
    image: "/uploads/ascensus-academy.jpg"
  });

  useEffect(() => {
      getAboutPage().then(setAboutPage);
  }, []);

  if (!aboutPage) return null;

  return (
    <MainLayout>
      <PageHeader title={aboutPage.title} />

      <div className="max-w-7xl mx-auto px-6 py-8 sm:py-8 md:py-24 space-y-16 sm:space-y-16 md:space-y-32">

        {/* SECTION 1 */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
          <Reveal className="flex flex-col justify-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4 md:mb-8">{aboutPage.aboutUs.title}</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <div dangerouslySetInnerHTML={{ __html: aboutPage.aboutUs.text }}/>

                <h2 className="text-2xl font-bold text-primary mb-8">
                    {aboutPage.aboutUs.secondaryTitle}
                </h2>

                {aboutPage.aboutUs.points && aboutPage.aboutUs.points.length > 0 && (
                  <ul className="space-y-4">
                    {aboutPage.aboutUs.points.map((point: any, index: React.Key | null | undefined) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 shrink-0 text-primary-light" />
                        <span dangerouslySetInnerHTML={{ __html: point }}></span>
                      </li>
                    ))}
                  </ul>
                )}
                <div dangerouslySetInnerHTML={{ __html: aboutPage.aboutUs.secondaryText }}/>
              </div>
            </div>
          </Reveal>
          {/* Image */}
          <Reveal className="flex">
            <img
              src={aboutPage.aboutUs.image ? urlFor(aboutPage.aboutUs.image).url() : '/uploads/who-are-we.webp'}
              alt="Students studying"
              className="rounded-md w-full h-full object-cover"
            />
          </Reveal>
        </section>

        {/* SECTION 2 */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
          {/* Image (left) */}
          <Reveal className="flex order-1 lg:order-0">
            <img
              src={aboutPage.aboutJourney.image ? urlFor(aboutPage.aboutJourney.image).url() : '/uploads/our-journey.webp'}
              alt="Mentorship process"
              className="rounded-md w-full h-full object-cover shadow-2xl"
            />
          </Reveal>
          {/* Text (right) */}
          <Reveal className="flex flex-col justify-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-8">{aboutPage.aboutJourney.title}</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <div dangerouslySetInnerHTML={{ __html: aboutPage.aboutJourney.text }}/>
              </div>
            </div>
          </Reveal>
        </section>

      </div>
    </MainLayout>
  );
};

export default AboutPage;
