import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Compass } from 'lucide-react';

const LOCATIONS = [
  {
    id: 'germany',
    city: 'Spessart Forest',
    country: 'Germany',
    material: 'Smoked Oak',
    coords: { x: '51%', y: '30%' },
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=800',
    details: 'Sourced from 200-year-old sustainable estates, carbon-neutral harvesting.'
  },
  {
    id: 'usa',
    city: 'Appalachian Mtns',
    country: 'USA',
    material: 'Black Walnut',
    coords: { x: '22%', y: '38%' },
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800',
    details: 'Air-dried for two winters to settle the natural internal tension of the grain.'
  },
  {
    id: 'japan',
    city: 'Hokkaido',
    country: 'Japan',
    material: 'Ancient Cedar',
    coords: { x: '88%', y: '35%' },
    image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=800',
    details: 'Salvaged from heritage temple restoration sites under strict cultural permits.'
  }
];

const ProvenanceMap = () => {
  const [activeLoc, setActiveLoc] = useState(LOCATIONS[0]);

  return (
    <section className="relative py-24 lg:py-32 bg-[#FDFCF9]">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <Compass size={14} className="text-[#C29958]" />
              <span className="one text-[#C29958] tracking-[0.4em] uppercase text-[10px] font-black">Global Sourcing</span>
            </motion.div>
            <h2 className="three text-5xl lg:text-7xl text-[#1B2620] uppercase leading-[0.9] ">
              Material <br /> <span className="italic text-[#C29958]">Provenance</span>
            </h2>
          </div>
          <p className="two text-gray-400 max-w-[280px] text-xs leading-relaxed italic border-l border-[#C29958]/30 pl-6">
            "We travel to the source to ensure every fiber tells a story of ecological respect."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-3 space-y-4 order-2 lg:order-1 relative z-10">
            {LOCATIONS.map((loc) => (
              <button
                key={loc.id}
                onMouseEnter={() => setActiveLoc(loc)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-500 border ${
                  activeLoc?.id === loc.id 
                  ? 'bg-white border-black/5 shadow-xl shadow-black/[0.02] translate-x-2' 
                  : 'bg-transparent border-transparent opacity-40 hover:opacity-100'
                }`}
              >
                <span className="one text-[8px] uppercase tracking-widest text-[#C29958] font-bold block mb-1">
                  {loc.material}
                </span>
                <h4 className="two text-xl text-[#1B2620] uppercase t">{loc.city}</h4>
                <div className={`h-[1px] bg-[#C29958] mt-4 transition-all duration-700 ${activeLoc?.id === loc.id ? 'w-full' : 'w-0'}`} />
              </button>
            ))}
          </div>

          <div className="lg:col-span-9 order-1 lg:order-2 relative">
            <div className="relative aspect-[16/9] z-0">
              
              <div className="absolute inset-0 bg-[#F4F1EA] rounded-[48px] border border-black/[0.03] shadow-inner overflow-hidden z-0">
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center p-12 opacity-[0.07]">
                  <svg viewBox="0 0 1000 500" className="w-full h-full fill-[#1B2620]">
                    <path d="M220,180 L230,170 L250,185 L270,175 L290,190 L280,220 L240,230 L210,210 Z M480,120 L520,110 L550,130 L540,170 L500,190 L470,160 Z M850,160 L890,150 L910,180 L880,210 L840,190 Z M150,250 L180,240 L200,270 L170,300 L140,280 Z M650,350 L680,340 L700,370 L670,400 L640,380 Z" />
                  </svg>
                </div>
                
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                     style={{ backgroundImage: 'radial-gradient(#1B2620 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                <div className="absolute bottom-8 right-10 text-right hidden md:block select-none">
                  <p className="one text-[9px] text-[#1B2620]/20 uppercase tracking-[0.4em] mb-1">Station: 004-Beta</p>
                  <div className="flex gap-4 justify-end">
                     <p className="one text-[8px] text-[#1B2620]/40 uppercase tracking-[0.2em]">48.46° N</p>
                     <p className="one text-[8px] text-[#1B2620]/40 uppercase tracking-[0.2em]">8.41° E</p>
                  </div>
                </div>
              </div>

              {LOCATIONS.map((loc) => (
                <div 
                  key={loc.id}
                  className="absolute z-20"
                  style={{ left: loc.coords.x, top: loc.coords.y }}
                  onMouseEnter={() => setActiveLoc(loc)}
                >
                  <div className="relative flex items-center justify-center -translate-x-1/2 -translate-y-1/2">
                    <motion.div 
                       animate={activeLoc?.id === loc.id ? { scale: [1, 2.2, 1], opacity: [0.4, 0, 0.4] } : {}}
                       transition={{ duration: 2.5, repeat: Infinity }}
                       className={`absolute w-14 h-14 bg-[#C29958] rounded-full transition-opacity duration-500 ${activeLoc?.id === loc.id ? 'opacity-30' : 'opacity-0'}`}
                    />
                    <div className={`w-3.5 h-3.5 rounded-full border-2 border-white shadow-2xl transition-all duration-500 cursor-pointer ${activeLoc?.id === loc.id ? 'bg-[#C29958]' : 'bg-[#1B2620]'}`} />
                  </div>

                  <AnimatePresence>
                    {activeLoc?.id === loc.id && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 15 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 15 }}
                        className="absolute bottom-8 left-0 -translate-x-1/2 w-72 bg-white rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.12)] z-50 pointer-events-none border border-black/[0.03] overflow-hidden"
                      >
                        <div className="relative h-36 overflow-hidden">
                          <img src={loc.image} className="w-full h-full object-cover" alt={loc.city} />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                          <div className="absolute bottom-4 left-4">
                             <span className="one text-[8px] text-white/90 tracking-widest uppercase font-bold px-2 py-1 bg-black/20 backdrop-blur-md rounded">{loc.country}</span>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-center mb-3">
                            <span className="one text-[9px] uppercase tracking-widest text-[#C29958] font-bold">Traceable Origin</span>
                            <Globe size={12} className="text-[#C29958] opacity-40" />
                          </div>
                          <p className="two text-[12px] text-[#1B2620]/70 italic leading-relaxed">
                            {loc.details}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvenanceMap;