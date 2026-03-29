import React from 'react';
import { DATA } from '../data';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div data-aos="fade-up" className="text-center mb-16">
          <span className="text-primary/70 font-semibold tracking-widest uppercase text-xs mb-4 block">Core Expertise</span>
          <h2 className="text-4xl md:text-5xl font-black text-white/95 mb-6">Skills & Tools</h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-10 shadow-[0_0_15px_rgba(34,211,238,0.3)]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {DATA.skills.map((skillGroup, i) => (
            <div 
              key={skillGroup.category} 
              data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={i * 100}
              className="glass p-8 rounded-3xl relative overflow-hidden group border-white/5 active:scale-95 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-1 bg-gradient-to-r from-primary to-transparent rounded-full" />
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors uppercase tracking-widest">
                  {skillGroup.category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, idx) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(34, 211, 238, 0.1)', borderColor: 'rgba(34, 211, 238, 0.2)' }}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-white/60 bg-white/5 border border-white/10 cursor-default transition-colors hover:text-primary backdrop-blur-sm"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
