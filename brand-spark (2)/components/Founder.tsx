import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Founder: React.FC = () => {
  return (
    <section id="founder" className="py-24 bg-black relative overflow-hidden">
        {/* Subtle pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="bg-dark-900/80 backdrop-blur-xl rounded-[3rem] p-8 md:p-16 shadow-2xl border border-white/5 relative overflow-hidden group hover:border-brand-500/20 transition-all duration-500"
        >
           {/* Decorative Blooms */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-[80px] -z-0"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] -z-0"></div>

           <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-40 h-40 md:w-48 md:h-48 flex-shrink-0"
              >
                <div className="w-full h-full rounded-full overflow-hidden border-[6px] border-dark-950 shadow-2xl relative">
                    <div className="absolute inset-0 bg-brand-500 mix-blend-overlay opacity-20"></div>
                    <img 
                        src="https://picsum.photos/id/64/400/400" 
                        alt="Anushka - Founder of Brand Spark" 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-center md:text-left flex-1"
              >
                 <Quote className="text-brand-400 mb-6 mx-auto md:mx-0 opacity-40" size={48} fill="currentColor" />
                 <p className="text-xl md:text-3xl font-medium text-slate-200 italic mb-8 leading-relaxed font-light">
                    "I started Brand Spark to help founders skip the 'template' phase. We build <span className="text-brand-400 font-semibold">authentic, custom digital brands</span> that don't just look good—they convert."
                 </p>
                 <div className="border-l-4 border-brand-500 pl-4 text-left inline-block">
                    <h4 className="text-xl font-bold text-white">Anushka</h4>
                    <p className="text-slate-400 font-medium">Founder, Brand Spark</p>
                 </div>
              </motion.div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Founder;