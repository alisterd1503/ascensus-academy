import React from 'react';
import { Reveal } from './Reveal';
import { urlFor } from '../lib/sanity';
import { Founder } from '../types';

interface Props {
  title?: string;
  subtitle?: string;
  founders?: Founder[];
}

const Founders: React.FC<Props> = ({ title, subtitle, founders = [] }) => {
  if (!founders.length) return null;

  return (
    <section id="founders" className="py-20 md:py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-10 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">{title || 'Meet the Founders'}</h2>
            <div className="h-1 w-24 bg-primary mx-auto mt-6"></div>
            <p className="mt-6 text-gray-600 text-xl font-light" dangerouslySetInnerHTML={{ __html: subtitle || "<span class='text-gray-900 font-bold'>Over 7 years of tutoring experience between us</span>, we built Ascensus Academy to deliver the kind of structured, high-impact support we felt was missing; focused not just on understanding, but on achieving top grades." }}  />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:flex md:flex-row md:justify-center gap-20 [&>*]:w-full [&>*]:max-w-md">
          {founders.map((founder, index) => (
            <Reveal key={founder._key || index}>
              <div className="bg-white rounded-none border border-gray-100 hover:border-primary/20 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full group">
                <div className="h-90 overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors z-10 duration-500"></div>
                  <img
                    loading="lazy"
                    src={urlFor(founder.image).url()}
                    alt={founder.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-primary mb-1">{founder.name}</h3>
                  <p className="text-primary font-medium mb-6 text-sm tracking-wide">{founder.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow font-light" dangerouslySetInnerHTML={{ __html: founder.bio }} />
                  <div className="pt-6 border-t border-gray-100">
                    <div className="flex flex-wrap gap-2">
                      {founder.subjects.map((subject) => (
                        <span key={subject} className="px-3 py-1 bg-white border border-gray-200 text-primary text-xs font-semibold tracking-wide uppercase">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;