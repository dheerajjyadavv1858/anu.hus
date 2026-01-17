import React from 'react';
import { Mail, Instagram, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-dark-950 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-dark-900/50 to-transparent pointer-events-none"></div>
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none"
        ></motion.div>
        
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 font-bold tracking-wider uppercase text-xs mb-6">Ready to Scale?</span>
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-tight">
            Let's build something <br/> <span className="text-white">amazing together.</span>
          </h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16"
        >
            <a 
                href="mailto:anushka.hustle@gmail.com" 
                className="w-full sm:w-auto min-w-[200px] flex items-center justify-center space-x-3 bg-brand-500 text-white px-8 py-5 rounded-full font-bold hover:bg-brand-400 hover:scale-105 transition-all shadow-[0_0_25px_rgba(168,85,247,0.4)] text-lg group"
            >
                <Mail size={22} className="group-hover:animate-bounce" />
                <span>anushka.hustle@gmail.com</span>
            </a>
            
            <a 
                href="https://www.instagram.com/anushka.hustle/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-w-[200px] flex items-center justify-center space-x-3 bg-transparent text-white border border-white/20 px-8 py-5 rounded-full font-semibold hover:bg-white/10 hover:border-white/40 transition-colors text-lg group"
            >
                <Instagram size={22} className="group-hover:rotate-12 transition-transform" />
                <span>@anushka.hustle</span>
            </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="border-t border-white/10 pt-8 max-w-sm mx-auto"
        >
            <p className="text-slate-500 text-sm font-medium">
                Based in India • Serving Clients Worldwide
            </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;