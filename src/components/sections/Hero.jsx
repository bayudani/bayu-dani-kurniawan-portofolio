import React, { useEffect, useRef, useState } from 'react';
import { Code2 } from 'lucide-react';
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { PROFILE_DATA } from '../../data/mock_profiledata';
import { FlipWords } from '../ui/flip-words'; 

// Import Hook Easter Egg
import { useEasterEgg } from '../../hooks/use-easter-egg';

// --- IMPORT COMPONENT LIVE STATUS BARU ---
import { LiveStatus } from '../ui/LiveStatus';

// --- Komponen Kecil untuk Animasi Angka ---
const AnimatedCounter = ({ value }) => {
  const ref = useRef(null);
  // Margin 0px agar animasi langsung jalan saat elemen terlihat sedikit saja
  const isInView = useInView(ref, { once: true, margin: "0px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const stringValue = String(value);
  const numericValue = parseFloat(stringValue.replace(/[^0-9.]/g, '')) || 0;
  const suffix = stringValue.replace(/[0-9.]/g, ''); 

  useEffect(() => {
    if (isInView) {
      animate(count, numericValue, { duration: 2.5, ease: "easeOut" });
    }
  }, [isInView, numericValue, count]);

  return (
    <span ref={ref} className="flex items-baseline">
      <motion.span>{rounded}</motion.span>
      <span>{suffix}</span>
    </span>
  );
};

export const Hero = () => {
  const titles = ["WEB DEVELOPER", "MOBILE DEVELOPER", "FULLSTACK DEV"];
  
  // --- LOGIC EASTER EGG (TAP 5x) ---
  const { triggerConfetti } = useEasterEgg(); 
  const [tapCount, setTapCount] = useState(0);

  const handleAvatarClick = () => {
    setTapCount(prev => prev + 1);
    
    // Reset tap count kalau user berhenti ngetap selama 1 detik
    setTimeout(() => setTapCount(0), 1000);

    // Kalau sudah 5x tap... BOOM!
    if (tapCount + 1 === 5) {
      triggerConfetti();
      setTapCount(0); // Reset hitungan
    }
  };

  return (
    <section id="home" className="pt-10 md:pt-20 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
       <div className="flex flex-col-reverse md:flex-row justify-between items-start gap-8 md:gap-4">
          <div className="space-y-8 max-w-2xl relative z-10">
              
              {/* --- BAGIAN INI SUDAH DIGANTI DENGAN LIVE STATUS --- */}
              <div>
                <LiveStatus />
              </div>
              
              {/* FlipWords Title */}
              <div className="text-5xl md:text-8xl font-bold tracking-tighter text-white leading-[0.9] antialiased min-h-[120px] md:min-h-[160px] flex items-center">
                 <FlipWords 
                    words={titles}
                    duration={2500}
                    className="text-white !p-0 !m-0"
                 />
              </div>
              
              <p className="max-w-xl text-lg text-zinc-300 leading-relaxed font-medium">
                {PROFILE_DATA.bio}
              </p>
              
              {/* Stats Counter */}
              <div className="flex gap-12 pt-4">
                {PROFILE_DATA.stats.map((stat, index) => (
                  <div key={stat.label}>
                      <div className="text-3xl font-bold text-white font-mono flex">
                        <AnimatedCounter value={stat.value} />
                      </div>
                      <div className="text-xs text-zinc-300 uppercase tracking-widest mt-1 font-semibold">
                        {stat.label}
                      </div>
                  </div>
                ))}
              </div>
          </div>
          
          {/* Avatar Section dengan Event Handler */}
          <div 
            className="relative group md:mt-12 self-center md:self-auto cursor-pointer select-none" 
            onClick={handleAvatarClick}
            title="Tap 5x for a surprise! 🎉"
          >
              <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-[2rem] blur-[30px] opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
              
              {/* Bungkus gambar dengan motion.div biar ada efek 'mumbul' pas diklik */}
              <motion.div 
                 whileTap={{ scale: 0.95, rotate: 2 }}
                 transition={{ type: "spring", stiffness: 400, damping: 17 }}
                 className="relative w-32 h-32 md:w-64 md:h-64 rotate-3 group-hover:rotate-0 transition-all duration-500 ease-out"
              >
                  <img 
                      src={PROFILE_DATA.avatar} 
                      alt="Professional portrait of Bayu Dani Kurniawan" 
                      width="400"           
                      height="400"   
                      loading="eager" 
                      fetchpriority="high"
                      className="w-full h-full object-cover rounded-[2rem] border border-white/20 shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700 bg-zinc-900 pointer-events-none" 
                      // pointer-events-none di img biar tap event nembus ke div wrapper
                  />
                  
                  <div className="absolute -bottom-4 -left-4 p-3 bg-zinc-500 rounded-2xl border border-white/10 shadow-xl hidden md:block">
                      <Code2 size={24} className="text-white" />
                  </div>
              </motion.div>
          </div>
       </div>
    </section>
  );
};