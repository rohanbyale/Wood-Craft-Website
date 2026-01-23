import React from 'react';
import { motion } from 'framer-motion';

const TEAM = [
  {
    name: "Lukas Weber",
    role: "Master Joiner",
    tool: "Japanese Pull Saw",
    image: "https://images.unsplash.com/photo-1647538044240-ab6ed1b8056a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Elena Rossi",
    role: "Finishing Specialist",
    tool: "Organic Hardwax",
    image: "https://plus.unsplash.com/premium_photo-1683120712578-135b51d7a147?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Marcus Thorne",
    role: "Lead Designer",
    tool: "Drafting Compass",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800",
  }
];

const ArtisanTeam = () => {
  return (
    <section className="py-12 lg:py-16 bg-[#FDFCF9] overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-8 border-b border-black/[0.03] pb-6">
          <div className="max-w-xl">
            <span className="one text-[#C29958] tracking-[0.4em] uppercase text-[9px] font-bold">The Collective</span>
            <h2 className="three text-3xl lg:text-4xl text-[#1B2620] uppercase leading-none mt-2">
              Human <span className="italic text-[#C29958]">Heritage</span>
            </h2>
          </div>
          <p className="two text-gray-400 max-w-[200px] text-[10px] leading-relaxed italic mt-4 md:mt-0">
            "Senses extended into the material."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {TEAM.map((member, index) => (
            <ArtisanCard key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ArtisanCard = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative aspect-square overflow-hidden rounded-tl-4xl rounded border border-black/5 bg-gray-50">
        
        <motion.img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-[#1B2620]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center justify-center p-4 text-center backdrop-blur-sm">
          <motion.div className="border-y border-white/10 py-2 w-full max-w-[140px]">
            <p className="one text-[#C29958] text-[8px] uppercase tracking-[0.2em] mb-0.5 font-bold">Tool</p>
            <p className="two text-white text-base uppercase tracking-tight leading-tight">{member.tool}</p>
          </motion.div>
        </div>
      </div>

      <div className="mt-4 text-center">
        <h4 className="two text-lg text-[#1B2620] uppercase mb-0.5  leading-none">{member.name}</h4>
        <div className="flex items-center justify-center gap-2">
          <span className="one text-[#C29958] text-[8px] uppercase tracking-[0.2em] font-black">
            {member.role}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ArtisanTeam;