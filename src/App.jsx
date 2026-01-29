import React, { useState, useEffect } from 'react';
import { AuroraBackground } from './components/ui/AuroraBackground';
import { NavRail } from './components/layout/NavRail';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';
import { PROFILE_DATA } from './data/mock';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      <AuroraBackground />
      <NavRail active={activeTab} setActive={setActiveTab} />
      <main className="relative z-10 pl-0 lg:pl-32 min-h-screen">
         <div className="max-w-5xl mx-auto px-6 pb-32">
            <div className="fixed top-0 left-0 lg:left-32 right-0 p-6 z-30 flex justify-between items-center mix-blend-difference pointer-events-none">
               <div className="font-bold tracking-tighter text-xl pointer-events-auto">
                 {PROFILE_DATA.name}
               </div>
               <div className="hidden md:block font-mono text-xs text-zinc-400">
                  {new Date().getFullYear()} © EDITION
               </div>
            </div>
            <div className="mt-12">
              {activeTab === 'home' && (
                <>
                  <Hero />
                  <Projects />
                </>
              )}
              {activeTab === 'about' && <About />}
              {activeTab === 'contact' && <Contact />}
            </div>
         </div>
      </main>
      <div className="fixed inset-0 border-[12px] border-white/5 pointer-events-none z-50 hidden xl:block rounded-[32px] m-4" />
    </div>
  );
}