import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CHANNELS = [
  { 
    name: 'Instagram', 
    handle: '@the_studio_archive', 
    url: 'https://instagram.com/yourhandle',
    preview: 'https://img.freepik.com/free-vector/instagram-logo_1045-436.jpg?semt=ais_hybrid&w=740&q=80',
    description: 'Process, sawdust, and finished sanctuaries.' 
  },
  { 
    name: 'Pinterest', 
    handle: 'the_studio_moods', 
    url: 'https://pinterest.com/yourhandle',
    preview: 'https://i.pinimg.com/474x/7f/45/05/7f4505a49953254fc1485f8db5cefe7f.jpg',
    description: 'Curated references of light and grain.' 
  },
  { 
    name: 'LinkedIn', 
    handle: 'The Studio Atelier', 
    url: 'https://linkedin.com/company/yourhandle',
    preview: 'https://img.freepik.com/premium-vector/square-linkedin-logo-isolated-white-background_469489-892.jpg?semt=ais_hybrid&w=740&q=80',
    description: 'Architectural partnerships and trade news.' 
  }
];

const DigitalArchive = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section 
      className="relative bg-[#FDFCF9] py-20 lg:py-32 border-t border-black/5 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            viewport={{ once: true }}
            className="text-[#C29958] tracking-[0.4em] md:tracking-[0.6em] uppercase text-[9px] md:text-[10px] font-black block mb-8 md:mb-12"
          >
            Secondary Portals
          </motion.span>

          <div className="w-full max-w-5xl">
            {CHANNELS.map((channel, idx) => (
              <div key={idx} className="relative">
                <motion.a
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredLink(channel)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="group relative flex flex-col md:flex-row items-start md:items-baseline justify-between py-8 md:py-12 border-b border-black/10 transition-all duration-500 md:hover:px-8 z-10"
                >
                  <div className="flex items-baseline gap-4 md:gap-8">
                    <span className="text-sm md:text-xl text-[#C29958] opacity-40 group-hover:opacity-100 group-hover:italic transition-all duration-300">
                      0{idx + 1}
                    </span>
                    <h3 className="text-4xl three sm:text-5xl md:text-7xl lg:text-8xl text-[#1B2620] uppercase leading-none  transition-transform duration-500 group-hover:translate-x-2 md:group-hover:translate-x-4">
                      {channel.name}
                    </h3>
                  </div>
                  
                  <div className="flex flex-col items-start md:items-end mt-4 md:mt-0">
                    <span className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400 group-hover:text-[#C29958] transition-colors duration-300">
                      {channel.handle}
                    </span>
                    <p className="md:hidden text-[#1B2620]/60 text-xs italic mt-2 max-w-[250px]">
                      {channel.description}
                    </p>
                  </div>
                </motion.a>

                <div className="md:hidden w-full h-0 group-hover:h-48 overflow-hidden transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                   <img src={channel.preview} className="w-full h-full object-cover rounded-lg mb-6" alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {hoveredLink && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotate: 0,
              x: mousePos.x + 20, 
              y: mousePos.y - 150 
            }}
            exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
            transition={{ type: "spring", stiffness: 250, damping: 25, mass: 0.5 }}
            className="fixed top-0 left-0 w-48 lg:w-64 pointer-events-none z-50 hidden md:block"
          >
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-[6px] border-white">
              <img 
                src={hoveredLink.preview} 
                alt="Preview" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-5 flex flex-col justify-end">
                <p className="text-white text-[10px] lg:text-xs italic leading-relaxed font-serif">
                  {hoveredLink.description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default DigitalArchive;