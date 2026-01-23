import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';

const CATEGORIES = ["All", "Residential", "Commercial", "Seating", "Tables"];

const PROJECTS = [
  { id: 1, title: "Manhattan Loft", category: "Residential", size: "large", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200" },
  { id: 2, title: "The Office Lounge", category: "Commercial", size: "small", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800" },
  { id: 3, title: "Sculptural Oak", category: "Seating", size: "medium", img: "https://www.luxfurniture.com.cy/cdn/shop/files/skampo-mpar-bs-leyko-kouzina.jpg?v=1758531439" },
  { id: 4, title: "The Boardroom", category: "Tables", size: "large", img: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1200" },
  { id: 5, title: "Minimalist Studio", category: "Residential", size: "medium", img: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=800" },
  { id: 6, title: "Heritage Suite", category: "Commercial", size: "small", img: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800" },
];

const ProjectSection = () => {
  const [filter, setFilter] = useState("All");
  const filteredProjects = PROJECTS.filter(p => filter === "All" || p.category === filter);

  return (
    <section className="bg-[#FDFCF9] py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="one text-[#C29958] text-[10px] uppercase tracking-[0.5em] font-black block mb-4"
            >
              Selected Archive
            </motion.span>
            <h2 className="three text-5xl md:text-7xl text-[#1B2620] uppercase leading-[0.9]">
              Curated <br /> <span className="italic serif font-light text-[#C29958]">Collections</span>
            </h2>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative group one text-[10px] uppercase tracking-[0.3em] font-bold transition-colors duration-500 pb-2 ${
                  filter === cat ? "text-[#1B2620]" : "text-[#1B2620]/30 hover:text-[#1B2620]"
                }`}
              >
                {cat}
                {filter === cat && (
                  <motion.div 
                    layoutId="underline"
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-[#C29958]"
                  />
                )}
              </button>
            ))}
          </nav>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-12 gap-y-24 md:gap-x-12 items-start"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? 0 : 40, index % 2 === 0 ? -100 : -40]);
  const smoothY = useSpring(y, { stiffness: 50, damping: 20 });

  const gridClasses = {
    large: "md:col-span-8 aspect-[16/10]",
    medium: "md:col-span-6 aspect-square",
    small: "md:col-span-4 aspect-[3/4]"
  };

  return (
    <motion.div
      layout
      ref={cardRef}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
      className={`relative group cursor-none ${gridClasses[project.size] || "md:col-span-6"}`}
    >
      <motion.div style={{ y: smoothY }} className="w-full h-full will-change-transform">
        
        <div className="relative w-full h-full overflow-hidden rounded-[2px] shadow-sm group-hover:shadow-2xl transition-all duration-1000">
          <img 
            src={project.img} 
            alt={project.title}
            className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 scale-[1.05] group-hover:scale-100 transition-all duration-[2s] cubic-bezier(0.16, 1, 0.3, 1)"
          />
          
          <div className="absolute inset-0 bg-[#1B2620]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 backdrop-blur-[2px]" />

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
             <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-md">
                <span className="one text-white text-[8px] uppercase tracking-widest">Explore</span>
             </div>
          </div>
        </div>

        <div className="mt-8 flex justify-between items-start">
          <div>
            <h3 className="three text-2xl text-[#1B2620] uppercase mb-1">{project.title}</h3>
            <p className="one text-[#C29958] text-[9px] uppercase tracking-[0.2em] font-black">{project.category}</p>
          </div>
          <div className="h-[1px] w-8 bg-[#1B2620]/20 mt-4 group-hover:w-16 group-hover:bg-[#C29958] transition-all duration-700" />
        </div>

      </motion.div>
    </motion.div>
  );
};

export default ProjectSection;