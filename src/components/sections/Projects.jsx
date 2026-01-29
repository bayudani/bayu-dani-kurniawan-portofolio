import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA } from '../../data/mock';

export const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(PROJECTS_DATA.map(p => p.cat))];
  const filteredProjects = filter === 'All' ? PROJECTS_DATA : PROJECTS_DATA.filter(p => p.cat === filter);

  return (
    <div className="space-y-8 mt-20 animate-in fade-in slide-in-from-bottom-12 duration-1000">
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 pb-4 gap-4">
        <h2 className="text-sm font-mono text-zinc-400">SELECTED WORKS ({PROJECTS_DATA.length})</h2>
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all whitespace-nowrap border ${
                filter === cat 
                  ? 'bg-white text-black border-white' 
                  : 'text-zinc-500 border-transparent hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="group relative h-[360px] w-full overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/30 cursor-pointer hover:border-white/30 transition-all duration-500">
            <div className="absolute inset-0 overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-30 mix-blend-overlay transition-opacity duration-700`}/>
            <div className="relative z-10 h-full p-8 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                 <span className="font-mono text-[10px] text-zinc-300 border border-white/20 px-2 py-1 rounded-full bg-black/40 backdrop-blur-md uppercase tracking-wider">{project.cat}</span>
                 <div className="p-2 bg-white text-black rounded-full opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <ArrowUpRight size={16} />
                 </div>
              </div>
              <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">{project.title}</h3>
                <p className="text-sm text-zinc-300 line-clamp-2 drop-shadow-md">{project.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
