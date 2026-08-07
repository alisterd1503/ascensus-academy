import React from 'react';
import { Reveal } from './Reveal';

interface HomeCTA {
  title: string;
  text: string;
  primaryButtonLabel: string;
  secondaryButtonLabel: string;
}

interface Props {
  cta: HomeCTA;
}

const CTA: React.FC<Props> = ({ cta }) => {
  return (
    <section id="apply" className="relative py-16 sm:py-16 md:py-32 bg-primary overflow-hidden">
      <div className="absolute inset-0 opacity-10 mix-blend-overlay">
        <img
          loading="lazy"
          src="/uploads/med-workshop.webp"
          alt="Medicine Workshop"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <Reveal>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">{cta.title}</h2>
          <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            {cta.text}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
            <a
              href="/sign-up"
              className="bg-white hover:bg-gray-100 text-primary px-6 sm:px-12 py-3 sm:py-5 rounded-md font-bold text-base sm:text-lg shadow-xl transition-transform transform hover:-translate-y-1"
            >
              {cta.primaryButtonLabel}
            </a>
            <a
              href="/contact-us"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-6 sm:px-12 py-3 sm:py-5 rounded-lg font-bold text-base sm:text-lg shadow-xl transition-all transform hover:-translate-y-1"
            >
              {cta.secondaryButtonLabel}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CTA;