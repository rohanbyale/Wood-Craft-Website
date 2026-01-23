import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const categories = [
  {
    title: 'Luxury Furniture',
    desc: 'Bespoke tables, chairs, and cabinets crafted for modern living.',
    image: 'https://plus.unsplash.com/premium_photo-1686782503098-c561c27dded7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    gridSpan: 'md:col-span-2 md:row-span-2',
  },
  {
    title: 'Designer Doors',
    desc: 'Solid wood and veneered doors for a grand entrance.',
    image: 'https://images.unsplash.com/photo-1620887147081-68a8eb3cc66c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    gridSpan: 'md:col-span-1 md:row-span-1',
  },
  {
    title: 'Premium Plywood',
    desc: 'High-grade commercial and marine plywood for durability.',
    image: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=800&auto=format&fit=crop',
    gridSpan: 'md:col-span-1 md:row-span-1',
  },
  {
    title: 'Custom Interiors',
    desc: 'Wall paneling and modular solutions tailored to your space.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop',
    gridSpan: 'md:col-span-2 md:row-span-1',
  },
];

const CategoryCard = ({ category }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className={`relative overflow-hidden rounded-xl group cursor-pointer ${category.gridSpan} h-[300px] md:h-auto`}
  >
    <motion.img
      src={category.image}
      alt={category.title}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

    <div className="absolute bottom-0 left-0 p-8 w-full">
      <div className="flex justify-between items-end">
        <div>
          <h3 className="text-white text-2xl md:text-3xl font-serif mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            {category.title}
          </h3>
          <p className="text-gray-300 text-sm max-w-[250px] opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
            {category.desc}
          </p>
        </div>
        <div className="bg-[#C29958] p-3 rounded-full text-white transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <ArrowUpRight size={24} />
        </div>
      </div>
    </div>
  </motion.div>
);

const ProductCategories = () => {
  return (
    <section className="py-24 bg-[#F9F7F2] px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="three text-[#1B2620] text-4xl md:text-8xl  mb-4" >
              Our Excellence in <span className="text-[#C29958]">Woodwork</span>
            </h2>
            <div className="w-20 h-1 bg-[#C29958] mb-6"></div>
            <p className="one text-gray-600 leading-relaxed">
              Explore our curated selection of timber products, ranging from raw structural materials 
              to finely finished interior showpieces.
            </p>
          </div>
          <button className="hidden md:block text-[#1B2620] font-bold border-b-2 border-[#C29958] pb-1 hover:text-[#C29958] transition-colors">
            VIEW ALL CATEGORIES
          </button>
        </div>

        <div className="one grid grid-cols-1 md:grid-cols-4 gap-6 h-auto md:h-[700px]">
          {categories.map((cat, index) => (
            <CategoryCard key={index} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;