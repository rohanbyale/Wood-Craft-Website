import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, Info } from 'lucide-react';

const WOOD_TYPES = [
  {
    id: 'walnut',
    name: 'American Walnut',
    price: '$3,450',
    color: '#4B3621',
    description: 'Deep, rich chocolate tones with a straight, fine grain. Known for its exceptional strength and luxury appeal.',
    image: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=1200'
  },
  {
    id: 'oak',
    name: 'White Oak',
    price: '$2,900',
    color: '#D2B48C',
    description: 'Light, neutral, and incredibly versatile. Features a beautiful "tiger-stripe" grain pattern when quartersawn.',
    image: 'https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=1200'
  },
  {
    id: 'teak',
    name: 'Reclaimed Teak',
    price: '$4,100',
    color: '#8B5A2B',
    description: 'Sustainably sourced from heritage structures. Naturally water-resistant with a golden-brown weathered character.',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1200'
  },
  {
    id: 'ebony',
    name: 'Dark Ebony',
    price: '$5,800',
    color: '#1A1A1A',
    description: 'The pinnacle of rarity. A dense, black timber with subtle grey streaks, polished to a mirror-like obsidian finish.',
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1200'
  }
];

const WoodConfigurator = () => {
  const [selected, setSelected] = useState(WOOD_TYPES[0]);

  return (
    <div className="min-h-screen bg-[#FDFCF9] flex items-center justify-center py-12 md:py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-12 lg:gap-24">
          
          <div className="w-full lg:w-1/2 relative aspect-square group max-w-[500px] lg:max-w-none mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full relative z-10"
              >
                <img 
                  src={selected.image} 
                  alt={selected.name}
                  className="w-full h-full object-cover rounded-[30px] md:rounded-[40px] shadow-2xl border border-[#1B2620]/5"
                />
              </motion.div>
            </AnimatePresence>
            
            <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-24 h-24 md:w-32 md:h-32 bg-[#C29958]/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-48 h-48 md:w-64 md:h-64 bg-[#1B2620]/5 rounded-full blur-3xl" />
          </div>

          <div className="w-full lg:w-1/2 space-y-8 md:space-y-10">
            <header className="space-y-3 md:space-y-4">
              <motion.span 
                key={`tag-${selected.id}`}
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="inline-block px-3 py-1 md:px-4 md:py-1 rounded-full border border-[#C29958] text-[#C29958] text-[9px] md:text-[10px] font-bold uppercase tracking-widest"
              >
                Bespoke Selection
              </motion.span>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={selected.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="three text-4xl sm:text-5xl md:text-6xl text-[#1B2620] leading-none mb-2">
                    {selected.name}
                  </h1>
                  <p className="one text-2xl md:text-3xl text-[#C29958] italic">{selected.price}</p>
                </motion.div>
              </AnimatePresence>
            </header>

            <div className="space-y-4 md:space-y-6">
              <h3 className="two text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-400 flex items-center gap-2">
                Available Species <Info size={14} />
              </h3>
              
              <div className="grid grid-cols-4 gap-3 md:gap-4">
                {WOOD_TYPES.map((wood) => (
                  <button
                    key={wood.id}
                    onClick={() => setSelected(wood)}
                    className="group relative flex flex-col items-center gap-2 md:gap-3 focus:outline-none"
                  >
                    <div 
                      className={`w-full aspect-square rounded-xl md:rounded-2xl transition-all duration-500 relative overflow-hidden flex items-center justify-center ${
                        selected.id === wood.id ? 'scale-105 shadow-xl ring-2 ring-[#C29958] ring-offset-2 md:ring-offset-4' : 'opacity-60 grayscale hover:grayscale-0 hover:opacity-100'
                      }`}
                      style={{ backgroundColor: wood.color }}
                    >
                      {selected.id === wood.id && (
                        <motion.div layoutId="check" className="bg-white/20 p-1.5 md:p-2 rounded-full backdrop-blur-sm">
                          <Check className="text-white" size={16} md:size={20} />
                        </motion.div>
                      )}
                    </div>
                    <span className={`one text-[9px] md:text-[10px] uppercase tracking-tighter transition-colors ${selected.id === wood.id ? 'text-[#1B2620]' : 'text-gray-400'}`}>
                      {wood.id}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <motion.p 
              key={`desc-${selected.id}`}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="two text-gray-500 leading-relaxed text-base md:text-lg italic"
            >
              "{selected.description}"
            </motion.p>

          <div className="pt-4 md:pt-6">
  <button 
    onClick={() => window.location.href = '/contact'} 
    className="w-full bg-[#1B2620] text-white py-4 md:py-5 rounded-full three text-lg md:text-xl uppercase tracking-widest hover:bg-[#C29958] transition-all duration-500 flex items-center justify-center gap-3 md:gap-4 group cursor-pointer"
  >
    Reserve Timber 
    <ArrowRight className="group-hover:translate-x-2 transition-transform" />
  </button>
</div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WoodConfigurator;