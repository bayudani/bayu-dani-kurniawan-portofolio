import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { PROFILE_DATA } from '../../data/mock';

export const About = () => {
  // List sosmed lo, udah aktif link-nya bro!
  const socialLinks = [
    {
      icon: Github,
      url: "https://github.com/bayudani"
    },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/bayu-dani-kurniawan/"
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

          <div className="space-y-4">
            <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest border-b border-white/10 pb-2">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-white/10 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  <item.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};