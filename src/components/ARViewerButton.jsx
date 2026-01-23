import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize, X, Move, BoxSelect, Smartphone, Zap } from 'lucide-react';

const ARViewer = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const WOOD_MODEL_URL = "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/SheenChair/glTF-Binary/SheenChair.glb";

  return (
    <section className="py-12 md:py-24 bg-[#FDFCF9] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-10 md:mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="one text-[#C29958] text-[10px] uppercase tracking-[0.6em] font-black block mb-4"
          >
            Spatial Visualization
          </motion.span>
          <h2 className="three text-3xl md:text-6xl text-[#1B2620] uppercase leading-tight md:leading-none">
            Digital <span className="italic font-light serif text-[#C29958]">Craftsmanship</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto relative group">
          
          <motion.div 
            layout
            className={`relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-[#F4F4F4] border border-gray-200 shadow-2xl transition-all duration-1000 ease-[0.19, 1, 0.22, 1] ${
              isExpanded ? 'h-[80vh] md:h-[85vh]' : 'h-[400px] md:h-[550px]'
            }`}
          >
            <model-viewer
              src={WOOD_MODEL_URL}
              alt="Handcrafted Wood Chair"
              auto-rotate
              camera-controls
              ar
              ar-modes="webxr quick-look scene-viewer"
              shadow-intensity="1.5"
              shadow-softness="0.5"
              exposure="1"
              environment-image="neutral"
              auto-rotate-delay="0"
              rotation-per-second="20deg"
              style={{ 
                width: '100%', 
                height: '100%', 
                backgroundColor: 'transparent',
              }}
            >
              <button 
                slot="ar-button" 
                className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 bg-[#1B2620] text-white px-6 md:px-10 py-4 md:py-5 rounded-full one text-[9px] md:text-[10px] tracking-[0.2em] uppercase flex items-center gap-3 md:gap-4 shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:bg-[#C29958] transition-all duration-500 whitespace-nowrap"
              >
                <Smartphone size={16} />
                Project into your room
              </button>
            </model-viewer>

            <div className="absolute top-6 left-6 md:top-10 md:left-10 pointer-events-none z-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 bg-[#C29958] rounded-full animate-pulse" />
                <h3 className="three text-lg md:text-xl text-[#1B2620] uppercase ">Live 3D Preview</h3>
              </div>
              <p className="two text-[8px] md:text-[9px] text-gray-400 uppercase tracking-widest flex items-center gap-2 font-bold">
                <Move size={12} /> Click and Drag to Rotate
              </p>
            </div>

            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="absolute top-6 right-6 md:top-10 md:right-10 w-10 h-10 md:w-14 md:h-14 bg-white/90 backdrop-blur-xl rounded-full text-[#1B2620] flex items-center justify-center hover:bg-white transition-all shadow-xl border border-white/20 z-20 group-hover:scale-110 duration-500"
            >
              {isExpanded ? <X size={18} md:size={20} /> : <Maximize size={18} md:size={20} />}
            </button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-12">
            {[
              { icon: <BoxSelect size={20} />, title: "Precision Scale", desc: "1:1 Real-world dimensions." },
              { icon: <Zap size={20} />, title: "Hyper-Real", desc: "Physically based wood rendering." },
              { icon: <Smartphone size={20} />, title: "Web-AR Native", desc: "Instant mobile projection." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white border border-gray-100 hover:border-[#C29958]/30 transition-all duration-500"
              >
                <div className="text-[#C29958] mb-4">{feature.icon}</div>
                <h4 className="one text-base md:text-lg text-[#1B2620] uppercase mb-1">{feature.title}</h4>
                <p className="two text-[10px] md:text-xs text-gray-400 italic">"{feature.desc}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ARViewer;