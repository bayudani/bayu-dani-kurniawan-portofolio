import React, { useState, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async"; //
import { AuroraBackground } from "./components/ui/AuroraBackground";
import { NavRail } from "./components/layout/NavRail";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { Services } from "./components/sections/Services";
import { PROFILE_DATA } from "./data/mock_profiledata";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { Boxes } from "@/components/ui/background-boxes";
import { SEO } from "./components/SEO"; // 

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  return (
    // 3. Bungkus semua dengan HelmetProvider
    <HelmetProvider>
      {/* 4. Pasang SEO Component paling atas */}
      <SEO />
      
      <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black overflow-x-hidden">
        {/* Layer 1: Backgrounds */}
        <AuroraBackground />
        <BackgroundRippleEffect />

        {/* Layer 2: Navigation */}
        <NavRail active={activeTab} setActive={setActiveTab} />

        <main className="relative z-10 pl-0  min-h-screen">
          {/* Layer 3: Wrapper Spotlight (Mask) */}
          <MaskContainer>
            
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
               <div className="pointer-events-auto"> 
                  <Boxes />
               </div>
            </div>

            {/* Layer 5: Main Content (Z-20 biar bisa diklik!) */}
            <div className="relative z-20 max-w-5xl mx-auto px-6 pb-32">
              
              {/* Header Navbar */}
              <div className="fixed top-0 left-0  right-0 px-6 py-6 z-50 flex justify-between items-center bg-black/40 backdrop-blur-xl border-b border-white/5 transition-all">
                <div className="font-bold tracking-tighter text-xl pointer-events-auto text-white">
                  {PROFILE_DATA.name}
                </div>
                <div className="hidden md:block font-mono text-xs text-zinc-400">
                  {new Date().getFullYear()} © EDITION
                </div>
              </div>

              {/* Content Body */}
              <div className="mt-12">
                {activeTab === "home" && (
                  <div className="space-y-20">
                    <Hero />
                    <Projects />
                  </div>
                )}
                {activeTab === "about" && <About />}
                {activeTab === "services" && <Services />}
                {activeTab === "contact" && <Contact />}
              </div>
            </div>
          </MaskContainer>
        </main>
      </div>
    </HelmetProvider>
  );
}