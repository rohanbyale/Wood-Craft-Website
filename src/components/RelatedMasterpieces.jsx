import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Plus } from 'lucide-react';

const RELATED_PRODUCTS = [
  { id: 1, name: "The Artisan Chair", price: "$850", category: "Seating", image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=800" },
  { id: 2, name: "Heritage Sideboard", price: "$2,100", category: "Storage", image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800" },
  { id: 3, name: "Minimalist Bench", price: "$1,200", category: "Seating", image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800" },
  { id: 4, name: "Floating Shelf Set", price: "$450", category: "Bespoke", image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=800" },
  { id: 5, name: "Sculptural Stool", price: "$620", category: "Seating", image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800" },
  { id: 6, name: "Walnut Console", price: "$1,800", category: "Hallway", image: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=800" }
];

const RelatedMasterpieces = () => {
  const targetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(
    scrollYProgress, 
    [0, 1], 
    ["0%", typeof window !== 'undefined' && window.innerWidth < 768 ? "-85%" : "-70%"]
  );

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={targetRef} className="relative h-[300vh] md:h-[400vh] bg-[#FDFCF9]">
      
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-8 md:py-12">
        
        <div className="container mx-auto px-4 md:px-6 mb-6 md:mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="three text-[#C29958] tracking-[0.3em] md:tracking-[0.4em] uppercase text-[9px] md:text-[10px]">
                Complete the Set
              </span>
              <h2 className="three text-3xl md:text-5xl lg:text-6xl text-[#1B2620] uppercase leading-none">
                Related <br className="hidden md:block" /> <span className="italic text-[#C29958]">Masterpieces</span>
              </h2>
            </div>
            
            <button className="group flex items-center gap-3 md:gap-4 text-[#1B2620] hover:text-[#C29958] transition-colors focus:outline-none w-fit">
              <span className="one text-[9px] md:text-[10px] uppercase tracking-widest border-b border-[#1B2620] group-hover:border-[#C29958] pb-1 transition-all">
                View Entire Collection
              </span>
              <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform md:w-4 md:h-4" />
            </button>
          </div>
        </div>

        <motion.div style={{ x }} className="flex gap-6 md:gap-12 px-4 md:px-[10%]">
          {RELATED_PRODUCTS.map((product) => (
            <div key={product.id} className="min-w-[280px] sm:min-w-[350px] md:min-w-[450px] group">
              {/* Image Box */}
              <div className="relative aspect-[16/11] md:aspect-[16/10] overflow-hidden rounded-[20px] md:rounded-[30px] bg-gray-100 mb-4 md:mb-6 shadow-sm border border-black/5">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-[#1B2620]/0 group-hover:bg-[#1B2620]/10 transition-colors duration-500" />
                
                <button className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-white text-[#1B2620] p-3 md:p-4 rounded-full shadow-xl opacity-100 md:opacity-0 translate-y-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500 hover:bg-[#C29958] hover:text-white">
                  <Plus size={18} className="md:w-5 md:h-5" />
                </button>
                
                <div className="absolute top-4 left-4 md:top-6 md:left-6">
                  <span className="px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-white/30 backdrop-blur-md border border-white/20 text-white text-[8px] md:text-[9px] uppercase font-bold tracking-[0.15em] md:tracking-[0.2em]">
                    {product.category}
                  </span>
                </div>
              </div>

              <div className="space-y-1 px-1">
                <h3 className="three text-xl md:text-2xl lg:text-3xl text-[#1B2620] uppercase group-hover:text-[#C29958] transition-colors duration-300 truncate">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 md:gap-3">
                  <p className="one text-base md:text-lg text-gray-400 font-light">{product.price}</p>
                  <div className="h-[1px] w-4 md:w-6 bg-gray-200" />
                  <span className="two text-[8px] md:text-[9px] uppercase text-[#C29958] tracking-widest">Available</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="container mx-auto px-4 md:px-6 mt-10 md:mt-16">
          <div className="h-[1px] w-full bg-gray-100 relative overflow-hidden">
            <motion.div 
              style={{ scaleX }}
              className="absolute top-0 left-0 h-full w-full bg-[#C29958] origin-left"
            />
          </div>
          <div className="flex justify-between mt-3 md:mt-4">
            <span className="one text-[8px] text-gray-300 uppercase tracking-widest">01 / Begin Collection</span>
            <span className="one text-[8px] text-gray-300 uppercase tracking-widest">06 / End of Track</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedMasterpieces;