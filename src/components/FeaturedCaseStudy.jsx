import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowUpRight, Hammer, } from 'lucide-react';

const CASE_STUDY_IMAGES = [
  "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=1200", // The finished piece
  "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1200", // Raw material
  "https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=1200", 
];

const FeaturedCaseStudy = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth out the progress for the indicators
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section ref={containerRef} className="relative bg-[#1B2620] h-[400vh]">
      <div className="sticky top-0 h-screen w-full flex flex-col lg:flex-row overflow-hidden">
        
        {/* PROGRESS LINE (Visual Anchor) */}
        <div className="absolute left-0 top-0 w-1 h-full bg-white/5 z-50 hidden lg:block">
          <motion.div 
            style={{ scaleY: smoothProgress, originY: 0 }}
            className="w-full h-full bg-[#C29958] shadow-[0_0_15px_#C29958]"
          />
        </div>

        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center px-10 lg:px-24 py-20 z-20 bg-[#1B2620]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-6 mb-12">
              <span className="w-12 h-[1px] bg-[#C29958]" />
              <span className="one text-[#C29958] text-[10px] uppercase tracking-[0.5em] font-black">
                Featured Commission
              </span>
            </div>

            <h2 className="three text-6xl lg:text-[110px] text-white uppercase leading-[0.85] mb-12 tracking-normal">
              The <br /> 
              <span className="italic text-[#C29958] font-light serif lowercase">Elysian</span> 
              <br /> Monolith
            </h2>

            <div className="max-w-md">
              <p className="two text-white/50 text-base md:text-lg leading-relaxed mb-12 border-l border-[#C29958]/30 pl-6 italic">
                "A seamless synthesis of nature and geometry, carved from a single 400-year-old Black Walnut trunk."
              </p>
              
              <div className="grid grid-cols-2 gap-12 mb-16">
                {[
                  { label: "Craft Time", val: "420 Hours" },
                  { label: "Origin", val: "Black Walnut" }
                ].map((stat, i) => (
                  <div key={i}>
                    <p className="one text-[9px] uppercase text-white/30 tracking-[0.3em] mb-2">{stat.label}</p>
                    <p className="three text-2xl text-white uppercase">{stat.val}</p>
                  </div>
                ))}
              </div>

              <button
              onClick={() => window.location.href = '/contact'}
              className="group relative px-12 py-6 rounded-full overflow-hidden transition-all duration-500 border border-white/10 hover:border-[#C29958]">
                <span className="relative z-10 one text-[10px] uppercase tracking-[0.3em] font-bold text-white flex items-center gap-4">
                  Explore Craftsmanship <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                </span>
                <div className="absolute inset-0 bg-[#C29958] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]" />
              </button>
            </div>
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2 h-full relative bg-[#F4F1EA]">
          {CASE_STUDY_IMAGES.map((img, index) => (
            <ScrollImage 
              key={index} 
              src={img} 
              index={index} 
              progress={scrollYProgress} 
              total={CASE_STUDY_IMAGES.length}
            />
          ))}
          
          <div className="absolute inset-10 border border-white/10 pointer-events-none z-40" />
        </div>

      </div>
    </section>
  );
};

const ScrollImage = ({ src, index, progress, total }) => {
  const start = index / total;
  const end = (index + 1) / total;
  
  const clipProgress = useTransform(progress, [start, start + 0.2], ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]);
  const scale = useTransform(progress, [start, end], [1.2, 1]);
  const opacity = useTransform(progress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);

  return (
    <motion.div
      style={{ 
        clipPath: clipProgress,
        opacity,
        zIndex: total - index 
      }}
      className="absolute inset-0 h-full w-full overflow-hidden will-change-transform"
    >
      <motion.img
        style={{ scale }}
        src={src}
        alt="Build process"
        className="h-full w-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-1000"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1B2620] via-transparent to-black/20" />
      
      <div className="absolute bottom-12 right-12 z-50">
        <span className="three text-[#C29958] text-6xl opacity-40">0{index + 1}</span>
      </div>
    </motion.div>
  );
};

export default FeaturedCaseStudy;