import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Leaf, Ruler, Diamond } from 'lucide-react';

const PILLARS = [
  {
    title: "Sustainability",
    subtitle: "FSC Certified Timber",
    desc: "Every piece begins in a responsibly managed forest. We track our oak from the sapling to your sanctuary.",
    icon: <Leaf size={24} strokeWidth={1.5} />,
  },
  {
    title: "Precision",
    subtitle: "Zero-Metal Joinery",
    desc: "Ancient Japanese techniques where wood locks into wood. No screws, no glue, just mathematical tension.",
    icon: <Ruler size={24} strokeWidth={1.5} />,
  },
  {
    title: "Rarity",
    subtitle: "Limited Commissions",
    desc: "To maintain quality, we only accept 12 commissions per year. Each piece is numbered and signed.",
    icon: <Diamond size={24} strokeWidth={1.5} />,
  }
];

const ValuesGrid = () => {
  return (
    <section className="relative py-16 lg:py-24 bg-[#0D110F] overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="max-w-3xl mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="h-[1px] w-8 bg-[#C29958]" />
            <span className="text-[#C29958] tracking-[0.4em] uppercase text-[10px] font-bold">
              Our Philosophy
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-[70px] text-white font-serif uppercase leading-[0.9] tracking-tighter"
          >
            The Three <span className="italic font-light text-[#C29958]">Pillars</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map((pillar, index) => (
            <ValueCard key={index} pillar={pillar} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ValueCard = ({ pillar, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set( (e.clientX - rect.left) / rect.width - 0.5 );
    y.set( (e.clientY - rect.top) / rect.height - 0.5 );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative group"
    >
      <div className="relative h-full p-8 rounded-[30px] bg-[#161B18] border border-white/[0.05] transition-all duration-500 group-hover:border-[#C29958]/30">
        
        <div className="relative z-10 h-full flex flex-col">
          <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#C29958] mb-8 transition-colors duration-500 group-hover:bg-[#C29958] group-hover:text-[#1B2620]">
            {pillar.icon}
          </div>

          <div style={{ transform: "translateZ(30px)" }}>
            <span className="text-[#C29958] text-[9px] uppercase tracking-[0.2em] font-bold block mb-2 opacity-60">
              {pillar.subtitle}
            </span>
            <h3 className="text-2xl lg:text-3xl text-white font-serif uppercase mb-4 tracking-tight">
              {pillar.title}
            </h3>
            <p className="text-white/40 text-sm leading-relaxed font-light italic group-hover:text-white/60 transition-colors">
              {pillar.desc}
            </p>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <span className="text-white/5 font-serif italic text-3xl group-hover:text-[#C29958]/10 transition-colors">
              0{index + 1}
            </span>
            <div className="w-6 h-6 rounded-full border border-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
               <div className="w-1 h-1 bg-[#C29958] rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ValuesGrid;