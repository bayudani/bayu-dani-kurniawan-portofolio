/* eslint-disable react-hooks/static-components */
import React, { useState } from 'react';
import { 
  Github, Linkedin, Instagram, Download, Trophy, Briefcase, Calendar, 
  GraduationCap, Award, BookOpen, ExternalLink, Terminal, 
  Code2, PenTool, GitBranch, Box, Send, Coffee, Monitor, MousePointer2, Smartphone
} from 'lucide-react';
import { PROFILE_DATA, ABOUT_DATA } from '../../data/mock_profiledata';

export const About = () => {
  const [activeSubTab, setActiveSubTab] = useState('bio');

  const socialLinks = [
    { icon: Github, url: PROFILE_DATA.socials.github },
    { icon: Linkedin, url: PROFILE_DATA.socials.linkedin },
    { icon: Instagram, url: PROFILE_DATA.socials.instagram }
  ];

  // Helper Icon Tech Stack
  const getTechIcon = (techName) => {
    const slugMap = {
      "Express JS": "express", "Laravel": "laravel", "MySQL": "mysql",
      "Javascript": "javascript", "Tailwind": "tailwindcss", "Unity": "unity",
      "Flutter": "flutter", "Kotlin": "kotlin", "Redis": "redis",
      "Node JS": "nodedotjs", "PHP": "php", "React.js": "react",
      "Figma": "figma", "Git": "git", "MongoDB": "mongodb",
      "Augmented Reality": "arkit", "VS Code": "vscode",
      "Postman": "postman", "GitHub": "github", "Chrome DevTools": "googlechrome",
      "Spotify": "spotify"
    };
    const slug = slugMap[techName] || techName.toLowerCase().replace(/\s+/g, '');
    return `https://cdn.simpleicons.org/${slug}/10b981`;
  };

  const myTools = [
    { name: "VS Code", icon: "VS Code" }, { name: "Figma", icon: "Figma" },
    { name: "Postman", icon: "Postman" }, { name: "GitHub", icon: "GitHub" },
    { name: "Chrome DevTools", icon: "Chrome DevTools" }, { name: "Spotify", icon: "Spotify" }, 
  ];

  // --- SUB-COMPONENTS UNTUK TIAP TAB ---

  const BioTab = () => (
    <div className="grid md:grid-cols-2 gap-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Left: Bio & Why Me */}
      <div className="space-y-10">
        <div className="space-y-6 text-zinc-400 leading-relaxed text-lg">
          <p>{PROFILE_DATA.bio.split('. ')[0]}.</p>
          <p>{PROFILE_DATA.bio.split('. ').slice(1).join('. ')}</p>
        </div>

        <div>
           <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">Why Work With Me?</h3>
           <div className="grid gap-4">
              {ABOUT_DATA.values.map((val, idx) => (
                 <div key={idx} className="p-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group">
                    <div className="flex items-center gap-3 mb-2">
                       <div className="p-2 bg-zinc-900 rounded-lg text-emerald-400">
                          <val.icon size={20} />
                       </div>
                       <h4 className="text-white font-bold">{val.title}</h4>
                    </div>
                    <p className="text-sm text-zinc-500 leading-relaxed pl-[52px]">{val.desc}</p>
                 </div>
              ))}
           </div>
        </div>
      </div>

      {/* Right: Stack, Toolkit & Connect */}
      <div className="space-y-8">
         <div className="space-y-4">
            <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest border-b border-white/10 pb-2">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
               {PROFILE_DATA.stack.map((tech) => (
                 <div key={tech} className="group flex items-center gap-2 px-3 py-2 border border-white/10 rounded-lg bg-zinc-900/50 hover:bg-white/5 hover:border-emerald-500/50 transition-all cursor-default">
                    <img src={getTechIcon(tech)} alt={tech} className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" onError={(e) => {e.target.style.display='none'}} />
                    <span className="text-xs text-zinc-400 group-hover:text-white transition-colors">{tech}</span>
                 </div>
               ))}
            </div>
         </div>

         <div className="space-y-4">
            <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest border-b border-white/10 pb-2">My Toolkit</h3>
            <div className="grid grid-cols-2 gap-2">
              {myTools.map((tool, i) => (
                 <div key={i} className="flex items-center gap-2 px-3 py-2 border border-white/10 rounded-lg bg-zinc-900/50 hover:bg-white/5 hover:border-emerald-500/50 transition-all group">
                    <img src={getTechIcon(tool.icon)} alt={tool.name} className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" onError={(e) => {e.target.style.display='none'}} />
                    <span className="text-xs font-medium text-zinc-400 group-hover:text-white">{tool.name}</span>
                 </div>
              ))}
            </div>
         </div>

         <div className="space-y-4">
            <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest border-b border-white/10 pb-2">Connect & Resume</h3>
            <div className="flex flex-wrap items-center gap-4">
               <div className="flex gap-3">
                  {socialLinks.map((item, i) => (
                    <a key={i} href={item.url} target="_blank" rel="noopener noreferrer" className="p-3 border border-white/10 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 hover:border-emerald-500/50 transition-all hover:scale-110">
                        <item.icon size={20} />
                    </a>
                  ))}
               </div>
               <div className="hidden sm:block w-px h-8 bg-white/10 mx-2"></div>
               <a href="/cv-bayu.pdf" download="CV_Bayu_Dani_Kurniawan.pdf" className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-zinc-300 hover:text-white hover:bg-white/10 hover:border-emerald-500/50 transition-all group">
                  <Download size={18} className="group-hover:text-emerald-500 transition-colors" />
                  <span className="text-xs font-mono tracking-wider font-bold">DOWNLOAD CV</span>
               </a>
            </div>
         </div>
      </div>
    </div>
  );

  const JourneyTab = () => (
    <div className="grid md:grid-cols-2 gap-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Education */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <GraduationCap className="text-zinc-500" size={24} /> Education
        </h3>
        <div className="space-y-4">
           {ABOUT_DATA.education.map((edu, idx) => (
             <div key={idx} className="p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-white/10 transition-colors">
                <div className="flex justify-between items-start mb-1">
                   <h4 className="text-white font-medium">{edu.school}</h4>
                   <span className="text-xs font-mono text-zinc-500 bg-zinc-900 px-2 py-1 rounded">{edu.year}</span>
                </div>
                <p className="text-sm text-zinc-400">{edu.degree}</p>
                {edu.grade && <p className="text-xs text-emerald-400 mt-2 font-mono">{edu.grade}</p>}
             </div>
           ))}
        </div>
      </div>

      {/* Experience */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
          <Briefcase className="text-zinc-500" size={24} /> Experience
        </h3>
        <div className="space-y-8 relative border-l border-zinc-800 ml-3 pl-8 py-2">
          {ABOUT_DATA.experiences.map((exp, idx) => (
            <div key={idx} className="relative">
              <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-zinc-900 border-2 border-zinc-600 group-hover:border-emerald-500 transition-colors" />
              <div className="flex flex-col gap-1">
                 <span className="text-xs font-mono text-emerald-500 mb-1">{exp.year}</span>
                 <h4 className="text-white font-medium">{exp.role}</h4>
                 <p className="text-sm text-zinc-500">{exp.event}</p>
                 <p className="text-xs text-zinc-600 mt-1 leading-relaxed">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const AchievementsTab = () => (
    <div className="grid md:grid-cols-2 gap-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Awards */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
          <Trophy className="text-zinc-500" size={24} /> Awards
        </h3>
        <div className="space-y-4">
          {ABOUT_DATA.awards.map((award, idx) => (
            <div key={idx} className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
               <div className="absolute top-6 right-6 text-yellow-500/20 group-hover:text-yellow-500/50 transition-colors">
                  <Trophy size={48} />
               </div>
               <div className="relative z-10">
                  <span className="inline-block px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-xs font-mono mb-4 border border-yellow-500/20">
                    {award.rank}
                  </span>
                  <h4 className="text-xl font-bold text-white mb-2">{award.title}</h4>
                  <p className="text-zinc-400 text-sm">{award.desc}</p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-zinc-500">
                     <Calendar size={14} />
                     <span>{award.year}</span>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-12">
        {/* Certifications */}
        <div>
           <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Award className="text-zinc-500" size={24} /> Certifications
           </h3>
           <div className="flex flex-wrap gap-2">
              {ABOUT_DATA.certifications.map((cert, idx) => (
                 <span key={idx} className="px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors cursor-default">
                    {cert}
                 </span>
              ))}
           </div>
        </div>

        {/* Publications */}
        <div>
           <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <BookOpen className="text-zinc-500" size={24} /> Publications
           </h3>
           {ABOUT_DATA.publications.map((pub, idx) => (
             <a key={idx} href={pub.url} target="_blank" rel="noopener noreferrer" className="block group p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
                <div className="flex justify-between items-start mb-2">
                   <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{pub.type}</span>
                   <ExternalLink size={16} className="text-zinc-500 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-white font-medium group-hover:text-emerald-400 transition-colors mb-1">{pub.title}</h4>
                <p className="text-xs text-zinc-500">{pub.desc}</p>
             </a>
           ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-700 pt-20 pb-16">
      <h2 className="text-6xl font-bold text-white mb-8 tracking-tighter">WHO AM I?</h2>
      
      {/* --- TAB NAVIGATION --- */}
      <div className="flex overflow-x-auto pb-4 mb-8 gap-2 no-scrollbar border-b border-white/10">
        {[
          { id: 'bio', label: 'Bio & Stack' },
          { id: 'journey', label: 'Journey' },
          { id: 'achievements', label: 'Achievements' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveSubTab(tab.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
              activeSubTab === tab.id 
                ? 'bg-emerald-500 text-black font-bold' 
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* --- TAB CONTENT --- */}
      <div className="min-h-[400px]">
        {activeSubTab === 'bio' && <BioTab />}
        {activeSubTab === 'journey' && <JourneyTab />}
        {activeSubTab === 'achievements' && <AchievementsTab />}
      </div>
    </div>
  );
};