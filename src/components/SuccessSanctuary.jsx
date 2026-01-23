import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const SuccessSanctuary = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-[#FDFCF9] flex items-center justify-center overflow-hidden"
    >
      {/* Background Ambience: Moving Grain */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Decorative Golden Ring */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
        className="absolute w-[500px] h-[500px] border border-[#C29958]/10 rounded-full"
      />

      <div className="relative z-10 text-center px-6">
        {/* Animated Icon */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex justify-center mb-12"
        >
          <div className="w-20 h-20 rounded-full border border-[#C29958] flex items-center justify-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring", stiffness: 200 }}
            >
              <Check className="text-[#C29958]" size={32} strokeWidth={1} />
            </motion.div>
          </div>
        </motion.div>

        {/* The Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <span className="one text-[#C29958] tracking-[0.5em] uppercase text-[10px] font-black block mb-6">
            Transmission Received
          </span>
          <h2 className="three text-5xl md:text-7xl text-[#1B2620] uppercase leading-none mb-8">
            Your vision is <br /> <span className="italic text-[#C29958]">In the Studio</span>
          </h2>
          <p className="two text-gray-400 text-lg italic max-w-md mx-auto leading-relaxed">
            Julian is currently reviewing your inquiry. We typically respond within 48 hours of our local studio time.
          </p>
        </motion.div>

        {/* Return Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={() => window.location.href = '/'} // Or use your router
          className="mt-16 group flex items-center gap-4 mx-auto"
        >
          <div className="w-10 h-[1px] bg-[#1B2620]/20 group-hover:w-16 group-hover:bg-[#C29958] transition-all duration-500" />
          <span className="one text-[10px] uppercase tracking-[0.4em] font-bold text-[#1B2620]">
            Return to Archive
          </span>
        </motion.button>
      </div>

      {/* Subtle Floating Elements (Dust/Particles) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -100, 0],
              x: [0, 50, 0],
              opacity: [0, 0.4, 0]
            }}
            transition={{ 
              duration: 10 + i * 2, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute w-1 h-1 bg-[#C29958] rounded-full"
            style={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%` 
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default SuccessSanctuary;