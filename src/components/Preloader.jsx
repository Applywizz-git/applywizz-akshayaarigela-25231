import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-[#0F172A] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background pulses */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
      
      <div className="relative text-center">
        <motion.h1
          initial={{ letterSpacing: "1em", opacity: 0 }}
          animate={{ letterSpacing: "0.2em", opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-black text-white tracking-[0.2em] mb-8"
        >
          AKSHAYA
        </motion.h1>

        <div className="relative w-64 md:w-80 h-1 bg-white/5 rounded-full overflow-hidden mx-auto mb-4">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${percent}%` }}
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-secondary shadow-[0_0_15px_rgba(34,211,238,0.5)]"
          />
        </div>

        <motion.div 
          key={percent}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-primary font-black text-xl tracking-tighter"
        >
          {percent}%
        </motion.div>

        <div className="mt-12 flex gap-4 justify-center">
          <div className="w-1.5 h-1.5 bg-primary/20 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-1.5 h-1.5 bg-primary/20 rounded-full animate-bounce" style={{ animationDelay: '200ms' }} />
          <div className="w-1.5 h-1.5 bg-primary/20 rounded-full animate-bounce" style={{ animationDelay: '400ms' }} />
        </div>
      </div>

      <div className="absolute bottom-10 left-10 text-[10px] uppercase font-bold tracking-[0.3em] text-white/10">
        Strategizing Excellence
      </div>
      <div className="absolute bottom-10 right-10 text-[10px] uppercase font-bold tracking-[0.3em] text-white/10">
        © 2026 Akshaya
      </div>
    </motion.div>
  );
};

export default Preloader;
