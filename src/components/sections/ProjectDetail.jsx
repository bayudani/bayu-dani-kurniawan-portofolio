import React, { useEffect } from 'react';
import { X, ExternalLink, Layers, CheckCircle2, Code2 } from 'lucide-react';

export const ProjectDetail = ({ project, onClose }) => {
  // Disable scroll body pas modal kebuka
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      
      {/* Backdrop Blur */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl h-full md:h-auto md:max-h-[90vh] bg-zinc-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-300">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white transition-colors backdrop-blur-sm border border-white/10"
        >
          <X size={24} />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto custom-scrollbar flex-1">
          
          {/* Header Image */}
          <div className="relative h-64 md:h-80 w-full">
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 md:left-10">
              <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-mono text-white mb-3 inline-block">
                {project.cat}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 md:p-10 space-y-10">
            
            {/* Overview */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Layers className="text-emerald-500" size={20} />
                Overview
              </h3>
              <p className="text-zinc-400 leading-relaxed text-lg">
                {project.details?.overview || project.desc}
              </p>
            </div>

            {/* Tech Stack & Features Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Key Features */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <CheckCircle2 className="text-emerald-500" size={20} />
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {project.details?.features ? (
                    project.details.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-zinc-400 text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))
                  ) : (
                    <p className="text-zinc-500 italic">No specific features listed.</p>
                  )}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Code2 className="text-emerald-500" size={20} />
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1.5 bg-zinc-800 border border-white/5 rounded-lg text-xs text-zinc-300 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.details?.stack && (
                  <p className="mt-4 text-xs text-zinc-500 border-t border-white/5 pt-3">
                    <strong className="text-zinc-400">Full Stack:</strong> {project.details.stack}
                  </p>
                )}
              </div>

            </div>

            {/* Visit Link CTA */}
            {project.link && project.link !== "#" && (
              <div className="pt-6 border-t border-white/5">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-xl font-bold hover:bg-zinc-200 transition-colors"
                >
                  Visit Project <ExternalLink size={18} />
                </a>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};