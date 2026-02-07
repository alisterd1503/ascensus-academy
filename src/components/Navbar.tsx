import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const sentinelRef = useRef<HTMLDivElement>(null);

  // Intersection Observer replaces the scroll listener to prevent forced reflow
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    navigate("/");
  };

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (!href.startsWith("/#")) return;
    e.preventDefault();
    const targetId = href.replace("/#", "");

    if (pathname === "/") {
      const el = document.getElementById(targetId);
      el?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    navigate("/");
    setTimeout(() => {
      const el = document.getElementById(targetId);
      el?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };
  
  const isSolid = isScrolled || isOpen;

  return (
    <>
      {/* Sentinel element to detect scroll position without scroll events */}
      <div ref={sentinelRef} className="absolute top-0 w-full h-4 pointer-events-none" aria-hidden="true" />

      <nav className={`fixed w-full z-50 transition-all duration-500 ${isSolid ? 'bg-white shadow-md py-4' : 'bg-transparent py-8'}`}>
        <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={handleLogoClick}>
              <a href="/" className="flex items-center transition-colors duration-500">
                <span className="sr-only">Ascensus Academy</span>
                <img
                  src="/main-logo.svg"
                  alt="Ascensus Academy Logo"
                  className={`h-8 sm:h-10 md:h-12 w-auto mr-2 transition-all duration-500 ${
                    isSolid ? 'filter-none' : 'invert brightness-0'
                  }`}
                />
                <span className={`text-xl sm:text-2xl md:text-3xl font-logo transition-colors duration-500 whitespace-nowrap ${isSolid ? 'text-primary-800' : 'text-white'}`}>
                  Ascensus Academy
                </span>
              </a>
            </div>

            {/* Desktop Menu - Hidden below 1366px to prevent bunching */}
            <div className="hidden min-[1366px]:flex items-center space-x-6 lg:space-x-8">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="relative">
                  <Link
                    to={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`font-medium transition-colors text-xs xl:text-sm tracking-widest whitespace-nowrap ${
                      item.preserveCase ? '' : 'uppercase'
                    } ${isSolid ? 'text-primary hover:text-accent' : 'text-white/90 hover:text-white'}`}
                  >
                    {item.label}
                  </Link>

                  {item.tag && (
                    <span
                      className={`absolute -top-5 -right-4 text-[9px] px-2 py-0.5 rounded-full ${isScrolled ? 'bg-primary text-white' : 'bg-white text-primary'}`}
                    >
                      {item.tag}
                    </span>
                  )}
                </div>
              ))}

              <a
                href="/login"
                className={`px-6 py-2.5 rounded-full transition-colors font-medium text-sm tracking-wide whitespace-nowrap ${
                  isSolid
                    ? 'bg-primary hover:bg-primary-light text-white'
                    : 'bg-white text-primary hover:bg-gray-100'
                }`}
              >
                Login
              </a>
            </div>

            {/* Mobile/Small Desktop Menu Button - Visible below 1366px */}
            <div className="min-[1366px]:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Open menu"
                className={`focus:outline-none transition-colors ${isSolid ? 'text-primary hover:text-primary-light' : 'text-white hover:text-gray-200'}`}
              >
                {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`min-[1366px]:hidden bg-white shadow-lg absolute w-full transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 pt-4 pb-6 space-y-1 border-t border-gray-100">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="flex items-center justify-between px-4 py-4 rounded-md text-lg font-medium text-primary hover:text-primary-light hover:bg-gray-50 border-b border-gray-50 last:border-none"
                onClick={(e) => {
                  handleNavClick(e, item.href);
                  setIsOpen(false);
                }}
              >
                <span>{item.label}</span>
                {item.tag && (
                  <span className={`bg-primary text-white text-xs px-2 py-0.5 rounded-full ml-3`}>
                    {item.tag}
                  </span>
                )}
              </Link>
            ))}
            <div className="px-4 pt-6">
               <a href="/login" className="w-full bg-primary hover:bg-primary-light text-white px-5 py-4 rounded-lg transition-colors font-bold text-lg inline-block text-center">
                Login
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;