import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const InquiryHero = () => {
  const { scrollY } = useScroll();
  
  const videoY = useTransform(scrollY, [0, 500], [0, 150]);
  const textY = useTransform(scrollY, [0, 500], [0, -50]);

  const sentence = "Let's build something for the next century.";
  const words = sentence.split(" ");

  const containerVars = {
    animate: {
      transition: { staggerChildren: 0.08, delayChildren: 0.3 },
    },
  };

  const wordVars = {
    initial: { opacity: 0, y: 30, rotateX: 45 },
    animate: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <section className="relative w-full h-auto min-h-screen lg:h-screen flex flex-col lg:flex-row bg-[#FDFCF9] overflow-hidden">
      
      <div className="relative w-full lg:w-[45%] h-[40vh] md:h-[50vh] lg:h-full overflow-hidden">
        <motion.div 
          style={{ y: videoY }}
          className="relative w-full h-[120%] -top-[10%]"
        >
          <video 
            autoPlay muted loop playsInline
            className="w-full h-full object-cover grayscale brightness-[0.6] contrast-[1.1]"
          >
            <source src="https://www.pexels.com/download/video/5823678/" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FDFCF9] lg:bg-gradient-to-r lg:from-[#1B2620]/20 lg:to-[#FDFCF9] opacity-100" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-6 md:bottom-12 md:left-12 z-20 flex items-center gap-4"
        >
          <div className="w-6 md:w-8 h-[1px] bg-white/30" />
          <span className="text-white/60 text-[7px] md:text-[8px] uppercase tracking-[0.4em] md:tracking-[0.6em] font-black">
            Atelier No. 01 / Black Forest
          </span>
        </motion.div>
      </div>

      <div className="w-full lg:w-[55%] flex flex-col justify-center px-6 md:px-16 lg:px-24 py-12 md:py-20 relative bg-[#FDFCF9]">
        
        <motion.div
          style={{ y: textY }}
          variants={containerVars}
          initial="initial"
          animate="animate"
          className="max-w-2xl relative"
        >
          <div className="flex items-center gap-4 mb-6 md:mb-10 overflow-hidden">
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="w-8 md:w-12 h-[1px] bg-[#C29958]" 
            />
            <motion.span 
              variants={wordVars}
              className="text-[#C29958] text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.5em] font-bold"
            >
              Inquiry Management // 2026
            </motion.span>
          </div>

          <h1 className="text-4xl three md:text-6xl lg:text-[5.5rem] text-[#1B2620] leading-[1.1] lg:leading-[0.95] uppercase mb-8 md:mb-12 perspective-1000 py-2">
            {words.map((word, i) => (
              <span key={i} className="inline-block relative mr-2 md:mr-5">
                <motion.span 
                  variants={wordVars}
                  className="inline-block"
                >
                  {word === "century." ? (
                    <span className="italic font-light text-[#C29958] lowercase font-serif pb-1">
                      {word}
                    </span>
                  ) : word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div 
            variants={wordVars}
            className="border-l border-[#1B2620]/10 pl-6 md:pl-8 ml-1"
          >
            <p className="text-gray-400 text-base md:text-xl italic leading-relaxed max-w-sm">
              "We don't just shape timber; we archive time. Every commission starts with a dialogue that outlasts its makers."
            </p>
          </motion.div>
        </motion.div>

        <div className="absolute top-8 right-8 md:top-12 md:right-12 hidden sm:block group">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path 
                id="circlePath" 
                d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" 
                fill="transparent" 
              />
              <text className="text-[7.5px] uppercase tracking-[4px] font-bold fill-[#C29958]">
                <textPath xlinkHref="#circlePath">
                  The Hand — The Eye — The Heart —
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-1 md:w-1.5 h-1 md:h-1.5 bg-[#C29958] rounded-full shadow-[0_0_10px_rgba(194,153,88,0.4)]" 
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute right-0 top-0 h-full w-[1px] bg-black/5 hidden lg:block" />
    </section>
  );
};

export default InquiryHero;