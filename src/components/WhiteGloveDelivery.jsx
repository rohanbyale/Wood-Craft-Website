import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, Home, Sparkles, CheckCircle2 } from 'lucide-react';

const DELIVERY_STEPS = [
  {
    id: "scheduling",
    title: "White Glove Scheduling",
    desc: "Our concierge contacts you 48 hours in advance to secure a precise 2-hour delivery window that fits your calendar.",
    icon: <Truck size={24} />,
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200"
  },
  {
    id: "placement",
    title: "In-Home Placement",
    desc: "Our two-person specialist team carries your masterpiece into the exact room of your choice—no heavy lifting required.",
    icon: <Home size={24} />,
    img: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1200"
  },
  {
    id: "assembly",
    title: "Expert Assembly",
    desc: "We handle the full installation, including debris removal. Your space is left exactly as we found it, only better.",
    icon: <Sparkles size={24} />,
    img: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=1200"
  }
];

const WhiteGloveDelivery = () => {
  const [activeStep, setActiveStep] = useState(DELIVERY_STEPS[0]);

  return (
    <section className="bg-[#FDFCF9] py-12 md:py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="mb-8 md:mb-10 text-center lg:text-left">
              <span className="three text-[#C29958] tracking-[0.3em] md:tracking-[0.4em] uppercase text-sm md:text-lg block">
                Seamless Logistics
              </span>
              <h2 className="three text-4xl md:text-5xl lg:text-6xl text-[#1B2620] uppercase mt-4 leading-tight">
                Effortless <br className="hidden md:block" /> <span className="italic text-[#C29958]">Arrival</span>
              </h2>
            </div>

            <div className="space-y-3 md:space-y-4">
              {DELIVERY_STEPS.map((step) => (
                <div 
                  key={step.id}
                  onMouseEnter={() => setActiveStep(step)}
                  onClick={() => setActiveStep(step)}
                  className={`p-5 md:p-6 lg:p-8 rounded-[24px] md:rounded-[32px] cursor-pointer transition-all duration-500 border-2 ${
                    activeStep.id === step.id 
                    ? "bg-white border-[#C29958] shadow-xl shadow-[#1B2620]/5" 
                    : "bg-transparent border-transparent hover:bg-white/50"
                  }`}
                >
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className={`p-3 md:p-4 rounded-xl md:rounded-2xl shrink-0 transition-colors duration-500 ${
                      activeStep.id === step.id ? "bg-[#C29958] text-white" : "bg-gray-100 text-gray-400"
                    }`}>
                      {React.cloneElement(step.icon, { size: 20, className: "md:w-6 md:h-6" })}
                    </div>
                    <div>
                      <h3 className={`three text-lg md:text-xl lg:text-2xl uppercase mb-1 md:mb-2 transition-colors duration-500 ${
                        activeStep.id === step.id ? "text-[#1B2620]" : "text-gray-400"
                      }`}>
                        {step.title}
                      </h3>
                      <AnimatePresence mode="wait">
                        {activeStep.id === step.id && (
                          <motion.p 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="two text-gray-500 text-xs md:text-sm leading-relaxed max-w-sm"
                          >
                            {step.desc}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 md:mt-10 flex items-center justify-center lg:justify-start gap-3 md:pl-8 text-[#C29958]">
               <CheckCircle2 size={16} className="md:w-[18px] md:h-[18px]" />
               <span className="one text-[8px] md:text-[10px] uppercase font-bold tracking-widest">
                 Insurance & Damage Protection Included
               </span>
            </div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2 h-[250px] sm:h-[350px] lg:h-[500px]">
            <div className="relative w-full h-full rounded-[24px] md:rounded-[40px] overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeStep.img}
                  src={activeStep.img}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full object-cover"
                  alt="Delivery visualization"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B2620]/20 to-transparent" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhiteGloveDelivery;