import React from 'react';
import { motion } from 'framer-motion';
import { 
  Instagram, 
  Facebook, 
  Linkedin, 
  ArrowUp, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight 
} from 'lucide-react';

const PremiumFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    collections: ['Luxury Doors', 'Executive Desks', 'Wall Paneling', 'Premium Plywood'],
    company: ['Our Story', 'The Process', 'Sustainability', 'Contact Us'],
    legal: ['Privacy Policy', 'Terms of Service', 'Warranty Policy']
  };

  return (
    <footer className="bg-[#1B2620] text-white pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-3xl font-serif font-bold tracking-tighter"
            >
              WOOD<span className="text-[#C29958]">CRAFT</span>
            </motion.h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Transforming raw nature into architectural masterpieces. We specialize in premium timber solutions for those who value heritage and precision.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, color: '#C29958' }}
                  className="bg-white/5 p-3 rounded-full transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[#C29958] font-bold text-xs uppercase tracking-[0.2em] mb-8">Collections</h4>
            <ul className="space-y-4">
              {footerLinks.collections.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm flex items-center group transition-colors">
                    <ChevronRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all text-[#C29958]" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#C29958] font-bold text-xs uppercase tracking-[0.2em] mb-8">Quick Support</h4>
            <ul className="space-y-5">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={16} className="text-[#C29958]" />
                <span>+1 (234) 567 890</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail size={16} className="text-[#C29958]" />
                <span>orders@woodcraft.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={16} className="text-[#C29958] shrink-0" />
                <span>123 Industrial Estate, Craftsmanship Lane, NY</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <h4 className="text-white font-serif text-lg mb-4">Join the Inner Circle</h4>
            <p className="text-gray-400 text-xs mb-6">Get design inspiration and first access to new wood collections.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full bg-transparent border-b border-white/20 py-2 text-sm outline-none focus:border-[#C29958] transition-colors"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-[#C29958] hover:translate-x-1 transition-transform">
                <ArrowUp size={20} className="rotate-90" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-[10px] uppercase tracking-widest text-center md:text-left">
            © 2026 Woodcraft International. Handcrafted with Precision.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-[#C29958] text-white p-3 rounded-full shadow-lg"
          >
            <ArrowUp size={20} />
          </motion.button>

          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <a key={link} href="#" className="text-gray-500 hover:text-white text-[10px] uppercase tracking-widest transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center border-t border-white/5 pt-6">
          <p className="text-[9px] uppercase tracking-[0.4em] text-gray-600">
            Made with intent by <motion.span whileHover={{ color: '#C29958' }} className="text-gray-400 cursor-default transition-colors font-bold">ROHAN</motion.span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default PremiumFooter;