import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "The attention to detail in the dovetail joinery is something I haven't seen in decades. It’s a quiet legacy.",
    author: "Eleanor Vance",
    role: "Lead Architect, Studio V",
    location: "London"
  },
  {
    quote: "They understood that for this penthouse, the wood needed to speak louder than the view. Liquid velvet.",
    author: "Marcus Thorne",
    role: "Interior Designer",
    location: "NYC"
  },
  {
    quote: "A rare combination of traditional soul and modern precision. The heartbeat of our home.",
    author: "Julian Arnault",
    role: "Private Commission",
    location: "Paris"
  }
];

const ClientTestimonial = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="bg-[#1B2620] relative h-[300vh]">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden">
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="absolute top-12 lg:top-20 z-50"
        >
          <span className="one text-[#C29958] tracking-[0.6em] uppercase text-[9px] font-black">
            Trusted by Visionaries
          </span>
        </motion.div>

        <div className="relative w-full max-w-5xl px-6 h-[400px] flex items-center justify-center">
          {TESTIMONIALS.map((t, i) => (
            <SingleTestimonial 
              key={i} 
              testimonial={t} 
              index={i} 
              total={TESTIMONIALS.length}
              progress={scrollYProgress} 
            />
          ))}
        </div>

        <div className="absolute bottom-12 w-full px-6 flex justify-around items-center opacity-10 pointer-events-none">
          {["Architectural Digest", "Vogue Living", "Elle Decor"].map((brand, b) => (
            <React.Fragment key={b}>
              <span className="three text-white text-xs md:text-sm uppercase tracking-[0.3em] whitespace-nowrap">{brand}</span>
              {b < 2 && <div className="w-1 h-1 rounded-full bg-[#C29958]" />}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
};

const SingleTestimonial = ({ testimonial, index, total, progress }) => {
  const start = index / total;
  const end = (index + 1) / total;
  
  const opacity = useTransform(progress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);
  
  const y = useTransform(progress, [start, start + 0.15, end - 0.15, end], [50, 0, 0, -50]);
  
  const scale = useTransform(progress, [start, start + 0.1, end - 0.1, end], [0.95, 1, 1, 1.05]);

  return (
    <motion.div 
      style={{ opacity, y, scale }}
      className="absolute inset-0 flex flex-col items-center justify-center text-center will-change-transform"
    >
      <div className="mb-8 opacity-20 text-[#C29958]">
        <Quote size={40} fill="currentColor" strokeWidth={0} />
      </div>

      <blockquote className="text-2xl md:text-5xl lg:text-6xl text-white font-serif italic leading-[1.2] tracking-tight mb-10 max-w-4xl">
        “{testimonial.quote}”
      </blockquote>

      <div className="flex flex-col items-center gap-4">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "40px" }}
          className="h-[1px] bg-[#C29958]" 
        />
        <div>
          <h4 className="three text-white text-xl md:text-4xl uppercase ">
            {testimonial.author}
          </h4>
          <p className="one text-[#C29958] text-[8px] uppercase tracking-[0.4em] mt-2">
            {testimonial.role} <span className="mx-2 text-white/20">/</span> {testimonial.location}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ClientTestimonial;