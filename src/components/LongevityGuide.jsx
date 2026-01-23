import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Wind, Droplets, ChevronDown, Calendar } from 'lucide-react';

const GUIDE_SECTIONS = [
  {
    id: '01',
    title: "Daily Cleaning",
    icon: <Sparkles size={20} />,
    content: "Use a dry or slightly damp lint-free microfiber cloth. Wipe in the direction of the wood grain to prevent streaking. Avoid harsh chemical sprays; a drop of mild pH-neutral soap in warm water is all you need for stubborn spots.",
    tip: "Never leave standing water on the surface for more than 5 minutes."
  },
  {
    id: '02',
    title: "Humidity Control",
    icon: <Wind size={20} />,
    content: "Wood is a living material that breathes. Maintain a consistent indoor humidity level between 40% and 60%. Significant fluctuations can cause the timber to expand or contract, potentially leading to small hairline checks.",
    tip: "Keep at least 2 feet away from direct heat sources like radiators."
  },
  {
    id: '03',
    title: "Re-oiling Schedule",
    icon: <Droplets size={20} />,
    content: "To maintain the deep luster and protection, we recommend a light application of our Organic Hardwax Oil every 12 to 18 months. This nourishes the fibers and builds a natural patina over time.",
    tip: "The wood is ready for oil when it starts to look 'thirsty' or dull."
  }
];

const LongevityGuide = () => {
  const [openSection, setOpenSection] = useState('01');

  return (
    <section className="bg-[#FDFCF9] py-16 md:py-24 px-4 md:px-6 border-t border-gray-100">
      <div className="container mx-auto max-w-4xl">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16">
          <div className="space-y-4">
            <span className="three text-[#C29958] tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs block">
              The 50-Year Vision
            </span>
            <h2 className="three text-4xl sm:text-5xl lg:text-7xl text-[#1B2620] uppercase leading-[0.9] md:leading-none">
              Care & <br /> <span className="italic text-[#C29958]">Longevity</span>
            </h2>
          </div>
          <p className="two text-gray-400 max-w-xs text-sm italic leading-relaxed">
            A well-loved piece of timber only grows more beautiful with time. Here is how to protect your legacy.
          </p>
        </div>

        <div className="space-y-2 md:space-y-4">
          {GUIDE_SECTIONS.map((section) => (
            <div 
              key={section.id} 
              className={`border-b border-[#1B2620]/10 transition-colors duration-500 ${openSection === section.id ? 'bg-[#1B2620]/[0.02]' : ''}`}
            >
              <button
                onClick={() => setOpenSection(openSection === section.id ? null : section.id)}
                className="w-full py-6 md:py-8 flex items-center justify-between text-left group focus:outline-none"
              >
                <div className="flex items-center gap-4 md:gap-6">
                  <span className="one text-[#C29958] text-xs md:text-sm opacity-50">{section.id}</span>
                  <div className={`p-2.5 md:p-3 rounded-full transition-all duration-500 shrink-0 ${openSection === section.id ? 'bg-[#1B2620] text-white' : 'bg-gray-100 text-[#1B2620]'}`}>
                    {React.cloneElement(section.icon, { size: 18, className: "md:w-5 md:h-5" })}
                  </div>
                  <h3 className="three text-xl sm:text-2xl lg:text-3xl uppercase text-[#1B2620] group-hover:text-[#C29958] transition-colors">
                    {section.title}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: openSection === section.id ? 180 : 0 }}
                  className="text-[#1B2620]/30 shrink-0"
                >
                  <ChevronDown size={20} className="md:w-6 md:h-6" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openSection === section.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 md:pb-10 pl-4 sm:pl-10 md:pl-[88px] pr-4 md:pr-6 space-y-6">
                      <p className="two text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl">
                        {section.content}
                      </p>
                      
                      <div className="bg-white border-l-2 border-[#C29958] p-4 md:p-5 flex items-start gap-4 shadow-sm">
                        <div className="text-[#C29958] pt-1 shrink-0">
                          <Calendar size={14} className="md:w-4 md:h-4" />
                        </div>
                        <p className="one text-[10px] md:text-[11px] uppercase tracking-wider text-[#1B2620] leading-tight">
                          <span className="font-bold text-[#C29958] mr-2">Pro Tip:</span> 
                          {section.tip}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 md:mt-16 text-center border-t border-gray-100 pt-8 md:pt-10"
        >
          <p className="two text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-gray-400 px-4">
            Need a professional refresh? <span className="text-[#1B2620] border-b border-[#C29958] cursor-pointer hover:text-[#C29958] transition-colors">Contact our workshop.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LongevityGuide;