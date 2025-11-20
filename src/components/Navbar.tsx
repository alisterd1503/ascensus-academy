import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if we should show the solid background version
  const isSolid = isScrolled || isOpen;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isSolid ? 'bg-white shadow-md py-6' : 'bg-transparent py-8'}`}>
      {/* Increased max-width to 1800px and adjusted padding for better spacing */}
      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <a href="/" className="flex items-end transition-colors duration-500">
              <span className="sr-only">Ascensus Academy</span>

              {/* Logo Image */}
              <img
                src="/main-logo.svg"
                alt="Ascensus Academy Logo"
                className={`h-12 w-auto mr-2 transition-all duration-500 ${
                  isSolid ? 'filter-none' : 'invert brightness-0'
                }`}
              />

              {/* Logo Text */}
              <span className={`text-3xl font-bold font-serif transition-colors duration-500 ${isSolid ? 'text-primary-800' : 'text-white'}`}>
                Ascensus Academy
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`font-medium transition-colors text-sm uppercase tracking-widest ${isSolid ? 'text-primary hover:text-accent' : 'text-white/90 hover:text-white'}`}
              >
                {item.label}
              </Link>
            ))}
            <a href="/login" className={`px-6 py-3 rounded-full transition-colors font-medium text-sm tracking-wide ${isSolid ? 'bg-primary hover:bg-primary-light text-white' : 'bg-white text-primary hover:bg-gray-100'}`}>
              Login
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none transition-colors ${isSolid ? 'text-primary hover:text-primary-light' : 'text-white hover:text-gray-200'}`}
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`xl:hidden bg-white shadow-lg absolute w-full transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-4 pb-6 space-y-1 border-t border-gray-100">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-4 py-4 rounded-md text-lg font-medium text-primary hover:text-primary-light hover:bg-gray-50 border-b border-gray-50 last:border-none"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="px-4 pt-6">
             <button className="w-full bg-primary hover:bg-primary-light text-white px-5 py-4 rounded-lg transition-colors font-bold text-lg">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;