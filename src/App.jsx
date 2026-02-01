import React, { useState, useEffect, Suspense, lazy } from "react";
import { HelmetProvider } from "react-helmet-async";
import { NavRail } from "./components/layout/NavRail";
import { PROFILE_DATA } from "./data/mock_profiledata";
import { SEO } from "./components/SEO";
import { CommandMenu } from "./components/ui/CommandMenu";

import { Hero } from "./components/sections/Hero";

// --- LAZY LOAD KOMPONEN BERAT (Optimasi Bundle Size) ---
const AuroraBackground = lazy(() => import("./components/ui/AuroraBackground").then(module => ({ default: module.AuroraBackground })));
const BackgroundRippleEffect = lazy(() => import("@/components/ui/background-ripple-effect").then(module => ({ default: module.BackgroundRippleEffect })));
const MaskContainer = lazy(() => import("@/components/ui/svg-mask-effect").then(module => ({ default: module.MaskContainer })));
const Boxes = lazy(() => import("@/components/ui/background-boxes").then(module => ({ default: module.Boxes })));

// Lazy Load Section Lain (Off-screen content)
const Projects = lazy(() => import("./components/sections/Projects").then(module => ({ default: module.Projects })));
const About = lazy(() => import("./components/sections/About").then(module => ({ default: module.About })));
const Services = lazy(() => import("./components/sections/Services").then(module => ({ default: module.Services })));
const Contact = lazy(() => import("./components/sections/Contact").then(module => ({ default: module.Contact })));

// Lazy Load Modal Detail Project
const ProjectDetail = lazy(() => import("./components/sections/ProjectDetail").then(module => ({ default: module.ProjectDetail })));

// Loading Spinner Minimalis
const LoadingFallback = () => (
  <div className="flex h-64 w-full items-center justify-center">
    <div className="w-8 h-8 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  return (
    <HelmetProvider>
      <SEO />
      
      <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black overflow-x-hidden relative">
        
        {/* --- MODAL PROJECT DETAIL (Z-INDEX PALING TINGGI) --- */}
        <Suspense fallback={null}>
          {selectedProject && (
            <ProjectDetail 
              project={selectedProject} 
              onClose={() => setSelectedProject(null)} 
            />
          )}
        </Suspense>

        {/* --- BACKGROUND LAYERS --- */}
        <Suspense fallback={null}>
            <div className="fixed inset-0 z-0">
                <AuroraBackground />
            </div>
            {/* Ripple cuma di desktop biar mobile ga berat */}
            <div className="fixed inset-0 z-0 pointer-events-none hidden md:block">
                <BackgroundRippleEffect />
            </div>
        </Suspense>

        {/* --- NAVIGATION --- */}
        <NavRail active={activeTab} setActive={setActiveTab} />

        {/* --- COMMAND MENU --- */}
        <Suspense fallback={null}>
          <CommandMenu activeTab={activeTab} setActiveTab={setActiveTab} />
        </Suspense>

        {/* --- MAIN CONTENT WRAPPER --- */}
        <main className="relative z-10 pl-0 min-h-screen">
          
          <Suspense fallback={<div className="h-screen w-full bg-black/50" />}>
            <MaskContainer>
              
              {/* Background Boxes (Subtle Pattern) */}
              <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                 <div className="pointer-events-auto"> 
                    <Boxes />
                 </div>
              </div>

              {/* Konten Utama */}
              <div className="relative z-20 max-w-5xl mx-auto px-6 pb-32">
                
                {/* Fixed Navbar / Brand */}
                <div className="fixed top-0 left-0 right-0 px-6 py-6 z-50 flex justify-between items-center bg-black/40 backdrop-blur-xl border-b border-white/5 transition-all">
                  <div className="font-bold tracking-tighter text-xl pointer-events-auto text-white">
                    {PROFILE_DATA.name}
                  </div>
                  <div className="hidden md:block font-mono text-xs text-zinc-400">
                    {new Date().getFullYear()} © EDITION
                  </div>
                </div>

                {/* Dynamic Content Area */}
                <div className="mt-32 md:mt-32 min-h-[60vh]">
                   
                   {/* HOME TAB: Hero + Projects */}
                   {activeTab === "home" && (
                      <div className="space-y-20">
                        {/* Hero Render Langsung (No Suspense) */}
                        <Hero />
                        
                        {/* Projects Lazy Load */}
                        <Suspense fallback={<LoadingFallback />}>
                            <Projects onSelectProject={setSelectedProject} />
                        </Suspense>
                      </div>
                   )}

                   {/* TAB LAINNYA: Full Lazy Load */}
                   <Suspense fallback={<LoadingFallback />}>
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