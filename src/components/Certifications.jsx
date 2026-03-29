import React from 'react';
import { DATA } from '../data';
import { Award, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden backdrop-blur-3xl">
      <div className="max-w-4xl mx-auto px-4">
        <div data-aos="fade-up" className="text-center mb-16">
          <span className="text-primary/70 font-semibold tracking-widest uppercase text-xs mb-4 block">Validation</span>
          <h2 className="text-4xl md:text-5xl font-black text-white/95 mb-6 text-glow-cyan">Certifications</h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-10 shadow-[0_0_15px_rgba(34,211,238,0.3)]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DATA.certifications.map((cert, i) => (
            <motion.div
              key={cert}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              whileHover={{ x: 10 }}
              className="glass p-8 rounded-3xl relative overflow-hidden group border-white/5 shadow-xl hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-300"
            >
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheck size={28} />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors duration-300">
                    {cert.split(' – ')[0]}
                  </h3>
                  <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mt-1">
                    {cert.split(' – ')[1]}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
