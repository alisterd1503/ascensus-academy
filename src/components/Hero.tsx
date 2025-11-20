import React from 'react';
import { ChevronRight, Users } from 'lucide-react';
import { Reveal } from './Reveal';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
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
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
            Welcome to <br/>
            <span className="text-blue-100">Ascensus Academy</span>
          </h1>
          <p className="text-xl md:text-3xl text-gray-200 mb-12 font-light tracking-wide">
            For students, By Students.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#services" className="bg-white text-primary hover:bg-gray-100 px-10 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-xl flex items-center justify-center">
              View Our Services
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#tutors" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-xl flex items-center justify-center">
              <Users className="mr-2 h-5 w-5" />
              Meet the Team
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Hero;