import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowUpRight, ShieldCheck } from 'lucide-react';

const premiumProducts = [
  {
    id: '01',
    name: "The Artisan Executive Desk",
    material: "Burmese Teak & Black Steel",
    image: "https://i.pinimg.com/1200x/f4/f9/a3/f4f9a318801505600f1321c7328bf8bc.jpg",
    priceTag: "Premium Tier",
    category: "Signature Series"
  },
  {
    id: '02',
    name: "Grand Entrance Portal",
    material: "Solid Walnut | Weather-Proofed",
    image: "https://fancyhouse-design.com/wp-content/uploads/2024/07/Grand-front-door-with-polished-chrome-accents-creating-a-luxurious-feel.jpg",
    priceTag: "Custom Built",
    category: "Doors"
  },
  {
    id: '03',
    name: "Herringbone Oak Flooring",
    material: "Multi-layered European Oak",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=800",
    priceTag: "Per Sq. Ft.",
    category: "Flooring"
  }
];

const BestProducts = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F9F7F2]">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 md:mb-20 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h2 className="three text-5xl sm:text-6xl md:text-8xl font-serif text-[#1B2620] leading-[1.1]" >
              The <span className="text-[#C29958] italic">Masterpieces</span>
            </h2>
            <p className="text-gray-500 mt-4 tracking-[0.2em] uppercase text-[10px] md:text-xs font-bold">Most Requested by Interior Architects</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 text-[#1B2620]/60"
          >
            <ShieldCheck size={18} className="text-[#C29958] shrink-0" />
            <span className="text-xs md:text-sm font-medium tracking-wide">Certified Lifetime Structural Integrity</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {premiumProducts.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-white shadow-xl">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover grayscale-[30%] md:group-hover:grayscale-0 transition-all duration-700 md:group-hover:scale-110"
                />
                
                <span className="absolute top-4 left-4 md:top-6 md:left-6 text-white/20 font-serif text-5xl md:text-6xl select-none">
                  {item.id}
                </span>

                <div className="absolute inset-0 bg-[#1B2620]/60 backdrop-blur-[2px] opacity-0 md:group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 md:p-8">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    className="w-full bg-[#C29958] text-white py-3.5 md:py-4 rounded-lg flex items-center justify-center gap-3 text-xs md:text-sm font-bold shadow-2xl mb-3 md:mb-4"
                  >
                    <MessageSquare size={18} />
                    REQUEST QUOTE
                  </motion.button>
                  <button className="w-full bg-white/10 border border-white/20 text-white py-3.5 md:py-4 rounded-lg flex items-center justify-center gap-3 text-xs md:text-sm font-bold backdrop-blur-md">
                    <ArrowUpRight size={18} />
                    FULL SPECS
                  </button>
                </div>
              </div>

              <div className="mt-6 md:mt-8 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[#C29958] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
                    {item.category}
                  </span>
                  <span className="bg-gray-200 px-2 py-0.5 text-[9px] md:text-[10px] rounded text-gray-600 font-bold uppercase italic">
                    {item.priceTag}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-serif text-[#1B2620] md:group-hover:text-[#C29958] transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="one text-gray-400 text-xs md:text-sm font-light">
                  {item.material}
                </p>
              </div>

              <div className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#C29958] md:group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 md:mt-24 flex flex-col items-center border-t border-gray-200 pt-12 md:pt-16 text-center"
        >
          <p className="text-gray-400 italic mb-8 text-base md:text-lg max-w-md">Looking for a specific wood species or custom dimensions?</p>
          <button className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 bg-[#1B2620] text-white rounded-full text-[10px] md:text-xs font-bold tracking-[0.25em] hover:bg-[#C29958] transition-all duration-500 shadow-xl">
            CONSULT OUR MASTER CRAFTSMAN
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default BestProducts;