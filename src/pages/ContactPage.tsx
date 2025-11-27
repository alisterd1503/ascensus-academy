import React, { useEffect, useRef } from "react";
import MainLayout from "../layouts/MainLayout";
import PageHeader from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { CONTACT } from "../constants";
import UsePageMeta from "../hooks/UsePageMeta";
import ContactForm from "../components/ContactForm";

const ContactPage: React.FC = () => {

  UsePageMeta({
    title: "Contact Ascensus Academy – Get in Touch",
    description: "Reach out to Ascensus Academy for enquiries, support, or guidance on our tutoring and mentorship services. We're here to help students succeed.",
    url: "https://ascensusacademy.com/contact-us",
    image: "/public/main-logo.svg",
  });

  return (
    <MainLayout>
      <PageHeader title="Contact Us" />

      {/* Main Content */}
      <Reveal>
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

              {/* Image */}
              <div className="overflow-hidden rounded-md shadow-md">
                <img
                  src="/uploads/contact-us.webp"
                  alt="Contact Us"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* TutorBird Form */}
              <ContactForm/>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Contact Card */}
      <Reveal>
        <section className="pb-10">
          <div className="container mx-auto flex justify-center">
            <div className="w-full max-w-7xl bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">

              <h3 className="text-xl font-bold mb-2">{CONTACT.title}</h3>
              <p className="text-gray-700 mb-4">{CONTACT.description}</p>

              <div className="flex justify-center items-center text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-primary-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-primary-600 hover:text-primary-700"
                >
                  {CONTACT.email}
                </a>
              </div>

            </div>
          </div>
        </section>
      </Reveal>

    </MainLayout>
  );
};

export default ContactPage;
