import React from 'react';
import { motion } from 'framer-motion';

const StudioPulseTicker = () => {
  const tickerItems = [
    { label: "Studio Capacity", value: "85% Committed", status: "limited" },
    { label: "Currently Sourcing", value: "Steirische Alpen, Austria", status: "active" },
    { label: "Next Commission Slot", value: "April 2026", status: "limited" },
    { label: "Atelier Temp", value: "18.5°C", status: "active" },
    { label: "Wood Seasoning", value: "Batch #092 (Walnut)", status: "active" },
  ];

  const duplicatedItems = [...tickerItems, ...tickerItems];

  return (
    <div className="relative w-full bg-[#1B2620] border-y border-white/5 py-4 overflow-hidden flex items-center">
      
      <motion.div 
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          duration: 35, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        {duplicatedItems.map((item, idx) => (
          <div key={idx} className="flex items-center px-12 gap-5 border-r border-white/10">
            <div className={`w-1.5 h-1.5 rounded-full ${item.status === 'limited' ? 'bg-[#C29958]' : 'bg-emerald-500'}`} 
                 style={{ boxShadow: item.status === 'limited' ? '0 0 8px #C29958' : '0 0 8px #10b981' }}
            />
            
            <div className="flex flex-col">
              <span className="one text-[7px] uppercase tracking-[0.4em] text-white/30 font-black mb-1">
                {item.label}
              </span>
              <span className=" text-[10px] text-white/90 tracking-[0.2em] uppercase font-light">
                {item.value}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
      
    
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#1B2620] to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#1B2620] to-transparent z-20 pointer-events-none" />
    </div>
  );
};

export default StudioPulseTicker;