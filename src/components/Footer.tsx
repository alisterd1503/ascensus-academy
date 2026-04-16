import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#0f172a] text-white pt-5 sm:pt-5 md:pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Modified grid to use 3 columns on mobile so the links sit in a row */}
        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-[1fr_auto] gap-x-4 gap-y-12 mb-5">
          {/* Brand Column - spans full width (3 cols) on mobile, 1 col on md+ */}
          <div className="col-span-3 md:col-span-1 space-y-6">
            <div className="flex items-center gap-4">
              {/* Logo Image on the left */}
              <img
                src="/main-logo.svg"
                alt="Ascensus Academy Logo"
                className="h-14 w-auto invert brightness-0 flex-shrink-0"
              />
              {/* Grouped Text Container */}
              <div className="flex flex-col items-start">
                <span className="text-3xl font-logo text-white leading-tight">
                  Ascensus Academy
                </span>
                <p className="text-gray-400 text-[10px] tracking-[0.38em] uppercase">
                  For Students, By Students.
                </p>
              </div>
            </div>
          </div>

          {/* Links Columns - each takes 1 column in the 3-column mobile grid */}
          <div className="col-span-3 md:col-span-1 grid grid-cols-3 gap-8 md:grid-cols-1 lg:flex lg:justify-end lg:items-start lg:gap-16">
            <div className="col-span-1">
              <h3 className="text-lg font-bold mb-6">About</h3>
              <ul className="space-y-3">
                <li><a href="/about-us" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">About Us</a></li>
                <li><a href="/" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Services</a></li>
                <li><a href="/" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Tutors</a></li>
              </ul>
            </div>

            <div className="col-span-1">
              <h3 className="text-lg font-bold mb-6">Resources</h3>
              <ul className="space-y-3">
                <li><a href="/subjects" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Subjects</a></li>
                <li><a href="/subjects" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Pricing</a></li>
                <li><a href="/med-workshop" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Med Workshop</a></li>
              </ul>
            </div>

            <div className="col-span-1">
              <h3 className="text-lg font-bold mb-6">Connect</h3>
              <ul className="space-y-3">
                <li><a href="/sign-up" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Sign Up</a></li>
                <li><a href="/contact-us" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Contact Us</a></li>
                <li><a href="/join-us" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Join Us</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/*Updated this section so that on mobile screens All rights served is at the top. Pricacy and Terms are stacked below on the left and ADI is on the right.
        On bigger screens it should all be in a row*/}
        <div className="border-t border-gray-800 pt-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6">
            <a href="/" className="text-gray-400 hover:text-white text-xs">Privacy Policy</a>
            <a href="/" className="text-gray-400 hover:text-white text-xs">Terms of Service</a>
          </div>
          <p className="text-gray-400 text-xs mb-4 md:mb-0">
            © 2026 Ascensus Academy. All rights reserved.
          </p>
          <div>
            <a target="_blank" rel="noopener noreferrer" href="https://adistudio.co.uk" className="block opacity-70 hover:opacity-100 transition-opacity">
              <img
                  src="/adi-studio.svg"
                  alt="Ascensus Academy Logo"
                  className="h-8 w-auto invert brightness-0 flex-shrink-0"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;