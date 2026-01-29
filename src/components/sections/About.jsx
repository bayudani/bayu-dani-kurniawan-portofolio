import React from 'react';
import { Github, Linkedin, Instagram, Download, Trophy, Briefcase, Calendar, GraduationCap, Award, BookOpen, ExternalLink, Activity } from 'lucide-react';
import { PROFILE_DATA, ABOUT_DATA } from '../../data/mock_profiledata';

export const About = () => {
  // Mapping sosmed pake data dari mock
  const socialLinks = [
    {
      icon: Github,
      url: PROFILE_DATA.socials.github
    },
    {
      icon: Linkedin,
      url: PROFILE_DATA.socials.linkedin
    },
    {
      icon: Instagram,
      url: PROFILE_DATA.socials.instagram
    }
  ];

  // Helper untuk dapetin username github dari URL buat chart
  const githubUsername = PROFILE_DATA.socials.github.split('/').pop();

  return (
    <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-700 pt-20 pb-16">
      <h2 className="text-6xl font-bold text-white mb-12 tracking-tighter">WHO AM I?</h2>

      {/* --- SECTION 1: BIO, STACK & CONNECT --- */}
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <div className="space-y-6 text-zinc-400 leading-relaxed text-lg">
          <p>
            {PROFILE_DATA.bio.split('. ')[0]}.
          </p>
          <p>
            {PROFILE_DATA.bio.split('. ').slice(1).join('. ')}
          </p>
        </div>

        <div className="space-y-8">
          {/* Tech Stack */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest border-b border-white/10 pb-2">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {PROFILE_DATA.stack.map(tech => (
                <span key={tech} className="px-4 py-2 border border-white/10 rounded-lg text-zinc-300 hover:bg-white/5 hover:border-white/30 transition-colors text-sm cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Connect & Resume */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest border-b border-white/10 pb-2">Connect & Resume</h3>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex gap-3">
                {socialLinks.map((item, i) => (
                  <a
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-white/10 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110"
                  >
                    <item.icon size={20} />
                  </a>
                ))}
              </div>
              <div className="hidden sm:block w-px h-8 bg-white/10 mx-2"></div>
              <a
                href="/cv-bayu.pdf"
                download="CV_Bayu_Dani_Kurniawan.pdf"
                className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-zinc-300 hover:text-white hover:bg-white/10 hover:border-emerald-500/50 transition-all group"
              >
                <Download size={18} className="group-hover:text-emerald-500 transition-colors" />
                <span className="text-xs font-mono tracking-wider font-bold">DOWNLOAD CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* --- SECTION 2: WHY WORK WITH ME --- */}
      <div className="mb-20">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          Why Work With Me?
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {ABOUT_DATA.values.map((val, idx) => (
            <div key={idx} className="p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group">
              <div className="mb-4 p-3 bg-zinc-900 rounded-lg w-fit text-zinc-400 group-hover:text-emerald-400 transition-colors">
                <val.icon size={24} />
              </div>
              <h4 className="text-white font-bold mb-2">{val.title}</h4>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* --- SECTION 3: JOURNEY & ACHIEVEMENTS --- */}
      <div className="grid md:grid-cols-2 gap-12 border-t border-white/10 pt-12">

        {/* LEFT COLUMN: Education & Experience */}
        <div className="space-y-12">

          {/* 1. Education */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <GraduationCap className="text-zinc-500" size={24} />
              Education
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

          {/* 2. Experience */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Briefcase className="text-zinc-500" size={24} />
              Experience
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

        {/* RIGHT COLUMN: Awards, Certs & Pubs */}
        <div className="space-y-12">

          {/* 1. Awards (Hardcoded for special highlight) */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Trophy className="text-zinc-500" size={24} />
              Awards
            </h3>
            <div className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
              <div className="absolute top-6 right-6 text-yellow-500/20 group-hover:text-yellow-500/50 transition-colors">
                <Trophy size={48} />
              </div>
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-xs font-mono mb-4 border border-yellow-500/20">
                  1st Place Winner
                </span>
                <h4 className="text-xl font-bold text-white mb-2">KOMTIK Competition</h4>
                <p className="text-zinc-400 text-sm">
                  Information and Communication Technology Competition in UI/UX Design category.
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs text-zinc-500">
                  <Calendar size={14} />
                  <span>2024</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Award className="text-zinc-500" size={24} />
              Certifications
            </h3>
            <div className="flex flex-wrap gap-2">
              {ABOUT_DATA.certifications.map((cert, idx) => (
                <span key={idx} className="px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors cursor-default">
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* 3. GitHub Activity Graph */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Activity className="text-zinc-500" size={24} />
              Coding Activity
            </h3>
            <div className="p-4 rounded-xl border border-white/10 bg-white/5 hover:border-emerald-500/30 transition-colors overflow-hidden">
              <img
                src={`https://ghchart.rshah.org/10b981/${githubUsername}`}
                alt="GitHub Contribution Graph"
                className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity"
              />
              <div className="mt-3 flex justify-between items-center text-xs text-zinc-500 font-mono">
                <span>@{githubUsername}</span>
                <span className="text-emerald-500">Last Year Contributions</span>
              </div>
            </div>
          </div>

          {/* 4. Publications */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <BookOpen className="text-zinc-500" size={24} />
              Publications
            </h3>
            {ABOUT_DATA.publications.map((pub, idx) => (
              <a
                key={idx}
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{pub.type}</span>
                  <ExternalLink size={16} className="text-zinc-500 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-white font-medium group-hover:text-emerald-400 transition-colors mb-1">
                  {pub.title}
                </h4>
                <p className="text-xs text-zinc-500">
                  {pub.desc}
                </p>
              </a>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};