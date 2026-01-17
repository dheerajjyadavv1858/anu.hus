import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Logo = ({ scrollY }: { scrollY: number }) => (
  <div className="flex items-center gap-3 group cursor-pointer">
    {/* New BS Monogram Logo with Scroll Rotation */}
    <div 
      style={{ transform: `rotate(${scrollY * 0.5}deg)` }}
      className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-brand-600 to-brand-400 rounded-xl shadow-lg shadow-brand-500/30 transition-transform duration-75 ease-linear will-change-transform"
    >
      <div className="absolute inset-0 bg-white/10 rounded-xl"></div>
      <span className="relative z-10 font-bold text-white text-lg tracking-tight font-sans">BS</span>
    </div>
    <div className="flex flex-col -space-y-1">
        <span className="text-xl font-bold tracking-tight text-white group-hover:text-brand-300 transition-colors">
        BRAND<span className="text-brand-400">SPARK</span>
        </span>
    </div>
  </div>
);

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollY(currentScroll);
      setIsScrolled(currentScroll > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Founder', href: '#founder' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? 'bg-dark-950/90 backdrop-blur-md shadow-lg shadow-brand-900/20 border-b border-white/5 py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#">
            <Logo scrollY={scrollY} />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-brand-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full bg-brand-500 text-white text-sm font-bold hover:bg-brand-400 hover:scale-105 transition-all shadow-[0_0_15px_rgba(168,85,247,0.4)]"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-slate-300 hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-dark-950 border-b border-white/5 p-6 shadow-2xl animate-fade-in-up">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-slate-300 py-3 border-b border-white/5 hover:text-brand-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-6 w-full text-center py-3.5 rounded-xl bg-brand-500 text-white font-bold shadow-lg shadow-brand-500/20"
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;