import React from 'react';
import { ChevronRight, Users } from 'lucide-react';
import { Reveal } from './Reveal';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          rel="preload"
          src="/uploads/index-hero.webp"
          alt="Graduation caps in sky"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <Reveal>
          <h2 className="font-thin text-xl sm:text-xl md:text-3xl text-white mb-2 tracking-tight drop-shadow-lg">Welcome to</h2>
          <h1 className="text-4xl md:text-7xl sm:text-4xl text-white mb-0 md:mb-2 sm:mb-0 tracking-tight drop-shadow-lg">
            <span className="font-logo">Ascensus Academy</span>
          </h1>
          <p className="text-sm sm:text-sm md:text-xl text-gray-200 mb-12 font-light tracking-[0.20em] md:tracking-[0.50em]">
            For Students, By Students.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <a
              href="#services"
              className="bg-white text-primary hover:bg-gray-100 px-6 sm:px-10 py-2.5 sm:py-4 rounded-lg font-semibold text-sm sm:text-lg transition-all transform hover:scale-105 shadow-xl flex items-center justify-center"
            >
              View Our Services
              <ChevronRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
            </a>
            <a
              href="#tutors"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 sm:px-10 py-2.5 sm:py-4 rounded-lg font-semibold text-sm sm:text-lg transition-all transform hover:scale-105 shadow-xl flex items-center justify-center"
            >
              <Users className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
              Meet the Team
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Hero;