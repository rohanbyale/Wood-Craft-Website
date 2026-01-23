import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, MessageCircle } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  
  const introOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const introScale = useTransform(scrollY, [0, 400], [1, 0.9]); // Reduced scale-down for a smoother transition
  
  const heroOpacity = useTransform(scrollY, [200, 500], [0, 1]);
  const contentY = useTransform(scrollY, [200, 600], [40, 0]);

  const handleRedirect = (url, isNewTab = false) => {
    if (isNewTab) window.open(url, '_blank');
    else window.location.href = url;
  };

  return (
    <div className="relative bg-black">
      <motion.div 
        style={{ opacity: introOpacity, scale: introScale }}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FDFCF9] pointer-events-none"
      >
        <div className="flex flex-col items-center w-full max-w-6xl text-center px-6">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
             <span className="text-[#C29958] text-xs md:text-sm uppercase tracking-[1em] font-black">Architecture of Wood</span>
             <h2 className="text-[#1B2620] text-4xl md:text-6xl font-serif mt-4 italic">The Blueprint Phase</h2>
          </motion.div>

          <motion.svg 
            viewBox="0 0 800 250" 
            className="w-full h-auto mb-16 stroke-[#1B2620] fill-none drop-shadow-sm"
          >
            <motion.path 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.5, delay: 0.2 }}
              strokeWidth="1.2"
              d="M50,120 h200 v12 h-200z M80,132 v50 M220,132 v50 M120,132 v25 M180,132 v25" 
            />
            
            <motion.path 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.5, delay: 0.6 }}
              strokeWidth="1.2"
              d="M360,182 v-60 h50 v60 M360,145 h50 M375,122 v-35 q0,-8 10,-8 h10 q10,0 10,8 v35" 
            />

            <motion.path 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.5, delay: 1 }}
              strokeWidth="1.2"
              d="M580,150 l150,-60 m-120,48 l15,-30 m30,-12 l15,-30" 
            />

            <motion.line 
              initial={{ x1: "0%", x2: "0%", opacity: 0 }}
              animate={{ x2: "100%", opacity: 1 }}
              transition={{ duration: 3, ease: "easeInOut" }}
              x1="0" y1="230" x2="800" y2="230" 
              stroke="#C29958" strokeWidth="1" strokeDasharray="8 4" 
            />
          </motion.svg>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="one text-[#C29958] text-xs uppercase tracking-[0.8em] font-bold animate-pulse"
          >
            Scroll to Manifest
          </motion.p>
        </div>
      </motion.div>

      <div className="relative h-[250vh]">
        <motion.section 
          style={{ opacity: heroOpacity }}
          className="sticky top-0 h-screen w-full overflow-hidden bg-black flex items-center"
        >
          <div className="absolute inset-0 z-0">
            <video autoPlay muted loop playsInline className="h-full w-full object-cover opacity-50">
              <source src="furniture.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
          </div>

          <motion.div 
            style={{ y: contentY }}
            className="relative z-10 container mx-auto px-8 md:px-16"
          >
            <div className="max-w-4xl">
              <h1 className="three uppercase text-white text-5xl md:text-8xl font-serif leading-tight mb-6">
                Crafting Nature into <br />
                <span className="text-[#C29958] italic">Timeless Spaces</span>
              </h1>
              <div className="h-1 w-32 bg-[#C29958] mb-8" />
              
              <div className="flex flex-wrap gap-6">
                <button 
                  onClick={() => handleRedirect('/product')}
                  className="group relative bg-[#C29958] text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm flex items-center gap-3 overflow-hidden"
                >
                  <span className="relative z-10">Explore</span>
                  <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" />
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
                
                <button 
                  onClick={() => handleRedirect('/work')}
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm flex items-center gap-3"
                >
                  <Play size={12} fill="currentColor" /> Watch Process
                </button>
              </div>
            </div>
          </motion.div>

          <div className="absolute top-12 right-12 hidden md:block">
            <div className="text-right border-r border-[#C29958] pr-4">
              <p className="text-white/40 text-[10px] uppercase tracking-widest">Est. 1994</p>
              <p className="text-white text-xs uppercase tracking-[0.3em]">Hemsbach, Germany</p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="h-full bg-[#C29958]"
            />
          </div>
        </motion.section>
      </div>

      <motion.div 
        onClick={() => handleRedirect('https://wa.me/yournumber', true)}
        className="fixed bottom-12 right-12 z-[110] cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="bg-[#C29958] p-5 rounded-full shadow-2xl relative">
          <MessageCircle className="text-white" size={32} />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-white/20"></span>
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;