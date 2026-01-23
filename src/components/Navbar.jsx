import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Collections', path: '/product' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[120] transition-all duration-700 ease-[0.19, 1, 0.22, 1] ${
          scrolled || isOpen ? 'bg-[#1B2620]/95 backdrop-blur-xl py-4 shadow-2xl' : 'bg-transparent py-8 md:py-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
          
          <Link to="/" className="relative group overflow-hidden h-8 flex flex-col justify-start z-[130]">
             <div className="transition-transform duration-500 ease-[0.76, 0, 0.24, 1] group-hover:-translate-y-1/2">
                <span className="text-white text-xl md:text-2xl font-black tracking-tighter block leading-8">
                  WOOD<span className="text-[#C29958]">CRAFT</span>
                </span>
                <span className="text-[#C29958] text-xl md:text-2xl font-black tracking-tighter block leading-8 italic">
                  EST. 2026
                </span>
             </div>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className="relative overflow-hidden group h-6 flex flex-col justify-start"
              >
                <motion.div
                  whileHover={{ y: -24 }}
                  transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                  className="flex flex-col"
                >
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/50 leading-6 h-6">
                    {link.name}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#C29958] leading-6 h-6">
                    {link.name}
                  </span>
                </motion.div>
                
                <NavLink 
                  to={link.path} 
                  className={({ isActive }) => 
                    isActive ? "absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#C29958] rounded-full" : "hidden"
                  } 
                />
              </NavLink>
            ))}

            <Link to="/contact">
              <motion.button
                whileHover="hover"
                initial="initial"
                className="relative bg-[#C29958] text-white px-9 py-3 rounded-full text-[9px] font-black uppercase tracking-[0.3em] overflow-hidden group"
              >
                <motion.div
                  variants={{ initial: { y: 0 }, hover: { y: -40 } }}
                  transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                  className="relative z-10"
                >
                  Request a Consultation
                </motion.div>
                <motion.div
                  variants={{ initial: { y: 40 }, hover: { y: 0 } }}
                  transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                  className="absolute inset-0 z-10 flex items-center justify-center text-[#1B2620]"
                >
                  Let's Talk
                </motion.div>
                <motion.div 
                  className="absolute inset-0 bg-white"
                  variants={{ initial: { scaleY: 0 }, hover: { scaleY: 1 } }}
                  style={{ originY: 1 }}
                  transition={{ duration: 0.4, ease: "circOut" }}
                />
              </motion.button>
            </Link>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 z-[130] p-2 -mr-2"
          >
            <motion.div 
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-8 h-[1.5px] bg-white rounded-full origin-center transition-all duration-500" 
            />
            <motion.div 
              animate={isOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
              className="w-8 h-[1.5px] bg-white rounded-full transition-all duration-500" 
            />
            <motion.div 
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-8 h-[1.5px] bg-white rounded-full origin-center transition-all duration-500" 
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-[#1B2620] z-[110] flex flex-col justify-center px-10 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            
            <div className="flex flex-col gap-6 relative z-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 50, skewY: 5 }}
                  animate={{ opacity: 1, y: 0, skewY: 0 }}
                  transition={{ 
                    delay: 0.1 * i, 
                    duration: 0.8, 
                    ease: [0.76, 0, 0.24, 1] 
                  }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="flex items-baseline gap-4 group"
                  >
                    <span className="text-[#C29958] text-lg italic opacity-40 font-serif">0{i+1}</span>
                    <span className="text-white text-5xl sm:text-7xl font-black uppercase tracking-tighter transition-all duration-500 hover:text-[#C29958] hover:italic">
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-6 inline-block bg-[#C29958] text-white px-10 py-5 rounded-full text-[10px] font-bold uppercase tracking-[0.3em]"
                >
                 Request a Consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;