import React from 'react';
import { ArrowRight, Play, Star, Globe, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-dark-950">
      {/* Enhanced Background with Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
      
      {/* Ambient Glows */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-brand-600/20 rounded-full blur-[120px]"
      />
      <motion.div 
         animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.4, 0.3] }}
         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
         className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[600px] h-[600px] bg-brand-900/40 rounded-full blur-[120px]"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="relative">
              {/* Premium Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-md hover:bg-white/10 transition-colors cursor-default"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-500"></span>
                </span>
                <span className="text-sm font-medium text-slate-200 tracking-wide">6-Hour Design Delivery</span>
              </motion.div>
              
              {/* Main Headline */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-8"
              >
                Websites That <br className="hidden md:block" />
                {/* Gradient Text with padding to prevent clipping */}
                <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-400 to-brand-500 pb-2">
                  Spark Growth.
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="text-lg md:text-xl text-slate-400 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light"
              >
                We build premium, custom websites tailored exactly to your vision. Whether you need a complex platform or a stunning portfolio, we deliver fast.
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5"
              >
                <a 
                  href="#contact"
                  className="w-full sm:w-auto px-8 py-4 bg-brand-600 text-white rounded-full font-bold hover:bg-brand-500 transition-all shadow-[0_0_40px_rgba(147,51,234,0.3)] hover:shadow-[0_0_60px_rgba(147,51,234,0.5)] hover:-translate-y-1 flex items-center justify-center space-x-2 group"
                >
                  <span>Start Your Project</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#portfolio"
                  className="w-full sm:w-auto px-8 py-4 bg-transparent text-white border border-white/10 rounded-full font-semibold hover:bg-white/5 hover:border-brand-400/30 transition-all flex items-center justify-center backdrop-blur-sm"
                >
                  View Work
                </a>
              </motion.div>
            </div>
          </div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
             animate={{ opacity: 1, scale: 1, rotate: 0 }}
             transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 50 }}
             className="lg:w-1/2 w-full relative h-[500px] flex items-center justify-center"
          >
             {/* Abstract Layered Composition */}
             <div className="relative w-full max-w-[500px] aspect-square">
                {/* Back Glow */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-600/30 rounded-full filter blur-[100px] animate-pulse-slow"></div>

                {/* Main Card: Abstract Website Interface */}
                <motion.div 
                  initial={{ y: 20 }}
                  animate={{ y: -10 }}
                  transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                  className="absolute inset-0 m-auto w-[85%] h-[60%] bg-dark-900/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl rotate-[-6deg] z-10 hover:rotate-0 transition-transform duration-500 group overflow-hidden"
                >
                    {/* Header bar */}
                    <div className="h-8 w-full border-b border-white/5 flex items-center px-4 space-x-2 bg-white/5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                    </div>
                    {/* Abstract Content */}
                    <div className="p-6 space-y-4">
                        <div className="flex items-center justify-between">
                             <div className="h-8 w-24 bg-brand-500/20 rounded-lg animate-pulse"></div>
                             <div className="h-8 w-8 bg-white/5 rounded-full"></div>
                        </div>
                        <div className="h-24 w-full bg-gradient-to-r from-brand-900/50 to-dark-800 rounded-xl border border-white/5 flex items-center justify-center">
                            <span className="text-brand-400/50 text-4xl font-black tracking-widest opacity-20 select-none">DESIGN</span>
                        </div>
                        <div className="space-y-2">
                             <div className="h-3 w-3/4 bg-white/10 rounded-full"></div>
                             <div className="h-3 w-1/2 bg-white/10 rounded-full"></div>
                        </div>
                    </div>
                    
                    {/* Highlight Effect */}
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/5 to-transparent pointer-events-none"></div>
                </motion.div>

                {/* Floating Card: UGC Video (Abstract Pill) */}
                <motion.div 
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="absolute bottom-[15%] right-[5%] z-20 animate-float bg-black/80 backdrop-blur-md border border-brand-500/30 py-3 px-5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-3"
                >
                    <div className="w-8 h-8 rounded-full bg-brand-600 flex items-center justify-center text-white">
                        <Play size={14} fill="currentColor" />
                    </div>
                    <div>
                        <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">UGC Creative</p>
                        <p className="text-sm font-bold text-white">High Retention</p>
                    </div>
                </motion.div>

                {/* Floating Card: Satisfaction (Badge) */}
                <motion.div 
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute top-[15%] left-[0%] z-20 animate-float [animation-delay:2s] bg-dark-800/90 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-xl flex items-center gap-3"
                >
                     <div className="p-2 bg-green-500/10 rounded-lg text-green-400">
                        <ShieldCheck size={24} />
                     </div>
                     <div>
                        <p className="text-2xl font-bold text-white leading-none">100%</p>
                        <p className="text-xs text-slate-400 font-medium">Satisfaction</p>
                     </div>
                </motion.div>
                
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;