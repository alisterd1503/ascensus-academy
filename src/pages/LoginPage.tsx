import React, { useEffect, useRef } from "react";
import MainLayout from "../layouts/MainLayout";
import PageHeader from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import UsePageMeta from "../hooks/UsePageMeta";

const LoginPage: React.FC = () => {
  const scriptContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scriptContainer.current) return;

    // Prevent multiple scripts (React 18 StrictMode)
    if (scriptContainer.current.childElementCount === 0) {
      const script = document.createElement("script");
      script.src =
        "https://app.tutorbird.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF9wZG5KZyIsIldlYnNpdGVJRCI6Indic181MlZKYyIsIldlYnNpdGVCbG9ja0lEIjoid2JiX1FMZm1KMiJ9";
      script.async = true;
      scriptContainer.current.appendChild(script);
    }
  }, []);

  UsePageMeta({
    title: "About Ascensus Academy – Our Tutors, Mentorship & Mission",
    description: "Discover Ascensus Academy's mission, our expert A* tutors, and the personalised mentorship approach that empowers students to succeed in today’s education system.",
    url: "https://ascensusacademy.com/login",
    image: "/uploads/social-about-us.png",
  });

  return (
    <MainLayout>
      <PageHeader title="Portal Login" />

      <Reveal>
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch rounded-md">
                {/* Workshop Image */}
                <div className="w-full overflow-hidden rounded-md shadow-md max-h-1/2">
                    <img
                    src="/uploads/log-in.webp"
                    alt="Medicine Workshop"
                    className="w-full h-full object-cover"
                    />
                </div>
                {/* LEFT: TutorBird Form */}
                <div
                ref={scriptContainer}
                className="bg-gray-50 p-0 rounded-2xl shadow-md flex-1"
                ></div>
            </div>
          </div>
        </section>
      </Reveal>
    </MainLayout>
  );
};

export default LoginPage;
