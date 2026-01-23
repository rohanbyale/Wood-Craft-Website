import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Plus, X, ArrowRight } from 'lucide-react';

const hotspots = [
  { id: 1, top: '40%', left: '15%', title: 'Executive Walnut Door', desc: 'Solid core walnut with integrated brass handle.', link: '#' },
  { id: 2, top: '65%', left: '55%', title: 'Live-Edge Oak Table', desc: 'Hand-sanded 3-inch thick oak slab.', link: '#' },
  { id: 3, top: '30%', left: '80%', title: 'Acoustic Slat Panels', desc: 'Premium teak wood slats for sound dampening.', link: '#' },
];

const Lookbook = () => {
  const [activeSpot, setActiveSpot] = useState(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const svgY = useTransform(scrollYProgress, [0.3, 0.45], [0, -200]);
  const svgOpacity = useTransform(scrollYProgress, [0.3, 0.4], [1, 0]);

  const imageOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const imageScale = useTransform(scrollYProgress, [0.25, 0.5], [0.9, 1]);
  const imageY = useTransform(scrollYProgress, [0.25, 0.5], [100, 0]);

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-[#1B2620]">
      
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
        
        <motion.div 
          style={{ y: svgY, opacity: svgOpacity }}
          className="absolute inset-0 z-50 flex flex-col items-center justify-center pointer-events-none"
        >
          <motion.svg 
            viewBox="0 0 200 200" 
            className="w-48 md:w-64 h-auto stroke-[#C29958] fill-none"
          >
            <motion.path 
              style={{ pathLength }}
              strokeWidth="1.5"
              d="M30 90 L100 30 L170 90 M50 90 V160 H150 V90" 
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <motion.path 
              style={{ pathLength }}
              strokeWidth="1"
              d="M40 130 Q100 120 160 130 M50 145 Q100 135 150 145" 
              opacity="0.5"
            />
            <text x="50%" y="190" textAnchor="middle" className="fill-[#C29958] text-[8px] uppercase tracking-[0.5em] font-bold">
              Architecting Spaces
            </text>
          </motion.svg>
        </motion.div>

    
        <motion.div 
          className="container mx-auto px-6 relative z-10"
          style={{ opacity: imageOpacity, scale: imageScale, y: imageY }}
        >
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-xl text-left">
              <span className="text-[#C29958] font-bold tracking-[0.3em] text-xs uppercase block mb-4">
                Interactive Showcase
              </span>
              <h2 className="three text-4xl md:text-6xl font-serif text-white leading-tight">
                The <span className="three italic text-[#C29958]">Art</span> of the Interior
              </h2>
            </div>
          </div>

          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-[#2a362f]">
            <img 
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop" 
              alt="Luxury Interior" 
              className="w-full h-[50vh] md:h-[70vh] object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-black/10" />

            {hotspots.map((spot) => (
              <div key={spot.id} className="absolute" style={{ top: spot.top, left: spot.left }}>
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{ boxShadow: ["0px 0px 0px 0px rgba(194,153,88,0.6)", "0px 0px 0px 20px rgba(194,153,88,0)"] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  onClick={() => setActiveSpot(activeSpot === spot.id ? null : spot.id)}
                  className="relative z-20 w-10 h-10 bg-[#C29958] text-white rounded-full flex items-center justify-center border-2 border-white/30 backdrop-blur-sm"
                >
                  {activeSpot === spot.id ? <X size={20} /> : <Plus size={20} />}
                </motion.button>

                <AnimatePresence>
                  {activeSpot === spot.id && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, x: 20 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.8, x: 20 }}
                      className="absolute z-30 ml-6 top-1/2 -translate-y-1/2 left-full w-64 p-6 bg-white rounded-2xl shadow-xl"
                    >
                      <h4 className="font-serif text-[#1B2620] text-xl mb-1">{spot.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed mb-4">{spot.desc}</p>
                      <button className="flex items-center gap-2 text-[#C29958] font-bold text-[10px] uppercase tracking-widest">
                        Details <ArrowRight size={14} />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          style={{ opacity: imageOpacity }}
          className="mt-12 text-center"
        >
          <p className="text-[#C29958]/40 font-serif italic text-xl">
            "Architecture is the art of how we stand in the world."
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Lookbook;