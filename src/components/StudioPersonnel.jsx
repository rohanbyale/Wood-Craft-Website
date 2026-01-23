import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const StudioPersonnel = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-GB', { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit',
      hour12: false,
      timeZone: 'Europe/Berlin' 
    });
  };

  return (
    <section className="bg-[#FDFCF9] py-20 border-t border-black/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-white rounded-[32px] p-8 md:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.02)] border border-black/5">
          
          <div className="flex items-center gap-8">
            <div className="relative group">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden grayscale border border-black/10 transition-all duration-700 group-hover:grayscale-0">
                <img 
                  src="https://st5.depositphotos.com/2760050/74592/i/450/depositphotos_745925384-stock-photo-businessman-portrait-outdoor-smiling-mature.jpg" 
                  alt="Studio Manager"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-2 right-2 w-4 h-4 bg-[#C29958] rounded-full border-4 border-white"
              />
            </div>

            <div>
              <span className="one text-[#C29958] text-[9px] uppercase tracking-[0.4em] font-bold block mb-1">
                Studio Liaison
              </span>
              <h3 className="three text-2xl md:text-3xl text-[#1B2620] uppercase">
                Julian <span className="italic">Kauffman</span>
              </h3>
              <p className="two text-gray-400 text-sm italic mt-1">
                "I personally review every vision that reaches us."
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1B2620] animate-pulse" />
              <span className="one text-[10px] uppercase tracking-[0.5em] text-[#1B2620] font-black">
                Black Forest HQ
              </span>
            </div>
            
            <motion.div 
              key={time.getSeconds()}
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              className="three text-4xl md:text-5xl text-[#1B2620] "
            >
              {formatTime(time)}
            </motion.div>
            
            <span className="one text-[9px] uppercase tracking-widest text-gray-400">
              Local Studio Time (CET)
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StudioPersonnel;