import React, { useEffect, useRef, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import PageHeader from "../components/PageHeader";
import PriceCard from "../components/PriceCard";
import { Reveal } from "../components/Reveal";
import UsePageMeta from "../hooks/UsePageMeta";
import { MedicineWorkshop } from "../types";
import { getMedicineWorkshop } from "../lib/queries";
import { urlFor } from "../lib/sanity";

const MedWorkshop: React.FC = () => {
  const [medicineWorkshop, setMedicineWorkshop] = useState<MedicineWorkshop | null>(null);
  const scriptContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getMedicineWorkshop().then(setMedicineWorkshop);
  }, []);

  useEffect(() => {
    if (!medicineWorkshop) return;
    if (!scriptContainer.current) return;
    if (scriptContainer.current.childElementCount === 0) {
      const script = document.createElement("script");
      script.src =
        "https://app.tutorbird.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF9wZG5KZyIsIldlYnNpdGVJRCI6Indic181MlZKYyIsIldlYnNpdGVCbG9ja0lEIjoid2JiX1FMVzVKQyJ9";
      script.async = true;
      scriptContainer.current.appendChild(script);
    }
  }, [medicineWorkshop]);

  UsePageMeta({
    title: "Medicine Interview Workshop – Ascensus Academy",
    description: "Join Ascensus Academy's Medicine Workshop, led by successful medics. Gain personalised 1-to-1 mock interviews, detailed feedback, and proven strategies to excel in MMI and Oxbridge interviews.",
    url: "https://ascensusacademy.com/med-workshop",
    image: "/uploads/ascensus-academy.jpg",
  });

  if (!medicineWorkshop) return null;

  return (
    <MainLayout>
      <PageHeader title={medicineWorkshop.heading} />

      <Reveal>
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch rounded-md">

              {/* LEFT: TutorBird Form */}
              <div
                ref={scriptContainer}
                className="p-0 rounded-2xl shadow-md flex-1 order-3 lg:order-1"
              ></div>

              {/* RIGHT: Image + PriceCard stacked */}
              <div className="flex flex-col flex-1 gap-6 order-1 lg:order-2">
                
                {/* Pricing Card */}
                <div className="flex-1 order-1">
                  <PriceCard item={medicineWorkshop.information} />
                </div>

                {/* Workshop Image */}
                <div className="w-full overflow-hidden rounded-md shadow-md max-h-[285px] order-2">
                  <img
                    loading="lazy"
                    src={medicineWorkshop.image ? urlFor(medicineWorkshop.image).url() : '/uploads/med-workshop.webp'}
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
