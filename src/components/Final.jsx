import React from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const FinalInquiry = () => {
  return (
    <section id="contact" className="py-24 bg-[#F9F7F2]">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex flex-col lg:flex-row">
          
          {/* Left Side: Contact Info & Branding */}
          <div className="lg:w-1/3 bg-[#1B2620] p-12 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-serif mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Start Your <br /> <span className="text-[#C29958]">Timber Journey</span>
              </h2>
              <p className="text-gray-400 mb-12 leading-relaxed">
                Whether it's a single custom door or a complete interior project, our master craftsmen are ready to assist.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-lg text-[#C29958]">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Call Us</p>
                    <p className="text-lg font-medium">+1 (234) 567-890</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-lg text-[#C29958]">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Email</p>
                    <p className="text-lg font-medium">hello@woodcraft.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-lg text-[#C29958]">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Factory HQ</p>
                    <p className="text-sm text-gray-400">123 Industrial Ave, Wood Harbor, NY</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.a
              href="#"
              whileHover={{ x: 10 }}
              className="mt-12 flex items-center gap-3 text-[#C29958] font-bold tracking-widest text-sm uppercase group"
            >
              <MessageCircle size={20} className="group-hover:animate-bounce" />
              Chat on WhatsApp
            </motion.a>
          </div>

          <div className="lg:w-2/3 p-12">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-gray-50 border-b-2 border-gray-200 py-3 focus:border-[#C29958] outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+1 000 000 000" 
                  className="w-full bg-gray-50 border-b-2 border-gray-200 py-3 focus:border-[#C29958] outline-none transition-colors"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Project Type</label>
                <select className="w-full bg-gray-50 border-b-2 border-gray-200 py-3 focus:border-[#C29958] outline-none transition-colors appearance-none cursor-pointer">
                  <option>Custom Furniture</option>
                  <option>Designer Doors</option>
                  <option>Interior Wall Paneling</option>
                  <option>Bulk Plywood Inquiry</option>
                </select>
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Project Brief</label>
                <textarea 
                  rows="4" 
                  placeholder="Tell us about your requirements..." 
                  className="w-full bg-gray-50 border-b-2 border-gray-200 py-3 focus:border-[#C29958] outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <div className="md:col-span-2 mt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full md:w-max bg-[#C29958] text-white px-12 py-5 rounded-full font-bold flex items-center justify-center gap-3 shadow-lg hover:bg-[#1B2620] transition-all duration-300"
                >
                  SEND INQUIRY
                  <Send size={18} />
                </motion.button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FinalInquiry;