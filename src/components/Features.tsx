import React from 'react';
import { FEATURES } from '../constants';
import { Reveal } from './Reveal';

const Features: React.FC = () => {
  return (
    <section id="services" className="py-0 sm:py-0 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gray-50 shadow-sm rounded-md">
        <Reveal>
          <div className="text-center mb-10 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">What We Offer</h2>
            <div className="h-1 w-24 bg-primary mx-auto mt-6"></div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {FEATURES.map((feature, index) => (
            <Reveal key={index} className={`delay-[${index * 100}ms]`}>
              <div 
                className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center group h-full"
              >
                <div className="p-0 rounded-full text-primary mb-8 duration-300">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out scale-90 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm font-light" dangerouslySetInnerHTML={{ __html: feature.description }} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;