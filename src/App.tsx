import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Tutors from './components/Tutors';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-gray-900 antialiased bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Tutors />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
