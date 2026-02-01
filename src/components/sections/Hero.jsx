import React, { useEffect, useRef } from 'react';
import { Code2 } from 'lucide-react';
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { PROFILE_DATA } from '../../data/mock_profiledata'; // Sesuaikan path import mock data

// Pastikan path import ini sesuai dengan lokasi file FlipWords yang baru kamu buat tadi
import { FlipWords } from '../ui/flip-words'; 

// --- 1. Komponen Kecil untuk Animasi Angka ---
const AnimatedCounter = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  // Pastikan value jadi string dulu biar aman
  const stringValue = String(value);

  // Regex untuk memisahkan angka dan karakter non-angka (misal: "2+" jadi 2 dan "+")
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
  // Daftar kata-kata yang akan di-flip
  const titles = ["WEB DEVELOPER", "MOBILE DEVELOPER", "FULLSTACK DEV"];

  return (
    <section id="home" className="pt-10 md:pt-20 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
       <div className="flex flex-col-reverse md:flex-row justify-between items-start gap-8 md:gap-4">
          <div className="space-y-8 max-w-2xl relative z-10">
              
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400 font-mono tracking-wider">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true"/>
                AVAILABLE FOR FREELANCE
              </div>
              
              {/* --- 2. Implementasi FlipWords --- */}
              {/* Container h1 tetap ada untuk menjaga struktur SEO dan Layout */}
              <div className="text-5xl md:text-8xl font-bold tracking-tighter text-white leading-[0.9] antialiased min-h-[120px] md:min-h-[160px] flex items-center">
                 <FlipWords 
                    words={titles}
                    duration={2500} // Ganti kata setiap 2.5 detik
                    className="text-white !p-0 !m-0" // Reset padding bawaan jika perlu
                 />
              </div>
              
              <p className="max-w-xl text-lg text-zinc-300 leading-relaxed font-medium">
                {PROFILE_DATA.bio}
              </p>
              
              {/* --- 3. Implementasi Counting Stats --- */}
              <div className="flex gap-12 pt-4">
                {PROFILE_DATA.stats.map((stat, index) => (
                  <div key={stat.label}>
                      <div className="text-3xl font-bold text-white font-mono flex">
                        {/* Panggil komponen AnimatedCounter di sini */}
                        <AnimatedCounter value={stat.value} />
                      </div>
                      <div className="text-xs text-zinc-300 uppercase tracking-widest mt-1 font-semibold">
                        {stat.label}
                      </div>
                  </div>
                ))}
              </div>
          </div>
          
          {/* Avatar Section (Tidak berubah, tetap keren) */}
          <div className="relative group md:mt-12 self-center md:self-auto">
              <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-[2rem] blur-[30px] opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
              <div className="relative w-32 h-32 md:w-64 md:h-64 rotate-3 group-hover:rotate-0 transition-all duration-500 ease-out">
                  
                  <img 
                      src={PROFILE_DATA.avatar} 
                      alt="Professional portrait of Bayu Dani Kurniawan" 
                      width="400"           
                      height="400"   
                      loading="eager" 
                      fetchpriority="high"
                      className="w-full h-full object-cover rounded-[2rem] border border-white/20 shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700 bg-zinc-900"
                  />
                  
                  <div className="absolute -bottom-4 -left-4 p-3 bg-zinc-500 rounded-2xl border border-white/10 shadow-xl hidden md:block">
                      <Code2 size={24} className="text-white" />
                  </div>
              </div>
          </div>
       </div>
    </section>
  );
};