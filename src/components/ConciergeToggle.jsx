import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CATEGORIES = [
  { id: 'commission', label: 'Private Commission', icon: '01' },
  { id: 'press', label: 'Press Inquiry', icon: '02' },
  { id: 'trade', label: 'Architectural / Trade', icon: '03' }
];

const ConciergeToggle = ({ onCategoryChange }) => {
  const [activeTab, setActiveTab] = useState(CATEGORIES[0].id);

  return (
    <div className="bg-[#FDFCF9] pt-24 pb-12 flex flex-col items-center">
      <motion.span 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        className="one text-[#1B2620] tracking-[0.5em] uppercase text-[9px] font-bold block mb-8"
      >
        Select your Path
      </motion.span>

      <div className="relative flex flex-wrap justify-center gap-4 p-2 bg-[#F4F1EA] rounded-full border border-black/5">
        {CATEGORIES.map((tab) => {
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                if (onCategoryChange) onCategoryChange(tab.id);
              }}
              className="relative px-8 py-3 z-10 transition-colors duration-500"
            >
              <div className="flex items-center gap-3">
                <span className={`one text-[8px] font-black tracking-tighter transition-colors ${isActive ? 'text-[#1B2620]' : 'text-[#1B2620]/40'}`}>
                  {tab.icon}
                </span>
                <span className={`one text-[10px] uppercase tracking-widest font-bold transition-colors ${isActive ? 'text-[#1B2620]' : 'text-[#1B2620]/40'}`}>
                  {tab.label}
                </span>
              </div>

              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.03)] z-[-1]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ConciergeToggle;