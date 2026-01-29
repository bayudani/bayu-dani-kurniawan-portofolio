import React from 'react';
import { Github, Linkedin, Instagram, Download } from 'lucide-react';
import { PROFILE_DATA } from '../../data/mock';

export const About = () => {
  // List sosmed lengkap + Instagram
  const socialLinks = [
    {
      icon: Github,
      url: "https://github.com/bayudani"
    },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/bayu-dani-kurniawan/"
    },
    {
      icon: Instagram,
      url: "https://www.instagram.com/bayukrnw_n?igsh=MXAxZDY2dzJmaThvZA=="
    }
  ];

  return (
    <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-700 pt-20">
      <h2 className="text-6xl font-bold text-white mb-12 tracking-tighter">WHO AM I?</h2>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6 text-zinc-400 leading-relaxed text-lg">
          <p>
            Dedicated Software Engineering student specializing in Web and Mobile Development with strong passion in building impactful digital products.
          </p>
          <p>
            Experienced in developing full-stack applications using Laravel, ExpressJS, Flutter, and Kotlin. Skilled in problem solving, teamwork, and adapting to new technologies quickly.
          </p>
        </div>

        <div className="space-y-8">
          {/* Tech Stack Section */}
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

          {/* Connect & Resume Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest border-b border-white/10 pb-2">Connect & Resume</h3>

            <div className="flex flex-wrap items-center gap-4">
              {/* Social Icons */}
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

              {/* Divider Visual (Optional) */}
              <div className="hidden sm:block w-px h-8 bg-white/10 mx-2"></div>

              {/* Download CV Button */}
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
    </div>
  );
};