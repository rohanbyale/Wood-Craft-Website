import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

const reviews = [
  {
    name: "Vikram Malhotra",
    role: "Interior Architect",
    text: "The precision in their CNC cutting and the richness of the walnut finish transformed our penthouse project. Truly world-class craftsmanship.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    project: "Skyline Penthouse"
  },
  {
    name: "Sarah Jenkins",
    role: "Homeowner",
    text: "I was worried about the durability of custom doors in this climate, but Woodcraft’s seasoning process is remarkable. Two years later, they still look brand new.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    project: "Private Villa"
  },
  {
    name: "Arjun Reddy",
    role: "Commercial Developer",
    text: "Reliability is hard to find in the timber industry. They delivered 200 custom office desks ahead of schedule without a single defect in grain quality.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    project: "Tech Hub HQ"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#1B2620] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#C29958] text-xs font-bold uppercase tracking-widest mb-6"
          >
            <CheckCircle2 size={14} />
            Verified Excellence
          </motion.div>
          <h2 className=" text-4xl md:text-6xl font-serif text-white mb-6"
           style={{ fontFamily: "'Playfair Display', serif" }}>
            The Voices of <span className="italic text-[#C29958]">Satisfaction</span>
          </h2>
          <p className="two text-gray-400 max-w-2xl mx-auto">
            From independent designers to large-scale developers, our commitment to timber quality has built lasting relationships across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 flex flex-col h-full relative group"
            >
              <div className="absolute -top-4 -right-4 bg-[#C29958] p-3 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Quote className="text-white" size={20} />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#C29958] text-[#C29958]" />
                ))}
              </div>

              <p className="text-gray-200 text-lg leading-relaxed mb-8 italic">
                "{review.text}"
              </p>

              <div className="mt-auto flex items-center gap-4 border-t border-white/10 pt-6">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full border-2 border-[#C29958]/50" 
                />
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wider">{review.name}</h4>
                  <p className="text-[#C29958] text-xs">{review.role} — <span className="text-gray-500">{review.project}</span></p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 pt-12 border-t border-white/5">
          <p className="text-center text-gray-500 text-xs font-bold uppercase tracking-[0.4em] mb-10">Trusted By Leading Firms</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
             <span className="text-white font-serif text-2xl">DESIGN.CO</span>
             <span className="text-white font-serif text-2xl">ARCHITEX</span>
             <span className="text-white font-serif text-2xl">WOODLY</span>
             <span className="text-white font-serif text-2xl">BUILDER PRO</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;