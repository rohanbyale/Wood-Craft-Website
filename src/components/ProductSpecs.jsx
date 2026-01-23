import React from 'react';
import { motion } from 'framer-motion';
import { Ruler, Globe, Droplets, Clock, ShieldCheck, ArrowDownRight } from 'lucide-react';

const SPEC_DATA = [
  { 
    label: "Geometry", 
    value: "220cm x 100cm x 75cm", 
    icon: <Ruler size={20} />,
    detail: "Proportioned for the golden ratio and communal ergonomics." 
  },
  { 
    label: "Timber Lineage", 
    value: "Black Forest, Germany", 
    icon: <Globe size={20} />,
    detail: "Harvested at peak maturity from FSC-protected old-growth stands." 
  },
  { 
    label: "Surface Treatment", 
    value: "Organic Hardwax Oil", 
    icon: <Droplets size={20} />,
    detail: "A breathable, molecular bond that celebrates the wood's natural scent." 
  },
  { 
    label: "Creation Cycle", 
    value: "8 - 12 Weeks", 
    icon: <Clock size={20} />,
    detail: "Nature took eighty years to grow it; we take eight weeks to perfect it." 
  },
  { 
    label: "Structural Oath", 
    value: "Limited Lifetime", 
    icon: <ShieldCheck size={20} />,
    detail: "Guaranteed structural integrity for this generation and the next." 
  }
];

const ProductSpecs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] } 
    }
  };

  return (
    <section className="relative bg-[#FDFCF9] py-20 lg:py-32 px-6 overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none opacity-[0.07] overflow-hidden">
        <svg viewBox="0 0 1000 1000" className="absolute -right-1/4 -top-1/4 w-[150%] h-[150%] text-[#1B2620]">
          {[...Array(15)].map((_, i) => (
            <motion.circle
              key={i}
              cx="500" cy="500"
              r={100 + i * 70}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2.5, delay: i * 0.05 }}
            />
          ))}
          <motion.path 
            d="M500,50 Q550,250 500,500 T500,950" 
            stroke="currentColor" 
            fill="none" 
            strokeWidth="0.5"
            strokeDasharray="5 15"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 3 }}
          />
        </svg>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        
        <div className="relative mb-16 lg:mb-24">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
            <div className="space-y-4">
              <span className="text-[#C29958] tracking-[0.4em] uppercase text-[10px] md:text-xs font-bold block">Micron-Precision Engineering</span>
              <h2 className="text-5xl md:text-6xl lg:text-8xl text-[#1B2620] font-black uppercase leading-[0.85] tracking-tighter">
                Technical <br /> <span className="italic font-serif font-light text-[#C29958] lowercase">manifesto</span>
              </h2>
            </div>
            <p className="text-gray-400 max-w-[300px] text-sm leading-relaxed pb-2 border-l border-[#C29958] pl-6 italic">
              "We don't just cut timber; we follow the grain's inherent logic to build architecture you can touch."
            </p>
          </div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative border-t border-[#1B2620]/10"
        >
          {SPEC_DATA.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group relative flex flex-col md:flex-row md:items-center justify-between py-8 lg:py-12 border-b border-[#1B2620]/10 cursor-default overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#1B2620] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-700 ease-[0.76, 0, 0.24, 1] pointer-events-none" />

              <div className="relative z-10 flex items-center gap-5 lg:gap-8 mb-4 md:mb-0 transition-colors duration-500 group-hover:text-white">
                <span className="text-[#C29958] text-[10px] font-mono opacity-50">0{index + 1}</span>
                <div className="p-3 lg:p-4 rounded-full border border-[#1B2620]/10 group-hover:border-white/20 transition-all">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-[#C29958] mb-1">
                    {item.label}
                  </h4>
                  <p className="text-xl lg:text-3xl font-serif text-[#1B2620] group-hover:text-white transition-colors duration-500">
                    {item.value}
                  </p>
                </div>
              </div>

              <div className="relative z-10 md:text-right transition-colors duration-500 group-hover:text-white/60 pl-14 md:pl-0 max-w-sm">
                <p className="text-xs md:text-sm text-gray-500 group-hover:text-white/80 transition-colors leading-relaxed">
                  {item.detail}
                </p>
                <div className="flex justify-end mt-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                   <ArrowDownRight size={20} className="text-[#C29958]" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 lg:mt-20 p-6 md:p-10 border border-[#1B2620]/5 rounded-[24px] md:rounded-[40px] bg-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-5">
             <div className="shrink-0 w-12 h-12 bg-[#1B2620] rounded-2xl flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-[#C29958] rounded-full animate-ping" />
             </div>
             <div>
                <p className="text-[10px] md:text-xs uppercase font-bold tracking-widest text-[#1B2620]">
                  Architectural Dossier
                </p>
                <p className="text-xs text-gray-400 mt-1">Download complete CAD, BIM, and high-res grain textures.</p>
             </div>
          </div>
          <button className="w-full md:w-auto group relative overflow-hidden bg-[#1B2620] text-white px-10 py-5 rounded-full text-[10px] uppercase font-black tracking-[0.2em] transition-all">
            <span 
             onClick={() => window.location.href = '/contact'}
            className="relative z-10">Acquire Blueprints</span>
            <div className="absolute inset-0 bg-[#C29958] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default ProductSpecs;