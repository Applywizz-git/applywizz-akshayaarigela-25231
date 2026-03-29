import React from 'react';
import { DATA } from '../data';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/2 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/2 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-8 md:px-12 lg:px-20">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 xl:gap-24">
          
          {/* Left Side: Text */}
          <div className="text-center lg:text-left z-10 lg:w-[60%] flex flex-col items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-8 inline-block glass px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.25em] text-primary/80 border-primary/20 shadow-[0_0_20px_rgba(34,211,238,0.1)]"
            >
              {DATA.personal.title}
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-6xl xl:text-8xl font-black mb-8 tracking-tighter leading-[0.9] text-white/95 whitespace-nowrap"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {DATA.personal.name}
            </motion.h1>

            <motion.div 
              className="text-lg md:text-xl xl:text-2xl font-light text-white/40 mb-12 min-h-12 tracking-wide text-center lg:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              I specialize in{' '}
              <span className="text-secondary font-medium">
                <Typewriter
                  words={['Agile Delivery', 'Data Analytics', 'Process Improvement', 'Stakeholder Management']}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </motion.div>

            <motion.div 
              className="flex gap-4 justify-center lg:justify-start items-center flex-wrap"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <a 
                href="/AWL-25231-25032026-0357-resume_akshaya-arigela_ba.pdf" 
                download 
                className="px-10 py-5 rounded-full bg-primary text-background font-black uppercase text-xs tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_0_25px_rgba(34,211,238,0.4)] flex items-center gap-2"
              >
                Download Resume <Download size={18} />
              </a>
              <a 
                href="#contact" 
                className="px-10 py-5 rounded-full border-2 border-primary/20 text-primary font-black uppercase text-xs tracking-widest hover:bg-primary/5 transition-all active:scale-95"
              >
                Get In Touch
              </a>
            </motion.div>
          </div>

          {/* Right Side: Professional Image */}
          <motion.div 
            className="relative lg:w-[40%] flex justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
          <div className="relative w-64 h-64 md:w-80 md:h-80 xl:w-[420px] xl:h-[420px] group">
              {/* Soft Gradient Aura */}
              <div className="absolute -inset-12 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10 rounded-full blur-[80px] opacity-40 group-hover:opacity-70 transition-opacity duration-1000" />
              
              {/* Image Frame */}
              <div className="w-full h-full rounded-[48px] overflow-hidden glass border-white/5 relative z-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
                <img 
                  src="/akshaya_arigela_portrait.png" 
                  alt={DATA.personal.name}
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
              </div>

              {/* Float Impact Indicators */}
              <div className="absolute top-1/2 -right-6 lg:-right-8 -translate-y-1/2 glass p-5 rounded-3xl border-white/10 z-20 backdrop-blur-2xl shadow-2xl flex flex-col items-center">
                <span className="text-2xl font-black text-primary leading-none">2+</span>
                <span className="text-[8px] font-bold text-white/30 uppercase tracking-widest mt-1">Years XP</span>
              </div>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 glass px-6 py-4 rounded-3xl border-white/10 z-20 backdrop-blur-2xl shadow-2xl flex flex-col items-center">
                <span className="text-2xl font-black text-secondary leading-none">35%</span>
                <span className="text-[8px] font-bold text-white/30 uppercase tracking-widest mt-1">Impact Boost</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer text-primary/20 animate-bounce transition-colors hover:text-primary"
        onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
