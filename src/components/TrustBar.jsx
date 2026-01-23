import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Award, Users, Warehouse, Clock } from 'lucide-react';

const Counter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(latest.toFixed(0));
      }
    });
  }, [springValue]);

  return <span ref={ref}>0</span>;
};

const stats = [
  {
    icon: <Clock size={28} />,
    number: 15,
    suffix: "+",
    label: "Years of Heritage",
    desc: "Crafting timber since 2009"
  },
  {
    icon: <Warehouse size={28} />,
    number: 1200,
    suffix: "+",
    label: "Projects Completed",
    desc: "From homes to corporate offices"
  },
  {
    icon: <Users size={28} />,
    number: 450,
    suffix: "",
    label: "Happy Clients",
    desc: "Rated 4.9/5 for quality"
  },
  {
    icon: <Award size={28} />,
    number: 100,
    suffix: "%",
    label: "Seasoned Wood",
    desc: "Grade-A certified timber"
  }
];

const TrustBar = () => {
  return (
    <section className="bg-white py-16 border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="mb-4 p-4 bg-[#F9F7F2] rounded-full text-[#C29958]">
                {stat.icon}
              </div>

              <div className="text-3xl md:text-4xl font-serif font-bold text-[#1B2620] mb-1">
                <Counter value={stat.number} />
                <span className="text-[#C29958]">{stat.suffix}</span>
              </div>

              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-800 mb-2">
                {stat.label}
              </h4>
              <p className="text-xs one text-gray-400 leading-relaxed hidden md:block">
                {stat.desc}
              </p>

              {index % 2 === 0 && (
                <div className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 h-12 w-[1px] bg-gray-200" />
              )}
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default TrustBar;