import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Portfolio from './components/Portfolio';
import Founder from './components/Founder';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Smooth scroll behavior hack for older browsers or inconsistent CSS support
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <main className="w-full min-h-screen relative">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Portfolio />
      <Founder />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;