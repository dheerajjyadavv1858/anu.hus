import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="flex items-center gap-3 mb-6 md:mb-0 group cursor-pointer">
                {/* Simplified BS Monogram for Footer */}
                 <div className="relative w-8 h-8 flex items-center justify-center bg-brand-900 rounded-lg border border-brand-500/30">
                    <span className="font-bold text-brand-400 text-xs tracking-tight font-sans">BS</span>
                </div>
                <span className="text-lg font-bold tracking-tight text-white">
                BRAND<span className="text-brand-400">SPARK</span>
                </span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-400">
                <a href="#services" className="hover:text-brand-400 transition-colors">Services</a>
                <a href="#why-us" className="hover:text-brand-400 transition-colors">Why Us</a>
                <a href="#portfolio" className="hover:text-brand-400 transition-colors">Portfolio</a>
                <a href="#contact" className="hover:text-brand-400 transition-colors">Contact</a>
            </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} Brand Spark. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Designed & Built by Brand Spark</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;