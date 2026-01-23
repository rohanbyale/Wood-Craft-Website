import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParagraphReveal = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end 0.8"] 
  });

  const lineImages = [
    "https://static.vecteezy.com/system/resources/thumbnails/048/719/069/small/wooden-chair-on-transparent-background-free-png.png", 
    "https://images.unsplash.com/photo-1506599667882-385dd6673353?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1470342495351-a5f90c5011cd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1748167535119-572c4a082205?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=300"
  ];

  const lines = [
    { first: "The dialogue", mid: "", last: "begins long before the first", img: lineImages[0], pos: 'mid' },
    { first: "", mid: "cut is made.", last: "It starts with a deep intent", img: lineImages[1], pos: 'start' },
    { first: "of your sanctuary's", mid: "", last: "unique geometry and light", img: lineImages[2], pos: 'end' },
    { first: "silent stories", mid: "hidden within", last: "raw timber.", img: lineImages[3], pos: 'mid' },
    { first: "Our atelier", mid: "", last: "transforms conversations.", img: lineImages[4], pos: 'start' },
    { first: "into physical legacies that endure.", mid: "", last: "", img: null, pos: 'none' }
  ];

  return (
    <section 
      ref={containerRef} 
      className="bg-[#FDFCF9] py-20 px-6 min-h-[60vh] flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col gap-3 md:gap-5 items-center">
          {lines.map((line, index) => {
            const start = index / lines.length;
            const end = (index + 1) / lines.length;
            
            return (
              <Line 
                key={index} 
                line={line}
                progress={scrollYProgress} 
                range={[start, end]} 
              />
            );
          })}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 flex flex-col items-center gap-4"
        >
          <div className="h-10 w-[1px] bg-[#C29958]/30" />
          <span className="text-[9px] uppercase tracking-[0.6em] text-[#C29958] font-bold">
            Curated Intent
          </span>
        </motion.div>
      </div>
    </section>
  );
};

const Line = ({ line, progress, range }) => {
  const { first, mid, last, img, pos } = line;
  
  const opacity = useTransform(progress, range, [0.1, 1]);
  const blur = useTransform(progress, range, [4, 0]);
  const y = useTransform(progress, range, [20, 0]);
  
  const imgScale = useTransform(progress, range, [0.5, 1]);
  const imgRotate = useTransform(progress, range, [pos === 'start' ? -10 : 10, 0]);

  const ImageComp = () => (
    <motion.div 
      style={{ scale: imgScale, rotate: imgRotate }}
      className="flex-shrink-0 w-10 h-6 sm:w-16 sm:h-10 md:w-24 md:h-14 lg:w-32 lg:h-18 rounded-full overflow-hidden border border-[#C29958]/20 shadow-xl bg-gray-100 mx-2 md:mx-4"
    >
      <img src={img} className="w-full h-full object-cover" alt="Detail" />
    </motion.div>
  );

  return (
    <div className="overflow-hidden py-1">
      <motion.div
        style={{ opacity, filter: `blur(${blur}px)`, y }}
        className="flex items-center justify-center text-center"
      >
        {img && pos === 'start' && <ImageComp />}

        {first && (
          <h2 className="three text-xl sm:text-3xl md:text-5xl lg:text-6xl text-[#1B2620] uppercase leading-none  whitespace-nowrap">
            {first}
          </h2>
        )}

        {img && pos === 'mid' && <ImageComp />}

        {(mid || last) && (
          <h2 className="three text-xl sm:text-3xl md:text-5xl lg:text-6xl text-[#1B2620] uppercase leading-none  whitespace-nowrap ml-3 md:ml-6">
            {mid} {last}
          </h2>
        )}

        {img && pos === 'end' && <ImageComp />}
      </motion.div>
    </div>
  );
};

export default ParagraphReveal;