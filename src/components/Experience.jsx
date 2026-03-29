import React from 'react';
import { DATA } from '../data';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div data-aos="fade-up" className="text-center mb-16">
          <span className="text-primary/70 font-semibold tracking-widest uppercase text-xs mb-4 block">Professional History</span>
          <h2 className="text-4xl md:text-5xl font-black text-white/95 mb-6">Work Experience</h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-10 shadow-[0_0_15px_rgba(34,211,238,0.3)]"></div>
        </div>

        <div className="relative border-l border-white/10 ml-6 md:ml-0 md:pl-0">
          {DATA.experience.map((exp, i) => (
            <div key={exp.company} className="mb-16 relative pl-10 md:pl-20">
              {/* Timeline marker */}
              <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 bg-primary rounded-full shadow-[0_0_20px_rgba(34,211,238,1)] border-4 border-background z-10" />
              
              <div data-aos={i % 2 === 0 ? "fade-right" : "fade-left"} className="glass p-8 rounded-3xl relative overflow-hidden glass-hover group">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2">
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <div className="flex items-center text-primary/80 font-semibold tracking-wider text-sm mt-1 uppercase">
                      <Briefcase size={14} className="mr-2" />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end text-white/50 text-xs font-semibold gap-1 uppercase tracking-wider">
                    <div className="flex items-center">
                      <Calendar size={12} className="mr-2" />
                      {exp.period}
                    </div>
                    {exp.location && (
                      <div className="flex items-center">
                        <MapPin size={12} className="mr-2" />
                        {exp.location}
                      </div>
                    )}
                  </div>
                </div>

                <ul className="space-y-4">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="flex gap-4 text-white/70 leading-relaxed font-light text-sm group-hover:text-white/90 transition-colors">
                      <CheckCircle2 size={16} className="text-primary shrink-0 mt-1 opacity-50 group-hover:opacity-100 transition-opacity" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
