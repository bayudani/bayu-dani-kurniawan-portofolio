import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Contact = () => (
  <div className="h-full flex flex-col justify-center animate-in fade-in slide-in-from-bottom-8 duration-700 pt-20">
      <h2 className="text-[10vw] font-bold text-white leading-none tracking-tighter opacity-10 select-none">
        LET'S CONNECT
      </h2>
      <div className="mt-[-5vw] ml-4 md:ml-12">
         <p className="text-xl md:text-2xl text-zinc-400 mb-8 max-w-xl leading-relaxed">
           Have a project in mind or want to discuss a potential partnership? 
           I'm always open to new opportunities and interesting conversations.
         </p>
         <a 
           href="mailto:Bayu22122017@gmail.com" 
           className="inline-flex items-center gap-4 text-2xl md:text-5xl font-bold text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 transition-all cursor-pointer group break-all"
         >
            Bayu22122017@gmail.com
            <ArrowRight className="group-hover:translate-x-4 transition-transform duration-300" size={40} />
         </a>
      </div>
  </div>
);