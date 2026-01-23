import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ArrowUpRight, Award } from 'lucide-react';

const EXHIBITIONS = [
  {
    year: "2025",
    event: "Salone del Mobile // Milan",
    location: "Italy",
    description: "Featured in the 'Mastery of Raw Form' pavilion. Debut of the Sculptural Walnut Console.",
    images: [
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=800",
      "https://img.freepik.com/premium-photo/winning-trophy-black-background_441362-26657.jpg?semt=ais_hybrid&w=740&q=80"
    ]
  },
  {
    year: "2024",
    event: "PAD London // Mayfair",
    location: "United Kingdom",
    description: "Private exhibition focusing on carbon-dated ancient cedar joinery.",
    images: [
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800",
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800"
    ]
  },
  {
    year: "2022",
    event: "Design Miami // Basel",
    location: "Switzerland",
    description: "Collaborative installation exploring digital precision and manual labor.",
    images: [
      "https://media.istockphoto.com/id/1285145656/photo/golden-trophy-and-book-learning-and-achievement-concept.jpg?s=612x612&w=0&k=20&c=abz-osuE0jGGsLYlFsgGRAUnJLwLMJbPhJIbpmRIlyQ="
    ]
  }
];

const Accolades = () => {
  const [selectedIdx, setSelectedIdx] = useState(null);
  const luxuryEase = [0.19, 1, 0.22, 1];

  return (
    <section className="bg-[#FDFCF9] py-20 lg:py-24 border-t border-black/5 overflow-hidden">
      <div className="container mx-auto px-6 relative">
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-4"
            >
              <Award size={14} className="text-[#C29958]" />
              <span className="text-[#C29958] tracking-[0.6em] uppercase text-[9px] font-black">
                Archive & Recognition
              </span>
            </motion.div>
            <h2 className="text-5xl lg:text-7xl text-[#1B2620] font-serif uppercase leading-[1] three">
              Selected <br /> 
              <span className="italic text-[#C29958] lowercase ml-[8%]">Exhibitions</span>
            </h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            className="text-[#1B2620] italic text-lg max-w-xs leading-tight"
          >
            "A chronology of form."
          </motion.p>
        </div>

        <div className="relative border-t border-[#1B2620]/10">
          {EXHIBITIONS.map((item, idx) => (
            <div key={idx} className="border-b border-[#1B2620]/10 group relative">
              
              <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[10vw] font-serif text-[#1B2620]/[0.02] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 uppercase">
                {item.year}
              </div>

              <button 
                onClick={() => setSelectedIdx(selectedIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between py-8 text-left relative z-10"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-16">
                  <span className="text-[#1B2620] font-serif text-xl">{item.year}</span>
                  <div className="flex flex-col">
                    <span className="text-2xl two lg:text-4xl text-[#1B2620] font-serif uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                      {item.event}
                    </span>
                    <span className="text-[9px] uppercase tracking-[0.3em] text-[#1B2620]/40 mt-1 ml-1">
                      {item.location}
                    </span>
                  </div>
                </div>
                
                <div className={`w-10 h-10 rounded-full border border-[#1B2620]/10 flex items-center justify-center transition-all duration-700 ${selectedIdx === idx ? 'bg-[#1B2620] border-[#1B2620]' : 'group-hover:rotate-90'}`}>
                  <Plus size={18} className={`transition-colors duration-700 ${selectedIdx === idx ? 'text-white rotate-45' : 'text-[#1B2620]'}`} />
                </div>
              </button>

              <AnimatePresence>
                {selectedIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.6, ease: luxuryEase }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      <div className="lg:col-span-5 lg:pl-24">
                        <motion.p 
                          initial={{ y: 15, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="text-[#1B2620]/70 text-base leading-relaxed italic mb-6 border-l border-[#C29958] pl-4"
                        >
                          {item.description}
                        </motion.p>
                        <motion.button 
                          className="group/btn flex items-center gap-3 text-[10px] uppercase font-black tracking-widest text-[#1B2620]"
                        >
                          <span className="border-b border-[#1B2620] pb-1">Catalog</span>
                          <div className="w-6 h-6 rounded-full bg-[#C29958] flex items-center justify-center group-hover/btn:translate-x-1 transition-transform">
                            <ArrowUpRight size={12} className="text-[#FDFCF9]" />
                          </div>
                        </motion.button>
                      </div>
                      
                      <div className="lg:col-span-7 flex flex-row gap-4">
                        {item.images.map((img, i) => (
                          <motion.div
                            key={i}
                            initial={{ clipPath: "inset(100% 0% 0% 0%)", scale: 1.1 }}
                            animate={{ clipPath: "inset(0% 0% 0% 0%)", scale: 1 }}
                            transition={{ delay: i * 0.1, duration: 0.8, ease: luxuryEase }}
                            // Aspect Ratio: aspect-[4/5] to aspect-[3/2] (wider/shorter) or aspect-square
                            className="relative aspect-square w-32 md:w-48 overflow-hidden rounded-sm shadow-lg"
                          >
                            <img 
                              src={img} 
                              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                              alt="Detail"
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accolades;