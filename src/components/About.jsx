import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowDownRight, Fingerprint } from 'lucide-react';

const StudioHero = () => {
  const luxuryEase = [0.19, 1, 0.22, 1];
  const { scrollY } = useScroll();
  
  const smoothY = useSpring(scrollY, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const imageY = useTransform(smoothY, [0, 1000], ["0%", "15%"]);
  const textX = useTransform(smoothY, [0, 1000], ["0%", "10%"]);
  const scrollProgress = useTransform(smoothY, [0, 1000], [0, 1]);

  return (
    <section className="relative min-h-screen lg:h-[110vh] w-full bg-[#0D110F] flex flex-col lg:flex-row overflow-hidden select-none">
      
      <div className="relative w-full lg:w-[48%] h-[50vh] sm:h-[60vh] lg:h-full overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5">
        <motion.div 
          initial={{ clipPath: "inset(0% 0% 100% 0%)" }} // Mobile: clip from bottom
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 1.8, ease: luxuryEase }}
          className="relative w-full h-full"
        >
          <div className="absolute inset-0 z-20 opacity-[0.25] pointer-events-none mix-blend-soft-light bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0D110F] via-transparent to-transparent opacity-60 lg:opacity-40" />
          
          <motion.img 
            style={{ y: imageY }}
            className="w-full h-full object-cover grayscale contrast-[1.1] will-change-transform scale-110"
            src="https://images.pexels.com/photos/8820189/pexels-photo-8820189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Master Artisan"
          />

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute top-8 left-8 lg:top-12 lg:left-12 z-30"
          >
            <div className="flex flex-col gap-1">
              <span className="text-[#C29958] text-[9px] lg:text-[10px] tracking-[0.3em] font-bold">CORE COLLECTION</span>
              <span className="text-white/40 text-[8px] lg:text-[9px] tracking-[0.2em]">VOL. 2026 / 04</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="w-full lg:w-[52%] flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-12 lg:py-20 bg-[#FDFCF9] relative">
        <div className="max-w-xl mx-auto lg:mx-0">
          
          <div className="flex items-center gap-4 mb-6 lg:mb-8">
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="w-8 lg:w-12 h-[1px] bg-[#C29958] origin-left"
            />
            <span className="text-[#C29958] text-[9px] lg:text-[10px] uppercase tracking-[0.4em] lg:tracking-[0.6em] font-black">
              The Wood Atelier
            </span>
          </div>

          <div className="mb-8 lg:mb-12">
            <div className="overflow-hidden">
              <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.5, duration: 1.2, ease: luxuryEase }}
                className="three text-7xl sm:text-8xl md:text-9xl lg:text-[9vw] text-[#0D110F] leading-[0.85] font-serif uppercase  lg:tracking-normal"
              >
                Silent
              </motion.h1>
            </div>
            <div className="overflow-hidden mt-1 lg:mt-2">
              <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.7, duration: 1.2, ease: luxuryEase }}
                className="text-7xl sm:text-8xl md:text-9xl lg:text-[9vw] italic three text-[#C29958] leading-[0.85] font-serif lowercase tracking-normal ml-[10%] lg:ml-[15%]"
              >
                Atelier
              </motion.h1>
            </div>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1, ease: luxuryEase }}
            className="text-[#0D110F]/80 text-lg sm:text-xl lg:text-2xl leading-relaxed italic max-w-md mb-10 lg:mb-16"
          >
            "We don't carve wood. We simply reveal the <span className="text-[#C29958] font-serif underline decoration-1 underline-offset-4 lg:underline-offset-8">sculpture</span> hiding inside."
          </motion.p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 lg:gap-12">
            <motion.button
              onClick={() => window.location.href = '/work'} 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto flex items-center justify-between sm:justify-start gap-6 bg-[#0D110F] text-white px-8 py-5 rounded-full overflow-hidden relative group"
            >
              <span className="relative z-10 text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.2em]">Explore Works</span>
              <ArrowDownRight size={18} className="relative z-10 group-hover:rotate-45 transition-transform duration-500" />
              <div className="absolute inset-0 bg-[#C29958] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
            </motion.button>

            <div className="flex items-center gap-3 text-[#0D110F]/40">
              <Fingerprint size={20} className="text-[#C29958]" />
              <span className="text-[9px] lg:text-[10px] uppercase tracking-widest leading-tight">Unique <br className="hidden sm:block"/> Grain Spec</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 hidden sm:flex flex-col items-center gap-4 z-40">
        <span className="text-[8px] lg:text-[9px] rotate-90 text-[#C29958] font-bold tracking-widest mb-4">SCROLL</span>
        <div className="w-[1px] h-24 lg:h-32 bg-[#0D110F]/10 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-full bg-[#C29958] origin-top will-change-transform"
            style={{ scaleY: scrollProgress }}
          />
        </div>
        <span className="text-[9px] text-[#0D110F]/40 font-bold">01</span>
      </div>

      <motion.div 
        style={{ x: textX }}
        className="absolute bottom-[-1%] right-[-1%] pointer-events-none opacity-[0.02] lg:opacity-[0.03] select-none hidden md:block will-change-transform"
      >
        <span className="text-[20vw] font-serif uppercase text-[#0D110F] leading-none">
          MCMXCIV
        </span>
      </motion.div>
    </section>
  );
};

export default StudioHero;