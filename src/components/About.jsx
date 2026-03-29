import React, { useState, useEffect, useRef } from 'react';
import { DATA } from '../data';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

const AnimatedCounter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const spring = useSpring(0, { stiffness: 100, damping: 30 });
  const displayValue = useTransform(spring, (current) => Math.floor(current) + suffix);

  useEffect(() => {
    if (isInView) {
      spring.set(parseInt(value));
    }
  }, [isInView, value, spring]);

  return (
    <motion.span ref={ref} className="text-4xl font-bold text-primary block mb-2">
      <motion.span>{displayValue}</motion.span>
    </motion.span>
  );
};

const About = () => {
  const stats = [
    { label: "Experience", value: "2", suffix: " yrs" },
    { label: "Efficiency Boost", value: "20", suffix: "%+" },
    { label: "Reporting Effort Reduction", value: "35", suffix: "%" },
    { label: "Rework Reduction", value: "30", suffix: "%" }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div data-aos="fade-up" className="text-center mb-16">
          <span className="text-primary/70 font-semibold tracking-widest uppercase text-xs mb-4 block">Our Story</span>
          <h2 className="text-4xl md:text-5xl font-black text-white/95 mb-6">About Me</h2>
          
          <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-10 shadow-[0_0_15px_rgba(34,211,238,0.3)]"></div>

          <div className="glass p-8 md:p-12 rounded-3xl relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl -z-10" />
            
            <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light text-left">
              {DATA.summary}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div 
              key={stat.label} 
              data-aos="fade-up" 
              data-aos-delay={i * 100}
              className="glass p-6 rounded-2xl text-center glass-hover border-primary/5 active:scale-95 transition-transform"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <span className="text-xs font-semibold text-white/50 uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
