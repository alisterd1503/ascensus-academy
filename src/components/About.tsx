import React from 'react';
import { Reveal } from './Reveal';

const About: React.FC = () => {
  return (
    <section id="about">
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Our Story Section */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full lg:w-1/2 relative">
              <Reveal>
                <div className="absolute top-6 -left-6 w-full h-full bg-gray-100 rounded-md -z-10"></div>
                <img
                  src="/uploads/our-story.webp"
                  alt="Student reading book"
                  className="rounded-md shadow-2xl w-full h-[500px] object-cover"
                />
              </Reveal>
            </div>
            
            <div className="w-full lg:w-1/2">
              <Reveal>
                <h2 className="text-5xl font-bold text-primary mb-8">Our Story</h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
                  <p>
                    Ascensus Academy was founded to <span className="font-medium text-primary">revolutionise</span> the future of tutoring. We believe the traditional education system needs an upgrade. That is why we only hire undergraduate tutors who have personally achieved an <span className="font-medium text-primary">A* at A-level in the subject</span> they teach.
                  </p>
                  <p>
                    Here, every student is paired with a <span className="font-medium text-primary">personalised mentor</span>: a high achieving university student studying a similar course pathway.
                  </p>
                </div>
                <button className="mt-10 bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-md font-medium transition-all shadow-lg hover:shadow-xl">
                  Learn More About Us
                </button>
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      {/* Our Model Quote - Full Width */}
      <div className="w-full bg-primary py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-10 tracking-wide">Our model is simple</h3>
            <p className="text-2xl md:text-4xl  text-blue-100 italic leading-relaxed">
              "If you want your child to succeed, connect them with someone who already has."
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;