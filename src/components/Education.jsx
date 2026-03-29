import React from 'react';
import { DATA } from '../data';
import { GraduationCap, Landmark, CalendarRange, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4">
        <div data-aos="fade-up" className="text-center mb-16">
          <span className="text-secondary font-semibold tracking-widest uppercase text-xs mb-4 block">Foundations</span>
          <h2 className="text-4xl md:text-5xl font-black text-white/95 mb-6 text-glow-violet">Education</h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full mb-10 shadow-[0_0_15px_rgba(167,139,250,0.3)]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DATA.education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              data-aos="fade-up"
              data-aos-delay={i * 200}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-3xl relative overflow-hidden group border-white/5 shadow-xl hover:shadow-[0_0_40px_rgba(167,139,250,0.15)] transition-all duration-300"
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-8 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap size={44} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-6 leading-tight group-hover:text-secondary transition-colors">
                {edu.degree}
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-white/50 text-sm font-medium tracking-wide">
                  <Landmark size={18} className="text-secondary/60" />
                  {edu.school}
                </div>
                <div className="flex items-center gap-4 text-white/50 text-xs font-semibold uppercase tracking-widest">
                  <CalendarRange size={16} className="text-secondary/40" />
                  {edu.period}
                </div>
              </div>

              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <GraduationCap size={120} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
