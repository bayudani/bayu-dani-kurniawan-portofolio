import React from 'react';

export const AuroraBackground = () => (
  <>
    <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay"
       style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
    </div>
    
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-black">
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-purple-900/20 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-blue-900/20 rounded-full blur-[120px] animate-pulse-slow" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-[20%] right-[20%] w-[30vw] h-[30vw] bg-emerald-900/10 rounded-full blur-[100px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
    </div>
  </>
);
