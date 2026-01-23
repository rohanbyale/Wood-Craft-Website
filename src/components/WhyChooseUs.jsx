import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Thermometer, PenTool } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck className="text-[#C29958]" size={32} />,
    title: "Lifetime Durability",
    desc: "We use seasoned, Grade-A timber treated against termites and moisture for generations of use."
  },
  {
    icon: <PenTool className="text-[#C29958]" size={32} />,
    title: "Bespoke Engineering",
    desc: "Every cut is precise. We blend traditional joinery with modern CNC technology for flawless finish."
  },
  {
    icon: <Zap className="text-[#C29958]" size={32} />,
    title: "Ethically Sourced",
    desc: "Sustainability is at our core. We source wood from certified forests to protect our green cover."
  },
  {
    icon: <Thermometer className="text-[#C29958]" size={32} />,
    title: "Climate Resistant",
    desc: "Our products are tested for extreme weather, ensuring they don't warp or crack over time."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-[#1B2620] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1608613304899-ea8098577e38?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Our Workshop" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute bottom-6 right-6 bg-white p-6 rounded-xl shadow-xl">
                <p className="text-4xl font-serif text-[#1B2620] font-bold">25+</p>
                <p className="text-gray-500 text-sm uppercase tracking-widest">Years of Craft</p>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-[#C29958] rounded-2xl z-0 opacity-30"></div>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#C29958] font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Our Advantage</span>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 two ">
                Why Experts Choose <br /> <span className="italic text-[#C29958]">Our Woodwork.</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ backgroundColor: "rgba(194, 153, 88, 0.1)" }}
                  className="p-6 rounded-xl border border-white/10 transition-colors duration-300 group"
                >
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h4 className="one text-white text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="two text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;