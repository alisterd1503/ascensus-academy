import React from 'react';
import { Reveal } from './Reveal';

const CTA: React.FC = () => {
  return (
    <section id="apply" className="relative py-16 sm:py-16 md:py-32 bg-primary overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop" 
          alt="Typing on keyboard" 
          className="w-full h-full object-cover grayscale"
        />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <Reveal>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Sign Up Now</h2>
          <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Start your journey to academic excellence today with a mentor who has walked the path before you.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
            <a
              href="/sign-up"
              className="bg-white hover:bg-gray-100 text-primary px-6 sm:px-12 py-3 sm:py-5 rounded-md font-bold text-base sm:text-lg shadow-xl transition-transform transform hover:-translate-y-1"
            >
              Sign Up
            </a>
            <a
              href="/contact-us"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-6 sm:px-12 py-3 sm:py-5 rounded-lg font-bold text-base sm:text-lg shadow-xl transition-all transform hover:-translate-y-1"
            >
              Contact Us
            </a>
          </div>

          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Sign up for a free consultation call
          </p>

        </Reveal>
      </div>
    </section>
  );
};

export default CTA;