import React from 'react';
import { motion } from 'framer-motion';
import { PencilLine, Drill, ShieldCheck, Truck } from 'lucide-react';

const steps = [
  {
    icon: <PencilLine size={32} />,
    title: "Design & Consultation",
    desc: "We start with your vision. Our designers create detailed 2D/3D blueprints, selecting the perfect wood grain and finish to match your interior.",
    image: "https://img.freepik.com/premium-photo/crafting-wood-project-with-precision-care_236854-60664.jpg"
  },
  {
    icon: <Drill size={32} />,
    title: "Precision Crafting",
    desc: "Our master artisans use a blend of traditional hand-tools and modern CNC machinery to ensure every joint is seamless and every cut is perfect.",
    image: "https://img.freepik.com/free-photo/close-up-engraving-art-tools_23-2149186738.jpg?semt=ais_hybrid&w=740&q=80"
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Quality Assurance",
    desc: "Every piece undergoes a rigorous 12-point inspection, checking for moisture content, grain alignment, and structural integrity before polishing.",
    image: "https://www.williamshandcrafted.com/wp-content/uploads/2023/11/William_Discussing_Woodcraft_with_Clients-9.webp"
  },
  {
    icon: <Truck size={32} />,
    title: "White-Glove Delivery",
    desc: "We don't just ship; we deliver. Our team ensures professional installation, leaving your space clean and your new furniture ready for use.",
    image: "https://t4.ftcdn.net/jpg/16/35/51/15/240_F_1635511506_gATxdAbQ8h3LuwXWahvHj5uchh9bwJz3.jpg"
  }
];

const ProcessSection = () => {
  return (
    <section className="py-24 bg-[#F9F7F2]">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl one  font-extralight text-[#1B2620] mb-4"
          >
            How Your <span className="text-[#C29958]">Vision</span> Takes Shape
          </motion.h2>
          <div className="w-24 h-1 bg-[#C29958] mx-auto mb-6"></div>
          <p className="text-gray-500 max-w-xl mx-auto italic">
            A seamless journey from raw timber to architectural excellence.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200 z-0" />

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`flex flex-col lg:flex-row items-center justify-between mb-24 last:mb-0 ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full lg:w-[45%] mb-8 lg:mb-0">
                <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                  <img src={step.image} alt={step.title} className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>
              </div>

              <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#1B2620] border-4 border-[#F9F7F2] rounded-full z-10 items-center justify-center text-[#C29958] font-bold shadow-lg">
                {index + 1}
              </div>

              <div className={`w-full lg:w-[45%] text-center ${index % 2 !== 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                <div className={`flex items-center gap-4 mb-4 justify-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                  <span className="p-3 bg-white rounded-lg shadow-sm text-[#C29958]">{step.icon}</span>
                  <h3 className="text-2xl font-serif text-[#1B2620]" style={{ fontFamily: "'Playfair Display', serif" }}>{step.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg one">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

<div className="px-6 py-20 bg-[#FDFCF9]">
  <motion.div 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
    className="group relative max-w-6xl mx-auto p-16 md:p-24 bg-[#1B2620] rounded-[2rem] text-center text-white shadow-2xl overflow-hidden"
  >
    <motion.div 
      animate={{ 
        x: ['-100%', '200%'],
      }}
      transition={{ 
        duration: 5, 
        repeat: Infinity, 
        ease: "linear",
        repeatDelay: 2 
      }}
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent skew-x-12 pointer-events-none"
    />

    <div className="relative z-10">
      <motion.span 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="one text-[#C29958] text-[10px] uppercase tracking-[0.6em] font-black block mb-6"
      >
        Limited Availability // 2026
      </motion.span>

      <h3 className="three text-4xl md:text-6xl text-white uppercase leading-tight mb-6">
        Ready to start <br /> 
        <span className="italic font-light text-[#C29958]">your legacy?</span>
      </h3>

      <p className="two text-white/40 max-w-md mx-auto mb-12 text-lg italic">
        "We treat every commission as an archive of time. Consult with our masters for a bespoke design audit."
      </p>

      <motion.button 
        onClick={() => window.location.href = '/contact'} 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative bg-[#C29958] text-[#1B2620] px-12 py-5 rounded-full font-black text-[10px] tracking-[0.3em] uppercase transition-colors duration-500 hover:bg-white overflow-hidden group/btn cursor-pointer"
      >
        <span className="relative z-10">Start Your Consultation</span>
        <motion.div 
          initial={{ y: '100%' }}
          whileHover={{ y: 0 }}
          className="absolute inset-0 bg-white"
        />
      </motion.button>
    </div>

    <div 
      className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"
    />
    
    <div className="absolute top-10 left-10 w-4 h-4 border-t border-l border-white/20" />
    <div className="absolute bottom-10 right-10 w-4 h-4 border-b border-r border-white/20" />
  </motion.div>
</div>

      </div>
    </section>
  );
};

export default ProcessSection;