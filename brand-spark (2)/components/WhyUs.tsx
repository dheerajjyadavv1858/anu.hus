import React from 'react';
import { Timer, Layers, MonitorSmartphone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Feature } from '../types';

const WhyUs: React.FC = () => {
  const features: Feature[] = [
    {
      id: 1,
      title: "Design in 6 Hours",
      description: "We respect your time. We can deliver a complete, premium initial design in just 6 hours. Fast execution without sacrificing quality.",
      icon: <Timer size={32} className="text-brand-400" />,
    },
    {
      id: 2,
      title: "You Pick It, We Build It",
      description: "Found a website design you love? Send us the link. We can replicate and customize any design style found on the internet to fit your brand.",
      icon: <Layers size={32} className="text-white" />,
    },
    {
      id: 3,
      title: "Flawless on Every Device",
      description: "From massive desktop monitors to the smallest smartphones, we ensure your website adapts perfectly to every screen size.",
      icon: <MonitorSmartphone size={32} className="text-brand-200" />,
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="why-us" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
            <span className="text-slate-500 font-bold tracking-widest uppercase text-xs mb-3 block">Why Choose Us</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">The Brand Spark Promise</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
                We are committed to speed, flexibility, and absolute compatibility.
            </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div 
              key={feature.id} 
              variants={itemVariants}
              className="bg-dark-900/40 p-10 rounded-[2.5rem] border border-white/5 hover:border-brand-500/30 hover:bg-dark-900 hover:shadow-[0_10px_40px_-10px_rgba(168,85,247,0.15)] transition-all duration-500 group relative overflow-hidden"
            >
              <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-brand-500/10 group-hover:scale-110 transition-all duration-300 relative z-10 border border-white/5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 relative z-10 group-hover:text-brand-400 transition-colors">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed group-hover:text-slate-200 relative z-10">
                {feature.description}
              </p>
              
              {/* Subtle gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Decorative circle */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-brand-500/10 transition-colors duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;