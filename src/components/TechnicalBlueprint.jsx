import React from 'react';
import { motion } from 'framer-motion';
import { Ruler, Pencil } from 'lucide-react';

const TechnicalBlueprint = () => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 2.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };

  return (
    <section className="bg-[#1B2620] py-20 md:py-32 overflow-hidden relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#C29958 0.5px, transparent 0.5px)`, strokeWidth: '1', backgroundSize: '30px 30px' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          <div className="w-full lg:w-5/12 space-y-6 md:space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <span className="three text-[#C29958] tracking-[0.3em] md:tracking-widest uppercase text-sm md:text-lg block">
                Engineering Precision
              </span>
              <h2 className="three text-4xl md:text-6xl text-white uppercase leading-tight">
                Architectural <br className="hidden md:block" /> <span className="italic text-[#C29958]">Integrity</span>
              </h2>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="two text-gray-400 text-base md:text-lg leading-relaxed font-light max-w-xl mx-auto lg:mx-0"
            >
              Every joint is calculated to a 0.5mm tolerance. We utilize CAD modeling to simulate 
              structural stress points, ensuring that the cantilevered edges remain stable for 
              decades of use.
            </motion.p>

            <div className="grid grid-cols-2 gap-4 md:gap-8 pt-4 md:pt-6">
              {[
                { label: "Tolerance", val: "± 0.5mm", icon: <Ruler size={16}/> },
                { label: "Drafting", val: "AutoCAD 3D", icon: <Pencil size={16}/> }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + (i * 0.1) }}
                  className="space-y-1 md:space-y-2"
                >
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-[#C29958]">
                    {stat.icon}
                    <span className="one text-[8px] md:text-[10px] uppercase tracking-widest">{stat.label}</span>
                  </div>
                  <p className="two text-xl md:text-2xl text-white uppercase">{stat.val}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-6/12 relative mt-10 lg:mt-0">
            <motion.svg
              width="100%"
              height="100%"
              viewBox="0 0 600 400"
              preserveAspectRatio="xMidYMid meet"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="drop-shadow-[0_0_15px_rgba(194,153,88,0.2)] max-w-lg mx-auto lg:max-w-none"
            >
              <motion.path
                d="M 50 150 L 550 150 L 520 120 L 80 120 Z"
                fill="none"
                stroke="#C29958"
                strokeWidth="1.5"
                variants={draw}
                custom={1}
              />
              <motion.path
                d="M 120 150 L 120 350 L 150 350 L 150 150"
                fill="none"
                stroke="#C29958"
                strokeWidth="1.5"
                variants={draw}
                custom={2}
              />
              <motion.path
                d="M 450 150 L 450 350 L 480 350 L 480 150"
                fill="none"
                stroke="#C29958"
                strokeWidth="1.5"
                variants={draw}
                custom={3}
              />
              <motion.path
                d="M 50 100 L 550 100"
                fill="none"
                stroke="white"
                strokeOpacity="0.3"
                strokeWidth="1"
                strokeDasharray="5,5"
                variants={draw}
                custom={4}
              />
              <motion.text x="270" y="90" fill="white" fillOpacity="0.5" className="one text-[12px]">2200mm</motion.text>
            </motion.svg>
            
            <motion.div 
              initial={{ scale: 2, opacity: 0, rotate: -20 }}
              whileInView={{ scale: 1, opacity: 1, rotate: -15 }}
              transition={{ delay: 2, type: 'spring' }}
              className="absolute -bottom-4 right-0 md:bottom-10 md:right-10 border-2 md:border-4 border-[#C29958]/40 px-4 md:px-6 py-1 md:py-2 rounded-lg md:rounded-xl text-[#C29958]/40 uppercase two text-xl md:text-2xl pointer-events-none"
            >
              Approved
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechnicalBlueprint;