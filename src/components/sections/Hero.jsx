import React from 'react';
import { Code2 } from 'lucide-react';
import { PROFILE_DATA } from '../../data/mock';

export const Hero = () => {
  return (
    /* Menggunakan semantic tag 'section' dan memastikan kontras teks utama */
    <section id="home" className="pt-10 md:pt-20 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
       <div className="flex flex-col-reverse md:flex-row justify-between items-start gap-8 md:gap-4">
          <div className="space-y-8 max-w-2xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400 font-mono tracking-wider">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true"/>
                AVAILABLE FOR FREELANCE
              </div>
              
              {/* Memastikan font-weight dan leading optimal untuk keterbacaan */}
              <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white leading-[0.9] antialiased">
                WEB <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500">DEVELOPER.</span>
              </h1>
              
              {/* PERBAIKAN: Gunakan zinc-300/400 untuk contrast ratio yang lebih tajam (Skor 100 Accessibility) */}
              <p className="max-w-xl text-lg text-zinc-300 leading-relaxed font-medium">
                {PROFILE_DATA.bio}
              </p>
              
              <div className="flex gap-12 pt-4">
                {PROFILE_DATA.stats.map(stat => (
                  <div key={stat.label}>
                      <div className="text-3xl font-bold text-white font-mono">{stat.value}</div>
                      {/* Warna zinc-500 di sini sudah cukup untuk label kecil */}
                      <div className="text-xs text-zinc-300 uppercase tracking-widest mt-1 font-semibold">{stat.label}</div>
                  </div>
                ))}
              </div>
          </div>
          
          <div className="relative group md:mt-12 self-center md:self-auto">
              <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-[2rem] blur-[30px] opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
              <div className="relative w-32 h-32 md:w-64 md:h-64 rotate-3 group-hover:rotate-0 transition-all duration-500 ease-out">
                  
                  {/* OPTIMASI LCP: Pastikan gambar menggunakan format WebP/Avif jika memungkinkan */}
                  <img 
                      src={PROFILE_DATA.avatar} 
                      alt="Professional portrait of Bayu Dani Kurniawan" 
                      width="400"           
                      height="400"  
                      loading="eager" 
                      fetchpriority="high" // Tambahan untuk mempercepat LCP (Largest Contentful Paint)
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