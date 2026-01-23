import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, Ruler } from 'lucide-react';

const WorkCTA = ({ onOpenInquiry }) => {
  return (
    <section className="relative bg-[#0A0E0C] py-24 lg:py-32 overflow-hidden border-t border-white/5">
      
      <div className="absolute inset-0 z-0 pointer-events-none">
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(27,38,32,0.4)_0%,_rgba(10,14,12,1)_70%)]" />

        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{ 
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }} 
        />

        <div className="absolute left-[5%] top-1/2 -translate-y-1/2 opacity-20 hidden xl:block">
          <svg width="300" height="400" viewBox="0 0 100 120" className="stroke-[#C29958] fill-none">
            <motion.path 
              initial={{ pathLength: 0, y: -20 }}
              whileInView={{ pathLength: 1, y: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
              d="M20,20 L80,20 L80,40 L70,40 L75,60 L25,60 L30,40 L20,40 Z" 
              strokeWidth="0.5"
            />
            <motion.path 
              initial={{ pathLength: 0, y: 20 }}
              whileInView={{ pathLength: 1, y: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
              d="M25,70 L75,70 L70,90 L80,90 L80,110 L20,110 L20,90 L30,90 Z" 
              strokeWidth="0.5"
              opacity="0.5"
            />
            <line x1="50" y1="60" x2="50" y2="70" strokeDasharray="2 2" strokeWidth="0.2" />
          </svg>
        </div>

        <div className="absolute inset-0 flex items-center justify-center translate-y-8 lg:translate-y-0 opacity-30 lg:opacity-50">
          <svg className="w-[450px] h-[550px] lg:w-[650px] lg:h-[750px]" viewBox="0 0 100 100">
            <motion.path 
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 3, ease: "easeInOut" }}
              d="M30,20 L70,20 L65,60 L35,60 Z M35,60 L28,95 M65,60 L72,95 M50,60 L50,95" 
              stroke="#1F2924" 
              strokeWidth="0.8"
              fill="none"
            />
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 1 }}
              d="M30,30 L70,30 M32,45 L68,45 M35,60 L65,60" 
              stroke="#C29958" 
              strokeWidth="0.4"
              fill="none"
            />
          </svg>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-8 flex items-end opacity-10">
          {[...Array(50)].map((_, i) => (
            <div key={i} className={`flex-grow border-l border-white ${i % 10 === 0 ? 'h-8' : i % 5 === 0 ? 'h-5' : 'h-2'}`} />
          ))}
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
          
          <div className="text-left flex-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="p-2 border border-[#C29958]/30 rounded-full">
                <Compass size={16} className="text-[#C29958] animate-[spin_12s_linear_infinite]" />
              </div>
              <span className="text-[#C29958] text-[10px] uppercase tracking-[0.6em] font-black">
                Design Specification
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-6xl md:text-8xl lg:text-9xl text-white uppercase leading-[0.8] tracking-tighter mb-10 font-serif"
            >
              The Wood <br /> 
              <span className="italic font-light text-white/20 lowercase serif">Atelier</span>
            </motion.h2>

            <div className="flex items-start gap-4">
              <Ruler size={18} className="text-[#C29958] mt-1 shrink-0 opacity-40" />
              <p className="text-white text-lg md:text-xl max-w-md leading-relaxed font-light italic">
                Translating architectural gravity into sculptural timber forms.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end gap-12 w-full lg:w-auto">
            
            <motion.button

            
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
           onClick={() => window.location.href = '/contact'}
              className="group relative flex items-center gap-10 bg-[#C29958] px-10 py-6 rounded-none transition-all duration-700 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              <span className="relative z-10 text-[11px] text-[#0A0E0C] uppercase font-black tracking-[0.4em]">
                Secure a Commission
              </span>
              <ArrowRight size={20} className="relative z-10 text-[#0A0E0C] group-hover:translate-x-3 transition-transform duration-500" />
              <div className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
            </motion.button>

            <div className="grid grid-cols-2 gap-x-12 gap-y-6 w-full lg:w-auto">
               <DetailItem label="Structural" value="Solid Walnut Core" />
               <DetailItem label="Joinery" value="Dovetail / Tenon" />
               <DetailItem label="Availability" value="Limited Q3 2026" />
               <DetailItem label="Finish" value="Natural Resin" />
            </div>
          </div>
        </div>
      </div>

      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-screen"
        style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/wood-pattern.png')` }}
      />
    </section>
  );
};

const DetailItem = ({ label, value }) => (
  <div className="border-b border-white/5 pb-2 group cursor-default">
    <p className="text-[8px] uppercase text-[#C29958] tracking-widest mb-1 font-bold group-hover:translate-x-1 transition-transform">{label}</p>
    <p className="text-[10px] text-white/60 uppercase tracking-tighter whitespace-nowrap">{value}</p>
  </div>
);

export default WorkCTA;