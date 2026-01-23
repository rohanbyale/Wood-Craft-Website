import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Quote } from 'lucide-react';

const CraftsmansNote = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const svgY = useTransform(scrollYProgress, [0.4, 0.8], [0, -500]); // Slides up
  const svgOpacity = useTransform(scrollYProgress, [0, 0.2, 0.6, 0.8], [0, 1, 1, 0]);

  const contentOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
  const contentScale = useTransform(scrollYProgress, [0.5, 0.8], [0.95, 1]);

  return (
    <div ref={containerRef} className="relative h-[250vh] bg-[#1B2620]">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        <motion.div 
          style={{ y: svgY, opacity: svgOpacity }}
          className="absolute inset-0 z-50 flex flex-col items-center justify-center pointer-events-none"
        >
          <svg viewBox="0 0 400 200" className="w-full max-w-2xl stroke-[#C29958] fill-none px-10">
            <motion.path 
              style={{ pathLength }}
              strokeWidth="1"
              d="M10,100 Q100,20 200,100 T390,100"
              opacity="0.6"
            />
            <motion.path 
              style={{ pathLength }}
              strokeWidth="0.5"
              d="M20,120 Q110,40 210,120 T380,120"
              opacity="0.3"
            />
            <motion.path 
              style={{ pathLength }}
              strokeWidth="1.5"
              d="M180,140 L220,140 L210,60 L190,60 Z"
            />
            <text x="50%" y="170" textAnchor="middle" className="fill-[#C29958] text-[6px] uppercase tracking-[1em] font-light">
              The Artisan's Mark
            </text>
          </svg>
        </motion.div>

        <motion.div 
          style={{ opacity: contentOpacity, scale: contentScale }}
          className="container mx-auto px-6 md:px-12 relative z-10"
        >
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
            
            <div className="w-full lg:w-5/12 relative">
              <motion.div className="relative z-10 aspect-square rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/8820189/pexels-photo-8820189.jpeg" 
                  alt="Artisan woodworking" 
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B2620]/40 to-transparent" />
              </motion.div>
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#C29958]/30 rounded-tl-xl -z-0" />
            </div>

            <div className="w-full lg:w-7/12">
              <header className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Quote className="text-[#C29958] opacity-50" size={20} />
                  <span className="one text-[#C29958] text-[10px] uppercase tracking-[0.5em] font-black">
                    Artisan Ethos
                  </span>
                </div>
                <h2 className="three text-4xl lg:text-5xl text-white uppercase leading-tight">
                  Built for <span className="italic font-light text-[#C29958] serif">Longevity</span>
                </h2>
              </header>

              <div className="space-y-6">
                <p className="two text-lg text-white/80 leading-relaxed font-light">
                  "The Heritage No. 01 was born from a desire to return to the basics. We chose the difficult path: <span className="text-white border-b border-[#C29958]/30 italic">Hand-cut Dovetail joints</span>."
                </p>
                <p className="two text-white/40 leading-relaxed italic text-sm">
                  Unlike modern fasteners, these interlocking wedges grow stronger as the wood breathes over decades.
                </p>

                <div className="pt-6 flex items-center gap-6 border-t border-white/5">
                  <div>
                    <p className="one text-xl text-white leading-none mb-1">Elias Thorne</p>
                    <p className="one text-[#C29958] text-[8px] uppercase tracking-widest">Master Carpenter</p>
                  </div>
                  <div className="h-12 w-32 relative opacity-80">
                    <div 
                      className="w-full h-full bg-[#C29958]" 
                      style={{
                        WebkitMaskImage: `url("https://upload.wikimedia.org/wikipedia/commons/e/e0/Signature_of_John_Hancock.svg")`,
                        maskImage: `url("https://upload.wikimedia.org/wikipedia/commons/e/e0/Signature_of_John_Hancock.svg")`,
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskSize: "contain",
                        maskSize: "contain"
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.02] -skew-x-12 translate-x-1/2" />
      </div>
    </div>
  );
};

export default CraftsmansNote;