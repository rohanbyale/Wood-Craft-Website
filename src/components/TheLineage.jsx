import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const MILESTONES = [
  { year: "1994", title: "The Genesis", tag: "ORIGIN", desc: "A solitary workbench in a converted barn. The first joinery was born from local oak and raw intuition." },
  // { year: "2008", title: "Guild Master", tag: "MASTERY", desc: "Achieved the 'Master Artisan' designation. Perfecting complex dovetails." },
  { year: "2018", title: "Global Studio", tag: "EXPANSION", desc: "Expanding to the European design corridor. Bridging heritage with avant-garde." },
  // { year: "2026", title: "Future Hand", tag: "VISION", desc: "Integrating algorithmic precision with ancestral hand-tooling." }
];

const TheLineage = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const xRaw = useTransform(scrollYProgress, [0, 1], ["0%", "-92%"]);
  const x = useSpring(xRaw, { stiffness: 45, damping: 25, restDelta: 0.001 });

  const backgroundColor = useTransform(scrollYProgress, [0.1, 0.3], ["#FDFCF9", "#0D110F"]);
  const textColor = useTransform(scrollYProgress, [0.1, 0.3], ["#1B2620", "#FDFCF9"]);
  const lineColor = useTransform(scrollYProgress, [0.1, 0.3], ["#1B262010", "#C2995840"]);

  return (
    <section ref={targetRef} className="relative h-[600vh] bg-[#FDFCF9]">
      <motion.div 
        style={{ backgroundColor }}
        className="sticky top-0 h-screen w-full flex items-center overflow-hidden transition-colors duration-1000"
      >
        <div className="px-6 lg:px-24 relative z-10 w-full">
          <motion.div style={{ x }} className="flex gap-[20vw] items-center whitespace-nowrap">
            
            <div className="min-w-[60vw] flex-shrink-0">
              <motion.span style={{ color: textColor }} className="text-[10px] uppercase tracking-[0.6em] font-black opacity-40 block mb-6">
                The Provenance
              </motion.span>
              <motion.h2 style={{ color: textColor }} className="text-7xl md:text-[9vw] font-serif uppercase leading-[0.8] tracking-tighter">
                Chronicles <br /> Of <span className="italic text-[#C29958]">Lineage</span>
              </motion.h2>
            </div>

            {MILESTONES.map((item, index) => (
              <div key={index} className="min-w-[400px] md:min-w-[600px] relative flex-shrink-0 h-[60vh] flex flex-col justify-center">
                
                <StableYear 
                  year={item.year} 
                  index={index} 
                  progress={scrollYProgress} 
                />

                <div className="relative z-10 pt-12">
                  <motion.div 
                    style={{ backgroundColor: lineColor }} 
                    className="absolute top-0 left-0 w-full h-[1px]" 
                  />
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <span className="text-[#C29958] font-serif text-2xl tracking-tighter">0{index + 1}</span>
                      <span className="text-[9px] uppercase tracking-[0.4em] font-black py-1 px-3 border border-[#C29958]/30 rounded-full text-[#C29958]">
                        {item.tag}
                      </span>
                    </div>
                    <motion.h3 style={{ color: textColor }} className="text-5xl md:text-7xl font-serif uppercase tracking-tight leading-none">
                      {item.title}
                    </motion.h3>
                    <motion.p style={{ color: textColor }} className="text-base md:text-xl max-w-sm whitespace-normal opacity-50 font-light italic leading-relaxed">
                      {item.desc}
                    </motion.p>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="min-w-[20vw]" />
          </motion.div>
        </div>

        <div className="absolute bottom-12 left-12 right-12 z-20">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[#C29958] text-xs uppercase tracking-[0.4em] font-bold">1994</span>
            <span className="text-[#C29958] text-xs uppercase tracking-[0.4em] font-bold">2026</span>
          </div>
          <div className="h-[2px] w-full bg-[#C29958]/10 relative">
            <motion.div 
              style={{ scaleX: scrollYProgress }} 
              className="absolute top-0 left-0 h-full bg-[#C29958] origin-left w-full" 
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const StableYear = ({ year, index, progress }) => {
  const start = 0.15 + (index * 0.18);
  const end = start + 0.25;

  const opacity = useTransform(
    progress, 
    [start, start + 0.1, end - 0.1, end], 
    [0, 0.08, 0.08, 0]
  );

  const yMove = useTransform(progress, [start, end], [50, -50]);

  return (
    <motion.div
      style={{ opacity, y: yMove }}
      className={`absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none`}
    >
      <span className="text-[35vw] font-serif italic font-black text-white/100 leading-none">
        {year}
      </span>
    </motion.div>
  );
};

export default TheLineage;