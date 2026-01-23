import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const WorkHero = () => {
  const { scrollY } = useScroll();

  const smoothY = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const videoY = useTransform(smoothY, [0, 1000], [0, 350]);
  
  const contentY = useTransform(smoothY, [0, 1000], [0, -150]);
  
  const opacity = useTransform(smoothY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#1B2620]">
      
      <motion.div 
        style={{ y: videoY }} 
        className="absolute inset-0 z-0 will-change-transform"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B2620]/80 via-[#1B2620]/40 to-[#1B2620] z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover grayscale-[40%] brightness-[0.5] scale-125" // Increased scale for parallax safety
        >
          <source src="https://www.pexels.com/download/video/7578540/" type="video/mp4" />
        </video>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-6 md:inset-12 border border-white/10 z-20 pointer-events-none" 
      />

      <motion.div 
        style={{ y: contentY, opacity }}
        className="relative z-30 h-full container mx-auto px-10 flex flex-col justify-center will-change-transform"
      >
        <div className="max-w-7xl w-full">
          
          <div className="overflow-hidden mb-6">
            <motion.div 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4"
            >
              <span className="one text-[#C29958] text-[10px] uppercase tracking-[0.8em] font-black">
                The Master Archive
              </span>
            </motion.div>
          </div>

          <h1 className="three text-7xl md:text-[12vw] text-white uppercase leading-[0.8] tracking-normal">
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              Design
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="block italic font-light text-[#C29958] serif lowercase pl-[0.5em] md:pl-[1em]"
            >
              Philosophy
            </motion.span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 mt-16 items-end gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 1, duration: 1.5 }}
              className="md:col-span-5"
            >
              <p className="two text-white text-sm md:text-base leading-relaxed font-light uppercase tracking-widest">
                Hand-sculpted in our London workshop. <br />
                A fusion of 18th-century joinery.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="md:col-span-7 flex flex-col md:items-end justify-end"
            >
              <div className="flex items-baseline gap-2">
                <span className="one text-white/20 text-xs uppercase tracking-widest mb-2">Edition</span>
                <span className="three text-[#C29958] text-8xl leading-none">24</span>
              </div>
              <div className="h-[1px] w-32 bg-[#C29958]/40 mt-4 mb-2" />
              <span className="one text-white/30 text-[9px] uppercase tracking-[0.4em]">
                Limited Production / Vol. I
              </span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="absolute bottom-16 right-10 md:right-20 flex flex-col items-center gap-6 z-40"
      >
        <div className="h-24 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-[#C29958] relative">
          <motion.div 
            animate={{ y: [0, 96, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#C29958] rounded-full shadow-[0_0_10px_#C29958]"
          />
        </div>
      </motion.div>

      <div className="absolute inset-0 pointer-events-none opacity-[0.04] z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
};

export default WorkHero;