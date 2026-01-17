import React from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Project } from '../types';

const Portfolio: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Aartique Designs",
      category: "Luxury Interior & Decor",
      url: "https://aartiquedesigns.in",
      // Interior design image - Modern Living Room
      imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop", 
    },
    {
      id: 2,
      title: "PSV Design & Build",
      category: "Architectural Firm",
      url: "https://psvdesignnbuild.in",
      // Architecture/Interior image - Modern Construction
      imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-dark-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/5 pb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
             <span className="text-brand-400 font-bold tracking-widest uppercase text-xs mb-3 block">Featured Projects</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Selected Work</h2>
            <p className="text-slate-400 max-w-xl text-lg font-light">
              A showcase of our capabilities. We build functional, beautiful digital experiences.
            </p>
          </motion.div>
          <motion.a 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             href="#contact" 
             className="px-6 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-brand-500 hover:text-white hover:border-brand-500 transition-all duration-300 inline-flex items-center gap-2 group text-sm"
          >
             Start your project <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18}/>
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.a 
              key={project.id} 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="relative overflow-hidden rounded-[2rem] bg-dark-800 aspect-[16/10] mb-8 shadow-2xl border border-white/5 group-hover:border-brand-500/50 transition-colors duration-500">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10"></div>
                
                {/* Center Hover Button */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-brand-600/90 backdrop-blur-md px-8 py-4 rounded-full text-white font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl shadow-brand-500/20">
                        View Live Site <ExternalLink size={18} />
                    </div>
                </div>

                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              
              <div className="flex justify-between items-end px-2">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-brand-400 transition-colors">{project.title}</h3>
                    <div className="flex items-center gap-3">
                        <div className="h-px w-8 bg-brand-400/50"></div>
                        <p className="text-slate-400 font-medium tracking-wide text-sm uppercase">{project.category}</p>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 group-hover:border-brand-400 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                    <ArrowUpRight size={20} />
                  </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;