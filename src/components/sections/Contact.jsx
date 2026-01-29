import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Contact = () => (
  <div className="h-full flex flex-col justify-center animate-in fade-in slide-in-from-bottom-8 duration-700 pt-20">
      <h2 className="text-[10vw] font-bold text-white leading-none tracking-tighter opacity-10 select-none">
        LET'S TALK
      </h2>
      <div className="mt-[-5vw] ml-4 md:ml-12">
         <p className="text-2xl text-zinc-400 mb-8 max-w-lg">
           Punya ide gila? Atau cuma mau ngopi bareng virtual? Drop me a message.
         </p>
         <a href="mailto:hello@alex.dev" className="inline-flex items-center gap-4 text-4xl md:text-6xl font-bold text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 transition-all cursor-pointer group">
            hello@alex.dev
            <ArrowRight className="group-hover:translate-x-4 transition-transform duration-300" size={40} />
         </a>
      </div>
  </div>
);