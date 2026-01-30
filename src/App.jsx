import React, { useState, useEffect, Suspense, lazy } from "react";
import { HelmetProvider } from "react-helmet-async";
import { NavRail } from "./components/layout/NavRail";
import { PROFILE_DATA } from "./data/mock_profiledata";
import { SEO } from "./components/SEO";

// --- LAZY LOAD KOMPONEN BERAT (Code Splitting) ---
// Biar browser gak download semuanya di awal. Skor Lighthouse bakal naik drastis!
const AuroraBackground = lazy(() => import("./components/ui/AuroraBackground").then(module => ({ default: module.AuroraBackground })));
const BackgroundRippleEffect = lazy(() => import("@/components/ui/background-ripple-effect").then(module => ({ default: module.BackgroundRippleEffect })));
const MaskContainer = lazy(() => import("@/components/ui/svg-mask-effect").then(module => ({ default: module.MaskContainer })));
const Boxes = lazy(() => import("@/components/ui/background-boxes").then(module => ({ default: module.Boxes })));

// Section juga di-lazy load
const Hero = lazy(() => import("./components/sections/Hero").then(module => ({ default: module.Hero })));
const Projects = lazy(() => import("./components/sections/Projects").then(module => ({ default: module.Projects })));
const About = lazy(() => import("./components/sections/About").then(module => ({ default: module.About })));
const Services = lazy(() => import("./components/sections/Services").then(module => ({ default: module.Services })));
const Contact = lazy(() => import("./components/sections/Contact").then(module => ({ default: module.Contact })));

// Loading State Minimalis (biar user tau ada proses loading)
const LoadingFallback = () => (
  <div className="flex h-screen w-full items-center justify-center bg-black text-emerald-500 font-mono text-sm">
    Initializing...
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  return (
    <HelmetProvider>
      <SEO />
      
      <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black overflow-x-hidden relative">
        
        {/* Suspense buat Background biar ga nge-block rendering awal */}
        <Suspense fallback={null}>
            <div className="fixed inset-0 z-0">
                <AuroraBackground />
            </div>
            <div className="fixed inset-0 z-0 pointer-events-none">
                <BackgroundRippleEffect />
            </div>
        </Suspense>

        {/* NavRail penting, jadi ga perlu lazy load (biar interaktif cepet) */}
        <NavRail active={activeTab} setActive={setActiveTab} />

        <main className="relative z-10 pl-0 min-h-screen">
          
          <Suspense fallback={<LoadingFallback />}>
            <MaskContainer>
              
              <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                 <div className="pointer-events-auto"> 
                    <Boxes />
                 </div>
              </div>

              <div className="relative z-20 max-w-5xl mx-auto px-6 pb-32">
                
                <div className="fixed top-0 left-0 right-0 px-6 py-6 z-50 flex justify-between items-center bg-black/40 backdrop-blur-xl border-b border-white/5 transition-all">
                  <div className="font-bold tracking-tighter text-xl pointer-events-auto text-white">
                    {PROFILE_DATA.name}
                  </div>
                  <div className="hidden md:block font-mono text-xs text-zinc-400">
                    {new Date().getFullYear()} © EDITION
                  </div>
                </div>

                <div className="mt-12">
                  <Suspense fallback={<div className="py-20 text-center text-zinc-500 animate-pulse">Loading Content...</div>}>
                    {activeTab === "home" && (
                      <div className="space-y-20">
                        <Hero />
                        <Projects />
                      </div>
                    )}
                    {activeTab === "about" && <About />}
                    {activeTab === "services" && <Services />}
                    {activeTab === "contact" && <Contact />}
                  </Suspense>
                </div>
              </div>
            </MaskContainer>
          </Suspense>
        </main>
      </div>
    </HelmetProvider>
  );
}