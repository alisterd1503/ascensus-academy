import React from 'react';
import { GraduationCap, Facebook, Instagram, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#0f172a] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Modified grid to use 3 columns on mobile so the links sit in a row */}
        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 mb-16">
          {/* Brand Column - spans full width (3 cols) on mobile, 1 col on md+ */}
          <div className="col-span-3 md:col-span-1 space-y-6">
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-white mr-2" />
              <span className="font-serif text-xl font-bold tracking-tight">
                Ascensus Academy
              </span>
            </div>
            <p className="text-gray-400 text-sm">For Students, By Students</p>
            <div className="flex items-center text-gray-400 hover:text-white transition-colors">
              <Mail className="h-4 w-4 mr-2" />
              <a href="mailto:contact@ascensusacademy.com" className="text-sm">contact@ascensusacademy.com</a>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors bg-gray-800 p-2 rounded-full">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors bg-gray-800 p-2 rounded-full">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors bg-gray-800 p-2 rounded-full">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Columns - each takes 1 column in the 3-column mobile grid */}
          <div className="col-span-1">
            <h3 className="font-serif text-lg font-bold mb-6">About</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Tutors</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-serif text-lg font-bold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Subjects</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Med Workshop</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-serif text-lg font-bold mb-6">Connect</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Apply</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Join Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs mb-4 md:mb-0">
            © 2025 Ascensus Academy. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white text-xs">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-xs">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;