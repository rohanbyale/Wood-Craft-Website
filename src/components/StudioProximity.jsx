import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { Compass, Globe, Crosshair } from 'lucide-react';

const StudioProximity = () => {
  const [distance, setDistance] = useState(null);
  const [status, setStatus] = useState('idle');
  const [coords, setCoords] = useState({ lat: "00.0000", lon: "00.0000" });
  const containerRef = useRef(null);

  const studioCoords = { lat: 48.4632, lon: 8.4116 };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const mapPathLength = useTransform(smoothProgress, [0, 0.35], [0, 1]);
  const mapOpacity = useTransform(smoothProgress, [0.35, 0.45], [1, 0]);
  const mapScale = useTransform(smoothProgress, [0.35, 0.5], [1, 1.1]);
  
  const contentY = useTransform(smoothProgress, [0.45, 0.7], [100, 0]);
  const contentOpacity = useTransform(smoothProgress, [0.45, 0.6], [0, 1]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (status === 'locating') {
        setCoords({
          lat: (Math.random() * 180 - 90).toFixed(4),
          lon: (Math.random() * 360 - 180).toFixed(4)
        });
      }
    }, 100);

    if ("geolocation" in navigator) {
      setStatus('locating');
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const R = 6371; 
          const dLat = (studioCoords.lat - position.coords.latitude) * Math.PI / 180;
          const dLon = (studioCoords.lon - position.coords.longitude) * Math.PI / 180;
          const a = 
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(position.coords.latitude * Math.PI / 180) * Math.cos(studioCoords.lat * Math.PI / 180) * Math.sin(dLon/2) * Math.sin(dLon/2);
          const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
          
          setTimeout(() => {
            setDistance(Math.round(R * c));
            setCoords({ lat: position.coords.latitude.toFixed(4), lon: position.coords.longitude.toFixed(4) });
            setStatus('success');
          }, 2000);
        },
        () => setStatus('denied')
      );
    }
    return () => clearInterval(interval);
  }, [status]);

  return (
    <div ref={containerRef} className="relative h-[250vh] bg-[#1B2620]">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        <motion.div 
          style={{ opacity: mapOpacity, scale: mapScale }}
          className="absolute inset-0 z-50 flex flex-col items-center justify-center pointer-events-none"
        >
          <div className="absolute top-12 left-12 font-mono text-[#C29958] text-[10px] space-y-1 opacity-60">
            <p>LAT: {coords.lat}°</p>
            <p>LON: {coords.lon}°</p>
            <p>SIGNAL: {status === 'success' ? 'ENCRYPTED' : 'SEARCHING...'}</p>
          </div>

          <svg viewBox="0 0 800 400" className="w-full max-w-5xl h-auto stroke-[#C29958] fill-none opacity-40">
            <motion.path 
              style={{ pathLength: mapPathLength }}
              strokeWidth="0.5"
              d="M50,200 L750,200 M400,50 L400,350" // Crosshair lines
              opacity="0.2"
            />
            <motion.path 
              style={{ pathLength: mapPathLength }}
              strokeWidth="1"
              strokeLinejoin="round"
              d="M150,120 L180,110 L220,130 L210,180 L140,190 Z M480,140 L550,120 L620,160 L580,240 L460,230 Z M300,250 L340,230 L380,260 L320,290 Z"
            />
            <motion.circle 
              style={{ pathLength: mapPathLength }}
              cx="400" cy="200" r="150" strokeWidth="0.5" 
            />
          </svg>
          
          <motion.div 
            initial={{ y: '-100vh' }}
            animate={{ y: '100vh' }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#C29958] to-transparent shadow-[0_0_15px_#C29958]"
          />
        </motion.div>

        <motion.div 
          style={{ y: contentY, opacity: contentOpacity }}
          className="container mx-auto px-6 relative z-10"
        >
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            <div className="w-full lg:w-5/12">
              <div className="flex items-center gap-3 mb-8">
                <Compass className="text-[#C29958] animate-[spin_10s_linear_infinite]" size={18} />
                <span className="one text-[#C29958] text-[10px] uppercase tracking-[0.6em] font-black">Global Positioning</span>
              </div>
              
              <h2 className="three text-6xl lg:text-7xl text-white uppercase leading-none mb-10">
                Atelier <br /> <span className="italic text-[#C29958]">Proximity</span>
              </h2>
              
              <div className="relative group p-10 rounded-[2rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl transition-colors hover:bg-white/[0.04]">
                <Globe size={40} className="absolute top-6 right-6 text-[#C29958] opacity-20 group-hover:opacity-40 transition-opacity" />
                
                <span className="one text-[10px] uppercase tracking-widest text-white/30 block mb-6">Point-to-Point Offset</span>
                
                <div className="flex items-baseline gap-4">
                  <motion.span 
                    key={distance}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="three text-8xl text-white tabular-nums leading-none"
                  >
                    {distance ? distance.toLocaleString() : "---"}
                  </motion.span>
                  <span className="one text-lg text-[#C29958] uppercase font-black">KM</span>
                </div>

                <div className="mt-10 flex items-center gap-3 py-3 px-5 bg-white/5 rounded-full w-fit border border-white/5">
                  <div className={`w-2 h-2 rounded-full ${status === 'success' ? 'bg-[#C29958] animate-pulse' : 'bg-red-500'}`} />
                  <span className="one text-[9px] text-white/70 uppercase tracking-[0.2em]">
                    {status === 'locating' ? "Scanning Satellites..." : "Satellite Uplink Active"}
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-7/12 relative flex justify-center">
              <div className="relative w-full aspect-square max-w-[480px]">
                {/* Concentric Circles */}
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="absolute inset-0 rounded-full border border-white/[0.03]" style={{ margin: `${i * 12.5}%` }} />
                ))}
                
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full"
                  style={{ background: 'conic-gradient(from 0deg, rgba(194, 153, 88, 0.2) 0deg, transparent 60deg)' }}
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-4 h-4 bg-[#C29958] rounded-full shadow-[0_0_30px_#C29958]"
                  />
                  <div className="absolute translate-y-10">
                    <span className="one text-[9px] text-[#C29958] uppercase tracking-widest font-bold">Studio Origin</span>
                  </div>
                </div>

                <AnimatePresence>
                  {distance && (
                    <svg className="absolute inset-0 w-full h-full overflow-visible">
                      <motion.line 
                        initial={{ pathLength: 0, opacity: 0 }} 
                        animate={{ pathLength: 1, opacity: 1 }} 
                        transition={{ duration: 1, delay: 0.5 }}
                        x1="50%" y1="50%" x2="25%" y2="25%" 
                        stroke="#C29958" strokeWidth="1" strokeDasharray="4 4" 
                      />
                      <motion.circle 
                        initial={{ scale: 0 }} animate={{ scale: 1 }}
                        cx="25%" cy="25%" r="5" fill="white" className="shadow-lg" 
                      />
                    </svg>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StudioProximity;