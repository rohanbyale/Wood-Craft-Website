import React, { useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { ArrowUpRight, MapPin, Globe, Phone } from 'lucide-react';

const    VisitUs = () => {
  const buttonRef = useRef(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150, mass: 0.6 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerx = left + width / 2;
    const centery = top + height / 2;
    mouseX.set((clientX - centerx) * 0.35);
    mouseY.set((clientY - centery) * 0.35);
  };

  const resetMouse = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="relative min-h-[60vh] flex items-center bg-[#0D110F] overflow-hidden py-16 lg:py-24">
      
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1563697599-f9a7b6843285?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          className="w-full h-full object-cover opacity-15 grayscale" 
          alt="Studio Interior"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D110F] via-[#0D110F]/95 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-16 lg:gap-12">
          
          <div className="w-full lg:max-w-[50%] xl:max-w-[55%]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="one text-[#C29958] tracking-[0.4em] uppercase text-[10px] font-black block mb-4">
                Global Presence
              </span>
              <h2 className="three text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-white uppercase leading-[1] mb-10 tracking-tighter whitespace-normal">
                Visit the <br /> <span className="italic text-[#C29958] font-light">Sanctuary</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 border-t border-white/5 pt-10">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-[#C29958] mb-3 opacity-80">
                    <MapPin size={14} />
                    <span className="one text-[10px] font-bold tracking-[0.2em] uppercase">Location</span>
                  </div>
                  <p className="two text-white/50 text-[14px] leading-relaxed italic whitespace-normal">
                    Hauptstraße 14, 72250 <br /> 
                    Black Forest, Germany
                  </p>
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-[#C29958] mb-3 opacity-80">
                    <Globe size={14} />
                    <span className="one text-[10px] font-bold tracking-[0.2em] uppercase">Coordinates</span>
                  </div>
                  <p className="two text-white/50 text-[14px] leading-relaxed whitespace-normal">
                    48.4632° N, 8.4116° E <br />
                    vibe@thestudio.com
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-auto flex justify-center lg:justify-end items-center lg:pr-10">
            <div 
              className="relative p-4 sm:p-8" 
              onMouseMove={handleMouseMove} 
              onMouseLeave={resetMouse}
            >
              <motion.button
              onClick={() => window.location.href = '/contact'}
                ref={buttonRef}
                style={{ x: springX, y: springY }}
                className="group relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full border border-white/10 flex items-center justify-center overflow-hidden bg-white/[0.01] backdrop-blur-md transition-all duration-500 hover:border-[#C29958]/40"
              >
                <div className="absolute inset-0 bg-[#C29958] translate-y-full group-hover:translate-y-0 transition-transform duration-600 ease-[0.22,1,0.36,1]" />
                
                <div className="relative z-10 text-center px-6">
                  <span className="one text-[9px] uppercase tracking-[0.4em] font-bold text-[#C29958] group-hover:text-[#0D110F] block mb-2 transition-colors">
                    Inquire For
                  </span>
                  <span className="three text-2xl sm:text-3xl md:text-4xl text-white group-hover:text-[#0D110F] uppercase leading-[1.1] transition-colors block">
                    Private <br /> Viewing
                  </span>
                  <div className="mt-4 flex justify-center">
                    <ArrowUpRight className="text-white group-hover:text-[#0D110F] transition-colors" size={24} />
                  </div>
                </div>
              </motion.button>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[112%] h-[112%] rounded-full border border-white/[0.03] pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-6 items-center justify-between">
           <div className="flex items-center gap-3">
              <Phone size={14} className="text-[#C29958] opacity-60" />
              <span className="one text-[10px] text-white/40 tracking-[0.2em] uppercase">+49 (0) 7441 1234 567</span>
           </div>
           <div className="one text-[10px] text-white/40 tracking-[0.2em] uppercase">
              MON — SAT <span className="text-[#C29958]/80 ml-2">10:00 — 18:00</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;