import React from 'react';
import { motion } from 'framer-motion';

const PARTNERS = [
  { name: "Foster + Partners", type: "Architecture", location: "London" },
  { name: "Zaha Hadid", type: "Design", location: "Global" },
  { name: "Gensler", type: "Global Design", location: "NYC" },
  { name: "Snøhetta", type: "Landscape", location: "Oslo" },
  { name: "Bjarke Ingels", type: "Architecture", location: "Copenhagen" },
  { name: "Studio McGee", type: "Interiors", location: "Utah" },
  { name: "HOK", type: "Urban Design", location: "St. Louis" },
  { name: "Rockwell Group", type: "Interiors", location: "Madrid" }
];

const CollaboratorList = () => {
  const displayPartners = PARTNERS.slice(0, 8);

  return (
    <section className="bg-[#FDFCF9] py-16 md:py-24 lg:py-32 border-t border-black/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-8 md:gap-12">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-4 md:mb-6"
            >
              <span className="text-[#C29958] text-[9px] md:text-[10px] uppercase tracking-wider font-black">
                Professional Network
              </span>
            </motion.div>
            <h2 className="three text-5xl sm:text-6xl md:text-7xl lg:text-[100px] text-[#1B2620] uppercase leading-[0.9] lg:leading-[0.85] tracking-tight font-serif">
              Strategic <br /> 
              <span className="italic font-light text-[#C29958] lowercase">Alliances</span>
            </h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 max-w-[300px] text-xs md:text-sm leading-relaxed uppercase tracking-widest font-light pb-0 md:pb-4 border-l border-[#C29958]/20 pl-6"
          >
            We collaborate with the world’s most renowned architectural firms to transform complex timber challenges into functional art.
          </motion.p>
        </div>

        <div className="relative border-t border-l border-[#1B2620]/10">
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-20 hidden sm:block">
            <motion.rect
              width="100%"
              height="100%"
              fill="none"
              stroke="#1B2620"
              strokeWidth="1"
              strokeOpacity="0.1"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              viewport={{ once: true }}
            />
          </svg>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {displayPartners.map((partner, index) => (
              <PartnerCell key={index} partner={partner} index={index} />
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-20 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex items-center gap-6">
             <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="text-6xl sm:text-7xl lg:text-8xl text-[#1B2620] font-serif"
             >
               150
             </motion.span>
             <span className="text-[8px] md:text-[9px] text-[#C29958] uppercase tracking-[0.2em] md:tracking-[0.3em] font-black leading-tight border-l border-black/5 pl-4 md:pl-6">
               Bespoke Projects <br /> Worldwide
             </span>
          </div>

          <div className="hidden lg:block h-[1px] flex-grow bg-gradient-to-r from-[#1B2620]/20 to-transparent" />

          <div className="flex gap-8 md:gap-12">
            <div>
              <p className="text-[7px] md:text-[8px] uppercase text-gray-400 tracking-widest mb-1 font-bold">Standard</p>
              <p className="text-[10px] md:text-[11px] text-[#1B2620] uppercase tracking-tight font-bold font-serif">Architectural Grade</p>
            </div>
            <div>
              <p className="text-[7px] md:text-[8px] uppercase text-gray-400 tracking-widest mb-1 font-bold">Archive</p>
              <p className="text-[10px] md:text-[11px] text-[#1B2620] uppercase tracking-tight font-bold font-serif">2024—2026</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PartnerCell = ({ partner, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: index * 0.05 }}
      viewport={{ once: true }}
      className={`group relative h-40 sm:h-48 md:h-56 flex flex-col items-center justify-center border-r border-b border-[#1B2620]/10 p-6 md:p-10 transition-all duration-700 hover:bg-[#1B2620] overflow-hidden cursor-crosshair`}
    >
      <div className="absolute inset-0 bg-[#C29958] translate-y-full group-hover:translate-y-0 transition-transform duration-600 ease-[0.22, 1, 0.36, 1] origin-bottom z-0" />

      <div className="absolute top-3 left-4 md:top-4 md:left-6 opacity-20 group-hover:opacity-40 transition-opacity z-10">
        <span className="text-[8px] md:text-[9px] text-[#1B2620] group-hover:text-white font-bold tracking-widest">
          {index < 9 ? `0${index + 1}` : index + 1}
        </span>
      </div>

      <div className="relative z-10 text-center transition-all duration-500 group-hover:-translate-y-4 md:group-hover:-translate-y-6">
        <h4 className="text-lg sm:text-xl md:text-2xl text-[#1B2620] group-hover:text-white uppercase tracking-tighter leading-none mb-2 font-serif transition-colors duration-500">
          {partner.name}
        </h4>
        <div className="h-[1px] w-0 group-hover:w-1/2 mx-auto bg-white/40 transition-all duration-700 mt-2" />
      </div>

      <div className="absolute bottom-6 md:bottom-10 left-0 right-0 text-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 z-10">
        <p className="text-[9px] md:text-[10px] text-white/90 uppercase tracking-[0.2em] md:tracking-[0.4em] mb-1 italic font-medium">
          {partner.type}
        </p>
        <p className="text-[7px] md:text-[8px] text-white/60 uppercase tracking-[0.3em] md:tracking-[0.5em] font-black">
          {partner.location}
        </p>
      </div>
    </motion.div>
  );
};

export default CollaboratorList;