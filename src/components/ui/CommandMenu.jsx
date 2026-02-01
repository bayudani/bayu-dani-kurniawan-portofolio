import React, { useEffect, useState } from "react";
import { Command } from "cmdk";
import { 
  LayoutGrid, User, Briefcase, Send, Github, Linkedin, Instagram, 
  Search, ExternalLink, Menu
} from "lucide-react";
import { PROFILE_DATA } from "../../data/mock_profiledata";

export const CommandMenu = ({ activeTab, setActiveTab }) => {
  const [open, setOpen] = useState(false);

  // Toggle pake Ctrl+K atau Cmd+K (Desktop Only Logic)
  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // Fungsi ganti tab & tutup menu
  const runCommand = (command) => {
    setOpen(false);
    command();
  };

  return (
    <>
      {/* TRIGGER BUTTON (RESPONSIVE)
        - Mobile: Tombol bulat ikon search (posisi agak ke atas biar ga ketutup nav)
        - Desktop: Badge "Press Ctrl+K"
      */}
      <button 
        onClick={() => setOpen(true)}
        className="fixed z-50 flex items-center justify-center transition-all shadow-2xl
          /* Mobile Styles (Floating Button) */
          bottom-24 left-6 w-12 h-12 rounded-full bg-emerald-500 text-black border border-emerald-400
          /* Desktop Styles (Badge) */
          md:bottom-6 md:right-6 md:w-auto md:h-auto md:px-4 md:py-2 md:rounded-lg md:bg-zinc-900/80 md:text-zinc-400 md:border-white/10 md:backdrop-blur-md md:hover:text-white md:hover:border-emerald-500/50
        "
      >
        {/* Ikon Search (Muncul di Mobile & Desktop) */}
        <Search size={20} className="md:w-4 md:h-4 md:mr-2" />
        
        {/* Teks Hint (Cuma muncul di Desktop) */}
        <div className="hidden md:flex items-center gap-2">
          <span className="font-mono text-xs">Press</span>
          <kbd className="bg-zinc-800 px-1.5 py-0.5 rounded border border-white/10 font-sans text-[10px]">Ctrl</kbd> 
          <span className="font-mono text-xs">+</span>
          <kbd className="bg-zinc-800 px-1.5 py-0.5 rounded border border-white/10 font-sans text-[10px]">K</kbd>
        </div>
      </button>

      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Global Command Menu"
        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-start md:items-center justify-center p-4 pt-20 md:pt-4"
        onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
        }}
      >
        <div className="w-full max-w-lg bg-zinc-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          
          {/* Input Search */}
          <div className="flex items-center border-b border-white/10 px-4">
            <Search className="w-5 h-5 text-zinc-500 mr-3" />
            <Command.Input 
              placeholder="Search page or command..."
              className="flex-1 bg-transparent py-4 text-white placeholder:text-zinc-500 outline-none text-sm font-mono"
            />
            <div className="flex items-center gap-1">
                <kbd 
                  onClick={() => setOpen(false)}
                  className="bg-zinc-800 px-2 py-1 rounded text-[10px] text-zinc-400 border border-white/5 cursor-pointer hover:bg-zinc-700"
                >
                  ESC
                </kbd>
            </div>
          </div>

          {/* List Menu */}
          <Command.List className="max-h-[300px] overflow-y-auto p-2 custom-scrollbar">
            <Command.Empty className="py-6 text-center text-sm text-zinc-500">
              No results found.
            </Command.Empty>

            <Command.Group heading="Navigation" className="text-xs text-zinc-500 font-mono mb-2 px-2 mt-2">
              <Command.Item
                onSelect={() => runCommand(() => setActiveTab("home"))}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-zinc-300 hover:bg-emerald-500/10 hover:text-emerald-400 cursor-pointer transition-colors aria-selected:bg-emerald-500/10 aria-selected:text-emerald-400"
              >
                <LayoutGrid size={16} />
                <span>Home / Projects</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => setActiveTab("about"))}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-zinc-300 hover:bg-emerald-500/10 hover:text-emerald-400 cursor-pointer transition-colors aria-selected:bg-emerald-500/10 aria-selected:text-emerald-400"
              >
                <User size={16} />
                <span>About Me</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => setActiveTab("services"))}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-zinc-300 hover:bg-emerald-500/10 hover:text-emerald-400 cursor-pointer transition-colors aria-selected:bg-emerald-500/10 aria-selected:text-emerald-400"
              >
                <Briefcase size={16} />
                <span>Services</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => setActiveTab("contact"))}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-zinc-300 hover:bg-emerald-500/10 hover:text-emerald-400 cursor-pointer transition-colors aria-selected:bg-emerald-500/10 aria-selected:text-emerald-400"
              >
                <Send size={16} />
                <span>Contact</span>
              </Command.Item>
            </Command.Group>

            <Command.Separator className="h-px bg-white/10 my-2 mx-2" />

            <Command.Group heading="Socials" className="text-xs text-zinc-500 font-mono mb-2 px-2">
              <Command.Item
                onSelect={() => runCommand(() => window.open(PROFILE_DATA.socials.github, "_blank"))}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-zinc-300 hover:bg-white/10 cursor-pointer transition-colors aria-selected:bg-white/10"
              >
                <Github size={16} />
                <span className="flex-1">GitHub</span>
                <ExternalLink size={12} className="opacity-50" />
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => window.open(PROFILE_DATA.socials.linkedin, "_blank"))}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-zinc-300 hover:bg-white/10 cursor-pointer transition-colors aria-selected:bg-white/10"
              >
                <Linkedin size={16} />
                <span className="flex-1">LinkedIn</span>
                <ExternalLink size={12} className="opacity-50" />
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => window.open(PROFILE_DATA.socials.instagram, "_blank"))}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-zinc-300 hover:bg-white/10 cursor-pointer transition-colors aria-selected:bg-white/10"
              >
                <Instagram size={16} />
                <span className="flex-1">Instagram</span>
                <ExternalLink size={12} className="opacity-50" />
              </Command.Item>
            </Command.Group>

          </Command.List>
        </div>
      </Command.Dialog>
    </>
  );
};