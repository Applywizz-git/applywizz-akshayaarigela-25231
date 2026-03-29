import React from 'react';
import { DATA } from '../data';
import { motion } from 'framer-motion';
import { ExternalLink, Layers, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-up" className="text-center mb-16">
          <span className="text-primary/70 font-semibold tracking-widest uppercase text-xs mb-4 block">Our Work</span>
          <h2 className="text-4xl md:text-5xl font-black text-white/95 mb-6">Key Projects</h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-10 shadow-[0_0_15px_rgba(34,211,238,0.3)]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DATA.projects.map((project, i) => (
            <motion.div
              key={project.name}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-3xl relative overflow-hidden group border-white/5 shadow-xl hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-300 active:scale-95"
            >
              <div className="absolute top-0 right-0 p-4 text-primary/30 group-hover:text-primary transition-colors">
                <ArrowUpRight size={24} />
              </div>
              
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform duration-300">
                <Layers size={24} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-6 leading-tight group-hover:text-primary transition-colors">
                {project.name}
              </h3>

              <ul className="space-y-3 mb-8">
                {project.impact.map((impact, idx) => (
                  <li key={idx} className="flex gap-2 text-white/50 text-sm font-medium tracking-wide items-start group-hover:text-white/80 transition-colors">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-1.5 shrink-0 shadow-[0_0_10px_rgba(167,139,250,0.5)]"></span>
                    {impact}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary/70 group-hover:text-primary transition-colors">
                View Details <ArrowUpRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
