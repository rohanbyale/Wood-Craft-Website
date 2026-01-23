import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MoveRight } from 'lucide-react';

const SECTIONS = [
  {
    id: 1,
    title: "The Heritage Frame",
    price: "$2,400",
    desc: "Crafted from solid American Walnut, the frame features hand-cut dovetail joints that will last generations.",
    img: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=1200",
    color: "#F4F1EA" 
  },
  {
    id: 2,
    title: "Organic Live Edge",
    price: "$3,100",
    desc: "We preserve the natural curvature of the tree, ensuring that every table has a unique silhouette found nowhere else.",
    img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1200",
    color: "#EBE7DF" 
  },
  {
    id: 3,
    title: "Precision Joinery",
    price: "$2,850",
    desc: "Our master carpenters use traditional Japanese joinery techniques, eliminating the need for metal screws or nails.",
    img: "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=1200",
    color: "#E2DED5" 
  }
];

const ProductDetail = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  return (
    <main ref={container} className="relative bg-[#FDFCF9]">
      <div className="h-[40vh] flex flex-col items-center justify-center text-center px-6">
        <span className="three text-[#C29958] tracking-[0.4em] uppercase text-xs mb-4">The Portfolio</span>
        <h1 className="three text-5xl md:text-7xl text-[#1B2620] uppercase leading-none">
          Curation of <br /> <span className="italic">Excellence</span>
        </h1>
      </div>

      {SECTIONS.map((section, index) => {
        const targetScale = 1 - ((SECTIONS.length - index) * 0.04);
        
        return (
          <Card 
            key={section.id}
            i={index}
            {...section}
            progress={scrollYProgress}
            range={[index * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
      
      <div className="h-[30vh]" />
    </main>
  );
};

const Card = ({ i, title, price, desc, img, color, progress, range, targetScale }) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div className="h-screen flex items-center justify-center sticky top-0 px-4 md:px-0">
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(10vh + ${i * 30}px)`, 
        }}
        className="relative w-full max-w-6xl h-[70vh] md:h-[75vh] rounded-[48px] flex flex-col lg:flex-row items-center overflow-hidden border border-black/[0.03] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] origin-top"
      >
        <div className="w-full lg:w-[55%] h-1/2 lg:h-full p-4 md:p-8">
          <div className="w-full h-full rounded-[32px] overflow-hidden group">
            <motion.img 
              src={img} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
            />
          </div>
        </div>

        <div className="w-full lg:w-[45%] p-8 lg:p-16 flex flex-col justify-between h-1/2 lg:h-full">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="one text-[#C29958] text-sm font-bold tracking-tighter">0{i + 1}</span>
              <div className="h-[1px] w-8 bg-[#C29958]/30" />
              <span className="one text-[#1B2620]/40 text-[10px] uppercase tracking-widest font-bold">
                Limited Edition
              </span>
            </div>

            <h2 className="three text-4xl lg:text-5xl text-[#1B2620] uppercase leading-tight ">
              {title}
            </h2>
            
            <p className="two text-[#1B2620]/60 text-base leading-relaxed max-w-sm font-light italic">
              "{desc}"
            </p>
          </div>

          <div className="pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-black/5 mt-auto">
            <div className="flex flex-col">
              <span className="one text-[10px] text-[#1B2620]/30 uppercase tracking-[0.2em] font-bold">Starting from</span>
              <span className="three text-3xl text-[#1B2620]">{price}</span>
            </div>
            
            <button className="group bg-[#1B2620] text-white px-10 py-5 rounded-full text-[10px] uppercase font-bold tracking-widest flex items-center gap-3 hover:bg-[#C29958] transition-all duration-500 shadow-xl shadow-[#1B2620]/20">
              Details <MoveRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductDetail;