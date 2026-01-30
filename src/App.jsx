import React, { useState, useEffect, Suspense, lazy } from "react";
import { HelmetProvider } from "react-helmet-async";
import { NavRail } from "./components/layout/NavRail";
import { PROFILE_DATA } from "./data/mock_profiledata";
import { SEO } from "./components/SEO";

// --- PERBAIKAN PENTING: HERO WAJIB STATIC IMPORT (LCP Fix) ---
// Hero tidak boleh lazy load agar skor Performance LCP bisa 100.
import { Hero } from "./components/sections/Hero";

// --- LAZY LOAD KOMPONEN BERAT (Optimasi Lighthouse) ---
// Browser ga perlu download semua ini di awal loading.
const AuroraBackground = lazy(() => import("./components/ui/AuroraBackground").then(module => ({ default: module.AuroraBackground })));
const BackgroundRippleEffect = lazy(() => import("@/components/ui/background-ripple-effect").then(module => ({ default: module.BackgroundRippleEffect })));
const MaskContainer = lazy(() => import("@/components/ui/svg-mask-effect").then(module => ({ default: module.MaskContainer })));
const Boxes = lazy(() => import("@/components/ui/background-boxes").then(module => ({ default: module.Boxes })));

// Section Halaman di-lazy load (Kecuali Hero)
const Projects = lazy(() => import("./components/sections/Projects").then(module => ({ default: module.Projects })));
const About = lazy(() => import("./components/sections/About").then(module => ({ default: module.About })));
const Services = lazy(() => import("./components/sections/Services").then(module => ({ default: module.Services })));
const Contact = lazy(() => import("./components/sections/Contact").then(module => ({ default: module.Contact })));

// Loading Component Sederhana
const LoadingFallback = () => (
  <div className="flex h-screen w-full items-center justify-center bg-black text-emerald-500 font-mono text-sm animate-pulse">
    Loading Resources...
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
        
        {/* Layer 1: Backgrounds (Lazy Loaded) */}
        <Suspense fallback={null}>
            <div className="fixed inset-0 z-0">
                <AuroraBackground />
            </div>
            {/* Ripple dimatikan di mobile biar ringan, nyala di desktop (md:block) */}
            <div className="fixed inset-0 z-0 pointer-events-none hidden md:block">
                <BackgroundRippleEffect />
            </div>
        </Suspense>

        {/* Layer 2: Navigation (Penting, load langsung) */}
        <NavRail active={activeTab} setActive={setActiveTab} />

        <main className="relative z-10 pl-0 min-h-screen">
          
          {/* Layer 3: Wrapper Utama Konten */}
          <Suspense fallback={<LoadingFallback />}>
            <MaskContainer>
              
              {/* Layer 4: Background Boxes (Z-0) */}
              <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                 <div className="pointer-events-auto"> 
                    <Boxes />
                 </div>
              </div>

              {/* Layer 5: Konten & Navbar (Z-20 biar bisa diklik) */}
              <div className="relative z-20 max-w-5xl mx-auto px-6 pb-32">
                
                {/* Header Navbar (Fixed Position) */}
                <div className="fixed top-0 left-0 right-0 px-6 py-6 z-50 flex justify-between items-center bg-black/40 backdrop-blur-xl border-b border-white/5 transition-all">
                  <div className="font-bold tracking-tighter text-xl pointer-events-auto text-white">
                    {PROFILE_DATA.name}
                  </div>
                  <div className="hidden md:block font-mono text-xs text-zinc-400">
                    {new Date().getFullYear()} © EDITION
                  </div>
                </div>

                {/* Content Body (Ada margin top biar ga ketutupan navbar) */}
                <div className="mt-32 md:mt-12">
                   {/* Suspense dipisah agar Hero muncul instan tanpa nunggu Projects */}
                   {activeTab === "home" && (
                      <div className="space-y-20">
                        {/* Static Import Hero: Render Langsung */}
                        <Hero />
                        <Suspense fallback={<div className="py-20 text-center text-zinc-500 animate-pulse">Loading Projects...</div>}>
                           <Projects />
                        </Suspense>
                      </div>
                   )}

                   {/* Section lain tetap Lazy karena tidak di layar utama */}
                   <Suspense fallback={<div className="py-20 text-center text-zinc-500 animate-pulse">Loading Section...</div>}>
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