import React from "react";
import MainLayout from "../layouts/MainLayout";
import PageHeader from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { Check } from 'lucide-react';
import UsePageMeta from "../hooks/UsePageMeta";

const AboutPage: React.FC = () => {
  UsePageMeta({
    title: "About Ascensus Academy – Our Tutors, Mentorship & Mission",
    description: "Discover Ascensus Academy's mission, our expert A* tutors, and the personalised mentorship approach that empowers students to succeed in today’s education system.",
    url: "https://ascensusacademy.com/about-us",
    image: "/main-logo.svg",
  });
  return (
    <MainLayout>
      <PageHeader title="About Us" />

      <div className="max-w-7xl mx-auto px-6 py-8 sm:py-8 md:py-24 space-y-16 sm:space-y-16 md:space-y-32">

        {/* SECTION 1 */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
          <Reveal className="flex flex-col justify-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4 md:mb-8">Who are we?</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Ascensus Academy was founded to <b>revolutionise</b> the future of tutoring.
                  We believe the traditional education system needs an upgrade.
                </p>

                <h2 className="text-2xl font-bold text-primary mb-8">
                    What sets our tutors apart?
                </h2>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>
                    They have <b>recently</b> been through the <b>same exams</b> themselves.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>
                    They have <b>first-hand insight</b> into the demands, pressures and challenges that students face today.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>
                    They bring<b> personalised and proven strategies</b> that actually work in today’s education system.
                    </span>
                  </li>
                </ul>

                <p>
                  That’s why we only hire undergraduate tutors who have <b>personally achieved an A* at A-level</b> in the subject they teach. They’ve not only been through the system recently; <b>they’ve mastered it.</b>
                </p>
              </div>
            </div>
          </Reveal>
          {/* Image */}
          <Reveal className="flex">
            <img
              src="/uploads/who-are-we.webp"
              alt="Students studying"
              className="rounded-md w-full h-full object-cover"
            />
          </Reveal>
        </section>

        {/* SECTION 2 */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
          {/* Image (left) */}
          <Reveal className="flex order-1 lg:order-none">
            <img
              src="/uploads/our-journey.webp"
              alt="Mentorship process"
              className="rounded-md w-full h-full object-cover shadow-2xl"
            />
          </Reveal>
          {/* Text (right) */}
          <Reveal className="flex flex-col justify-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-8">Our Journey</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                    This mentorship programme was born out of a <b>shared vision</b> to support students in navigating academic challenges, career choices, and personal growth.
                </p>
                <p>
                    Having personally experienced the struggles of balancing studies, ambitions, and wellbeing, the founders wanted to create a <b>supportive and structured platform</b> that empowers others to thrive.
                </p>
                <p>
                    Over time, the founders have reflected the <b>power of mentorship</b> in shaping confidence, resilience, and direction. While the programme began with personal experiences, it has since grown into a wider community effort - one that connects students with guidance, resources, and opportunity.
                </p>
                <p>
                    The aim of Ascensus Academy is not just to mentor, but to build a <b>culture of support</b> that continues long after each individual’s journey with us.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

      </div>
    </MainLayout>
  );
};

export default AboutPage;
