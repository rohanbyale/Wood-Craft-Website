import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const MATERIALS = [
  "Sustainably Sourced Walnut",
  "Hand-Rubbed Brass",
  "Smoked European Oak",
  "Cast Iron Detailing",
  "Organic Hardwax Finish",
  "Ancient Bog Oak",
  "Hand-Stitched Leather"
];

const TEXTURES = [
  { id: 1, url: "https://i.pinimg.com/1200x/06/62/0c/06620ceb77823b8429b5ce65a1d42321.jpg", label: "Walnut Grain" },
  { id: 2, url: "https://i.pinimg.com/1200x/55/29/82/552982431c45ab8479c50edd7c6575de.jpg", label: "Organic Hardwax Finish" },
  { id: 3, url: "https://i.pinimg.com/1200x/f3/61/db/f361db6d155643b242abeb2862584d5a.jpg", label: "Charred Oak" },
  { id: 4, url: "https://images.unsplash.com/photo-1610505466020-0c036980630b?q=80&w=800", label: "Dovetail Detail" },
];

const MaterialShowcase = () => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const xImages = useTransform(scrollYProgress, [0, 1], [50, -50], {
  });
  
  const xTicker = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <section ref={containerRef} className="bg-[#FDFCF9] py-16 md:py-32 overflow-hidden border-t border-black/5">
      
      <div className="container mx-auto px-6 mb-12 md:mb-20">
        <div className="max-w-xl text-center md:text-left mx-auto md:mx-0">
          <span className="three text-[#C29958] tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] md:text-2xl block">
            The Raw Elements
          </span>
          <h2 className="three text-4xl sm:text-5xl lg:text-7xl text-[#1B2620] uppercase leading-none mt-4">
            Honest <br /> <span className="italic text-[#C29958]">Materials</span>
          </h2>
        </div>
      </div>

      <div className="relative flex whitespace-nowrap border-y border-[#1B2620]/10 py-6 md:py-10 bg-white/50">
        <motion.div style={{ x: xTicker }} className="flex gap-8 md:gap-12 items-center">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex gap-8 md:gap-12 items-center">
              {MATERIALS.map((mat, idx) => (
                <div key={idx} className="flex items-center gap-8 md:gap-12">
                  <span className="three text-2xl sm:text-4xl lg:text-6xl text-[#1B2620] uppercase opacity-80 hover:text-[#C29958] transition-colors cursor-default">
                    {mat}
                  </span>
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#C29958] shrink-0" />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-16 md:mt-24 px-4 md:px-6">
        <motion.div 
          style={{ x: xImages }} 
          className="flex gap-6 md:gap-16 cursor-grab active:cursor-grabbing"
        >
          {TEXTURES.map((texture) => (
            <motion.div 
              key={texture.id}
              className="min-w-[260px] sm:min-w-[350px] md:min-w-[450px] group"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative aspect-[4/5] rounded-[24px] md:rounded-[40px] overflow-hidden shadow-2xl border border-black/5">
                <motion.img 
                  src={texture.url} 
                  alt={texture.label}
                  className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-10">
                  <span className="one text-white text-[8px] md:text-[10px] uppercase tracking-widest font-bold">Close up</span>
                  <p className="three text-xl md:text-3xl text-white uppercase">{texture.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-6 mt-12 md:mt-20 flex justify-center md:justify-end">
        <p className="two text-gray-400 max-w-xs text-center md:text-right text-xs md:text-sm leading-relaxed italic px-4 md:px-0">
          "The beauty of our work lies in the imperfections of nature. We don't hide the knots; we celebrate them."
        </p>
      </div>

    </section>
  );
};

export default MaterialShowcase;