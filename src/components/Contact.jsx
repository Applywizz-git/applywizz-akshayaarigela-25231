import React, { useState } from 'react';
import { DATA } from '../data';
import { Mail, Phone, MapPin, Send, MessageSquare, User, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { toast } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Celebration
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#22D3EE', '#A78BFA', '#FFFFFF']
    });

    toast.success('Message sent! Looking forward to connecting.', {
      style: {
        background: '#0F172A',
        color: '#22D3EE',
        border: '1px solid rgba(34, 211, 238, 0.2)'
      },
      iconTheme: {
        primary: '#22D3EE',
        secondary: '#0F172A',
      },
    });

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div data-aos="fade-up" className="text-center mb-16">
          <span className="text-primary/70 font-semibold tracking-widest uppercase text-xs mb-4 block">Networking</span>
          <h2 className="text-4xl md:text-5xl font-black text-white/95 mb-6 text-glow-cyan">Get In Touch</h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-10 shadow-[0_0_15px_rgba(34,211,238,0.3)]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div data-aos="fade-right" className="space-y-8">
            <h3 className="text-3xl font-black text-white/95 leading-tight mb-4">
              Let's build something <span className="text-primary">impactful</span> together.
            </h3>
            <p className="text-white/50 text-lg leading-relaxed font-light mb-10">
              Open for collaboration on data-driven projects, supply chain solutions, and business transformation initiatives.
            </p>

            <div className="space-y-6">
              <a href={`mailto:${DATA.personal.email}`} className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-lg font-bold text-white group-hover:text-primary transition-colors">{DATA.personal.email}</p>
                </div>
              </a>

              <a href={`tel:${DATA.personal.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-1">Phone</p>
                  <p className="text-lg font-bold text-white group-hover:text-secondary transition-colors">{DATA.personal.phone}</p>
                </div>
              </a>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white/40 group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-lg font-bold text-white group-hover:text-white/80 transition-colors">{DATA.personal.location}</p>
                </div>
              </div>
              
              <a href={DATA.personal.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-1">LinkedIn</p>
                  <p className="text-lg font-bold text-white group-hover:text-primary transition-colors hover:underline">Connect with me</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left" className="glass p-8 md:p-12 rounded-[40px] relative overflow-hidden group border-white/5 shadow-2xl active:scale-95 transition-all duration-300">
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-primary/70 ml-2">Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all font-medium"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-primary/70 ml-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all font-medium"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-primary/70 ml-2">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-6 text-white/20" size={18} />
                  <textarea
                    required
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all font-medium resize-none overflow-hidden"
                    placeholder="Tell me about your project"
                  ></textarea>
                </div>
              </div>

              <button type="submit" className="btn-primary w-full group flex items-center justify-center gap-2 mt-4 text-sm font-black uppercase tracking-widest">
                Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
            
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] -z-1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
