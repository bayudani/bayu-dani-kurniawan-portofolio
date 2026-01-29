import React, { useState } from 'react';
import { ArrowRight, Instagram, Download, Send, MessageCircle, Mail } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic simple buat buka email client bawaan user
    const subject = `Project Inquiry from ${formData.name}`;
    const body = `${formData.message}`;
    window.location.href = `mailto:Bayu22122017@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="max-w-5xl animate-in fade-in slide-in-from-bottom-8 duration-700 pt-20 pb-32">
      
      {/* Header Big Text */}
      <h2 className="text-[12vw] md:text-[8vw] font-bold text-white leading-none tracking-tighter opacity-10 select-none mb-12 text-center md:text-left">
        LET'S CONNECT
      </h2>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        
        {/* Left Column: Info & Direct Links */}
        <div className="space-y-8">
           <p className="text-xl text-zinc-400 leading-relaxed">
             Have a project in mind or want to discuss a potential partnership? 
             I'm always open to new opportunities and professional collaborations.
           </p>

           <div className="space-y-4">
              {/* Email Direct */}
              <div className="flex items-center gap-4 text-white group cursor-pointer">
                 <div className="p-3 rounded-full bg-zinc-900 border border-zinc-800 group-hover:border-emerald-500 transition-colors">
                    <Mail size={20} className="text-emerald-500" />
                 </div>
                 <div>
                    <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Email Me</span>
                    <a href="mailto:Bayu22122017@gmail.com" className="block text-lg font-medium hover:text-emerald-400 transition-colors">
                      Bayu22122017@gmail.com
                    </a>
                 </div>
              </div>

              {/* WhatsApp Direct */}
              <div className="flex items-center gap-4 text-white group cursor-pointer">
                 <div className="p-3 rounded-full bg-zinc-900 border border-zinc-800 group-hover:border-green-500 transition-colors">
                    <MessageCircle size={20} className="text-green-500" />
                 </div>
                 <div>
                    <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Chat on WhatsApp</span>
                    <a 
                      href="https://wa.me/62895385526493" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block text-lg font-medium hover:text-green-400 transition-colors"
                    >
                      +62 895 3855 26493
                    </a>
                 </div>
              </div>
           </div>

           {/* Social Buttons */}
           <div className="flex flex-wrap gap-3 pt-4">
              <a 
                href="/cv-bayu.pdf" 
                download="CV_Bayu_Dani_Kurniawan.pdf"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-zinc-300 hover:text-white hover:bg-white/10 hover:border-emerald-500/50 transition-all text-sm"
              >
                <Download size={16} />
                <span>Resume</span>
              </a>
           </div>
        </div>

        {/* Right Column: Simple Form */}
        <div className="p-6 md:p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
           <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                 <label htmlFor="name" className="text-sm font-mono text-zinc-500 uppercase tracking-wider">Name</label>
                 <input 
                   type="text" 
                   id="name"
                   placeholder="Your Name"
                   className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                   value={formData.name}
                   onChange={(e) => setFormData({...formData, name: e.target.value})}
                   required
                 />
              </div>
              
              <div className="space-y-2">
                 <label htmlFor="message" className="text-sm font-mono text-zinc-500 uppercase tracking-wider">Message</label>
                 <textarea 
                   id="message"
                   rows={4}
                   placeholder="Tell me about your project..."
                   className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all resize-none"
                   value={formData.message}
                   onChange={(e) => setFormData({...formData, message: e.target.value})}
                   required
                 />
              </div>

              <button 
                type="submit" 
                className="w-full flex items-center justify-center gap-2 bg-white text-black font-bold py-4 rounded-xl hover:bg-zinc-200 transition-colors active:scale-[0.98]"
              >
                 Send Message
                 <Send size={18} />
              </button>
           </form>
        </div>

      </div>
    </div>
  );
};