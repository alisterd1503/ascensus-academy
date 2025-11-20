import React, { useEffect, useRef } from "react";
import MainLayout from "../layouts/MainLayout";
import PageHeader from "../components/PageHeader";
import { MED_WORKSHOP } from "../constants";
import PriceCard from "../components/PriceCard";
import { Reveal } from "../components/Reveal";

const MedWorkshop: React.FC = () => {
  const scriptContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scriptContainer.current) return;

    // Prevent multiple scripts (React 18 StrictMode)
    if (scriptContainer.current.childElementCount === 0) {
      const script = document.createElement("script");
      script.src =
        "https://app.tutorbird.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF9wZG5KZyIsIldlYnNpdGVJRCI6Indic181MlZKYyIsIldlYnNpdGVCbG9ja0lEIjoid2JiX1FMVzVKQyJ9";
      script.async = true;
      scriptContainer.current.appendChild(script);
    }
  }, []);

  return (
    <MainLayout>
      <PageHeader title="Medicine Workshop" />

      <Reveal>
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch rounded-md">

              {/* LEFT: TutorBird Form */}
                <div
                ref={scriptContainer}
                className="p-0 rounded-2xl shadow-md flex-1"
                ></div>

                {/* RIGHT: Image + PriceCard stacked */}
                <div className="flex flex-col flex-1 gap-6">
                    {/* Pricing Card */}
                    <div className="flex-1">
                        <PriceCard item={MED_WORKSHOP} />
                    </div>

                    {/* Workshop Image */}
                    <div className="w-full overflow-hidden rounded-md shadow-md max-h-[270px]">
                        <img
                        src="/uploads/med-workshop.webp"
                        alt="Medicine Workshop"
                        className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
          </div>
        </section>
      </Reveal>
    </MainLayout>
  );
};

export default MedWorkshop;
