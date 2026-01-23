import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';

const WORK_VIDEOS = [
  { id: 1, title: "Life", src: "/life.mp4", size: "large" },
  { id: 2, title: "Hand Rubbed", src: "https://www.pexels.com/download/video/20663034/", size: "small" },
  { id: 3, title: "Raw Material", src: "https://www.pexels.com/download/video/4370037/", size: "small" },
  { id: 4, title: "Drafting", src: "https://www.pexels.com/download/video/5972124/", size: "medium" },
  { id: 5, title: "The Cut", src: "https://www.pexels.com/download/video/8856316/", size: "small" },
  { id: 6, title: "Refining", src: "https://www.pexels.com/download/video/5973237/", size: "small" },
];

const WorkshopBento = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const mouse = { x: useMotionValue(0), y: useMotionValue(0) };

  const smoothX = useSpring(mouse.x, { stiffness: 250, damping: 30, mass: 0.5 });
  const smoothY = useSpring(mouse.y, { stiffness: 250, damping: 30, mass: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.x.set(e.clientX);
      mouse.y.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#080A09] py-24 overflow-hidden cursor-none">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-12 h-[1px] bg-[#C29958]" />
              <span className="text-[#C29958] tracking-[0.5em] uppercase text-[10px] font-bold">Atelier Process</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl lg:text-[110px] text-white font-serif uppercase leading-[0.8] three"
            >
              The <span className="italic font-light opacity-50 text-[#C29958]">Art</span> <br /> 
              Of Maker
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-white/40 text-sm two uppercase tracking-widest font-light max-w-[200px] leading-relaxed"
          >
            A visual documentation of ancestral technique.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[240px] md:auto-rows-[320px]">
          {WORK_VIDEOS.map((video, index) => (
            <BentoItem 
              key={video.id} 
              video={video} 
              index={index} 
              onActive={setActiveVideo} 
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        <motion.div
          style={{ left: smoothX, top: smoothY, translateX: "-50%", translateY: "-50%" }}
          className="fixed pointer-events-none z-[100] flex items-center justify-center"
        >
          <motion.div 
            animate={{ scale: activeVideo ? 1.5 : 1 }}
            className="w-4 h-4 rounded-full bg-[#C29958] shadow-[0_0_20px_rgba(194,153,88,0.4)]" 
          />
          
          {activeVideo && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 40 }}
              exit={{ opacity: 0, x: 20 }}
              className="absolute left-0 whitespace-nowrap"
            >
              <div className="flex flex-col">
                <span className="text-[10px] text-[#C29958] font-bold tracking-[0.3em] uppercase mb-1">Explore</span>
                <span className="text-xl text-white font-serif italic tracking-tight uppercase">{activeVideo.title}</span>
              </div>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 pointer-events-none z-50 bg-gradient-to-b from-transparent via-transparent to-[#080A09] opacity-60" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.15] mix-blend-overlay z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
};

const BentoItem = ({ video, index, onActive }) => {
  const itemRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 120, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 120, damping: 20 });

  const gridSpans = {
    large: "md:col-span-8 md:row-span-2",
    medium: "md:col-span-4 md:row-span-2",
    small: "md:col-span-4 md:row-span-1"
  };

  return (
    <motion.div
      ref={itemRef}
      onMouseMove={(e) => {
        const rect = itemRef.current.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseEnter={() => {
        setIsHovered(true);
        onActive(video);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        onActive(null);
        x.set(0); y.set(0);
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      style={{ rotateX, rotateY, perspective: 1000 }}
      className={`relative rounded-[2rem] overflow-hidden group border border-white/5 bg-[#121413] shadow-2xl ${gridSpans[video.size] || "md:col-span-4"}`}
    >
      <motion.video
        animate={{ 
            scale: isHovered ? 1.08 : 1.02,
            filter: isHovered ? "grayscale(0%) brightness(1)" : "grayscale(50%) brightness(0.6)"
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        autoPlay loop muted playsInline
        className="w-full h-full object-cover origin-center"
        src={video.src}
      />

      <div className="absolute top-6 left-6 z-20">
        <span className="text-[10px] font-bold text-white/20 group-hover:text-[#C29958] transition-colors duration-500 tracking-tighter">
          0{index + 1}
        </span>
      </div>

      <motion.div 
        animate={{ opacity: isHovered ? 0.3 : 0 }}
        className="absolute inset-0 bg-gradient-to-tr from-[#C29958]/20 to-transparent pointer-events-none"
      />
    </motion.div>
  );
};

export default WorkshopBento;