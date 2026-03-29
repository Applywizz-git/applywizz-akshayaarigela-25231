import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Toaster } from 'react-hot-toast';
import { AnimatePresence } from 'framer-motion';

import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 selection:text-primary">
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      
      {!loading && (
        <>
          <Toaster position="bottom-right" reverseOrder={false} />
          <Navbar />
          <main className="container mx-auto px-6">
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Certifications />
            <Education />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
