import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FluidInquiryForm = () => {
  const [focused, setFocused] = useState(null);

  return (
    <section className="bg-[#FDFCF9] py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-6 mb-4"
          >
            <div className="w-12 h-[1px] bg-[#C29958]" />
            <span className="one text-[#C29958] text-[10px] uppercase tracking-[0.4em] font-black">
              Formal Inquiry
            </span>
          </motion.div>
          <h2 className="three text-4xl md:text-5xl text-[#1B2620] uppercase leading-tight">
            Share the <span className="italic text-[#C29958]">Dimensions</span> of your vision
          </h2>
        </div>

        <form className="space-y-16 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <InputField 
              label="Your Name" 
              placeholder="Full Name" 
              id="name" 
              isFocused={focused === 'name'} 
              onFocus={() => setFocused('name')} 
              onBlur={() => setFocused(null)} 
            />
            <InputField 
              label="Email Address" 
              placeholder="email@example.com" 
              id="email" 
              isFocused={focused === 'email'} 
              onFocus={() => setFocused('email')} 
              onBlur={() => setFocused(null)} 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <InputField 
              label="Project Type" 
              placeholder="Residential / Commercial" 
              id="type" 
              isFocused={focused === 'type'} 
              onFocus={() => setFocused('type')} 
              onBlur={() => setFocused(null)} 
            />
            <InputField 
              label="Location" 
              placeholder="City, Country" 
              id="loc" 
              isFocused={focused === 'loc'} 
              onFocus={() => setFocused('loc')} 
              onBlur={() => setFocused(null)} 
            />
          </div>

          <div className="relative">
            <InputField 
              label="The Concept" 
              placeholder="Tell us about the space, the wood preference, and the intent..." 
              id="msg" 
              isTextArea 
              isFocused={focused === 'msg'} 
              onFocus={() => setFocused('msg')} 
              onBlur={() => setFocused(null)} 
            />
          </div>

          <div className="pt-10 flex justify-end">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden px-16 py-6 bg-[#1B2620] text-white rounded-full transition-all duration-500"
            >
              <div className="absolute inset-0 bg-[#C29958] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.19,1,0.22,1]" />
              <span className="relative z-10 one text-[11px] uppercase tracking-[0.5em] font-bold group-hover:text-[#1B2620]">
                Dispatch Inquiry
              </span>
            </motion.button>
          </div>
        </form>
      </div>
    </section>
  );
};

const InputField = ({ label, placeholder, id, isTextArea, isFocused, onFocus, onBlur }) => {
  return (
    <div className="relative w-full group">
      <motion.label 
        animate={{ 
          y: isFocused ? -20 : 0, 
          color: isFocused ? '#C29958' : '#1B262040' 
        }}
        className="absolute top-0 left-0 one text-[9px] uppercase tracking-widest font-bold pointer-events-none"
      >
        {label}
      </motion.label>

      {isTextArea ? (
        <textarea
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={isFocused ? "" : placeholder}
          className="w-full bg-transparent border-none outline-none pt-4 pb-2 text-[#1B2620] three text-xl md:text-2xl placeholder:text-gray-200 placeholder:italic resize-none min-h-[120px]"
        />
      ) : (
        <input
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={isFocused ? "" : placeholder}
          className="w-full bg-transparent border-none outline-none pt-4 pb-2 text-[#1B2620] three text-xl md:text-2xl placeholder:text-gray-200 placeholder:italic"
        />
      )}

      <div className="relative w-full h-[1px] bg-black/5 mt-1">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: isFocused ? '100%' : '0%' }}
          className="absolute inset-0 bg-[#C29958] origin-left"
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
        />
      </div>
    </div>
  );
};

export default FluidInquiryForm;