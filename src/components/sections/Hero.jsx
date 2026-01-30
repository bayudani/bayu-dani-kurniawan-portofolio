import React from 'react';
import { Code2 } from 'lucide-react';
import { PROFILE_DATA } from '../../data/mock';

export const Hero = () => {
  return (
    <header className="pt-10 md:pt-20 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
       <div className="flex flex-col-reverse md:flex-row justify-between items-start gap-8 md:gap-4">
          <div className="space-y-8 max-w-2xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400 font-mono tracking-wider">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"/>
                AVAILABLE FOR FREELANCE
              </div>
              <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white leading-[0.9]">
                WEB <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-600">DEVELOPER.</span>
              </h1>
              
              {/* PERUBAHAN 1: Ubah text-zinc-500 jadi text-zinc-400 */}
              {/* Alasannya: text-zinc-500 terlalu gelap di background hitam, bikin skor Accessibility turun (Contrast Ratio) */}
              <p className="max-w-xl text-lg text-zinc-400 leading-relaxed">
                {PROFILE_DATA.bio}
              </p>
              
              <div className="flex gap-12 pt-4">
                {PROFILE_DATA.stats.map(stat => (
                  <div key={stat.label}>
                      <div className="text-3xl font-bold text-white font-mono">{stat.value}</div>
                      <div className="text-xs text-zinc-600 uppercase tracking-widest mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
          </div>
          
          <div className="relative group md:mt-12 self-center md:self-auto">
              <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-[2rem] blur-[30px] opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
              <div className="relative w-32 h-32 md:w-64 md:h-64 rotate-3 group-hover:rotate-0 transition-all duration-500 ease-out">
                  {/* PERUBAHAN 2: Tambahkan width, height, dan loading */}
                  {/* Alasannya: Mencegah pergeseran layout (CLS) dan mempercepat render (LCP) */}
                  <img 
                      src={PROFILE_DATA.avatar} 
                      alt="Profile of Bayu" // Alt text lebih deskriptif untuk SEO
                      width="400"           // Wajib ada untuk skor Performance (CLS)
                      height="400"          // Wajib ada untuk skor Performance (CLS)
                      loading="eager"       // Prioritaskan load gambar ini karena ada di layar pertama (LCP)
                      className="w-full h-full object-cover rounded-[2rem] border border-white/20 shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute -bottom-4 -left-4 p-3 bg-zinc-900 rounded-2xl border border-white/10 shadow-xl hidden md:block">
                      <Code2 size={24} className="text-white" />
                  </div>
              </div>
          </div>
       </div>
    </header>
  );
};