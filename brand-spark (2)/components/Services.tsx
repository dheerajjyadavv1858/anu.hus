import React from 'react';
import { Layout, Video, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Service } from '../types';

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: "Custom Website Design",
      description: "We don't use cookie-cutter templates. We build custom, pixel-perfect websites tailored to your specific business goals, whether it's a corporate site, portfolio, or landing page.",
      features: ["Custom UI/UX Architecture", "Responsive on All Devices", "High-Performance Code", "Conversion-Focused Layouts"],
      isPrimary: true,
    },
    {
      id: 2,
      title: "UGC Video Creation",
      description: "Authentic, high-energy user-generated content videos designed to stop the scroll and drive engagement on social platforms.",
      features: ["Creative Scripting", "Professional Editing", "Platform-Native Formats", "Viral Hooks"],
      isPrimary: false,
    }
  ];

  return (
    <section id="services" className="py-24 bg-dark-950 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-dark-800 via-dark-950 to-dark-950 opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-brand-400 font-bold tracking-widest uppercase text-xs mb-3 block">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Premium Digital Services</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed font-light">
            We provide end-to-end digital solutions, from stunning web interfaces to engaging video content.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Primary Service - Web Design */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2"
            >
                <div className="h-full bg-dark-900/50 backdrop-blur-sm border border-white/5 rounded-[2rem] p-8 md:p-14 text-white relative overflow-hidden group hover:border-brand-500/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]">
                    {/* Ambient Glow */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-500/10 blur-[80px] rounded-full group-hover:bg-brand-500/20 transition-all duration-500"></div>
                    
                    <div className="relative z-10">
                        <div className="inline-block p-4 bg-gradient-to-br from-brand-500 to-brand-700 rounded-2xl mb-8 shadow-lg shadow-brand-500/30 group-hover:scale-110 transition-transform duration-300">
                            <Layout size={32} className="text-white" />
                        </div>
                        <h3 className="text-3xl font-bold mb-4 group-hover:text-brand-400 transition-colors">{services[0].title}</h3>
                        <p className="text-slate-300 text-lg mb-10 max-w-lg leading-relaxed">
                            {services[0].description}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                            {services[0].features.map((feature, idx) => (
                                <div key={idx} className="flex items-center space-x-3 group/item">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:border-brand-400/50 transition-colors">
                                        <Check size={14} className="text-brand-400" />
                                    </div>
                                    <span className="font-medium text-slate-200 group-hover/item:text-white transition-colors">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Secondary Service - UGC */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-1"
            >
                <div className="h-full bg-dark-900/30 backdrop-blur-sm border border-white/5 rounded-[2rem] p-8 md:p-10 relative overflow-hidden hover:bg-dark-900 hover:border-brand-500/20 transition-all duration-300 group hover:-translate-y-1">
                     <div className="inline-block p-4 bg-dark-800 border border-white/10 rounded-2xl mb-8 group-hover:border-brand-400/30 transition-colors">
                        <Video size={32} className="text-brand-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-400 transition-colors">{services[1].title}</h3>
                    <p className="text-slate-400 mb-8 leading-relaxed text-sm md:text-base">
                        {services[1].description}
                    </p>
                    
                    <ul className="space-y-4">
                        {services[1].features.map((feature, idx) => (
                            <li key={idx} className="flex items-center space-x-3">
                                <Check size={18} className="text-brand-400 flex-shrink-0" />
                                <span className="text-slate-300 font-medium text-sm md:text-base">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;