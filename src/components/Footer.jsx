import React from 'react';
import { DATA } from '../data';
import { Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-12 relative border-t border-white/5 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex flex-col items-center md:items-start">
            <a href="#" className="text-3xl font-black text-white tracking-[0.2em] mb-4">
              AKSHAYA<span className="text-primary text-glow-cyan">.</span>
            </a>
            <p className="text-white/40 text-sm font-medium tracking-wide max-w-xs text-center md:text-left">
              Strategizing business solutions through data-driven insights and agile methodologies.
            </p>
          </div>

          <div className="flex gap-4">
            <a 
              href={DATA.personal.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-white/50 hover:text-primary transition-all duration-300 hover:scale-110 active:scale-95"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href={`mailto:${DATA.personal.email}`}
              className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-white/50 hover:text-primary transition-all duration-300 hover:scale-110 active:scale-95"
            >
              <Mail size={24} />
            </a>
            <button 
              onClick={scrollToTop}
              className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-white/50 hover:text-primary transition-all duration-300 hover:scale-110 active:scale-95"
            >
              <ArrowUp size={24} />
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5">
          <p className="text-xs font-semibold text-white/20 uppercase tracking-widest">
            © {new Date().getFullYear()} {DATA.personal.name}. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-xs font-semibold text-white/20 uppercase tracking-widest">
            <a href="#about" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#contact" className="hover:text-primary transition-colors">Terms</a>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-1" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] -z-1" />
    </footer>
  );
};

export default Footer;
