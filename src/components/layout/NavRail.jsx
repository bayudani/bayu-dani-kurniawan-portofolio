import React from 'react';
import { LayoutGrid, User, Send,Briefcase,Book } from 'lucide-react';

export const NavRail = ({ active, setActive }) => {
  const items = [
    { id: 'home', icon: LayoutGrid, label: 'Work' },
    { id: 'about', icon: User, label: 'Profile' },
    { id: 'services', icon: Briefcase, label: 'Services' },
    { id: 'contact', icon: Send, label: 'Connect' },
    { id: 'guestbook', icon: Book, label: 'Guestbook' },
  ];

  return (
    <>
      <div className="fixed z-40 left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-8 items-center py-8 px-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`relative group p-3 rounded-full transition-all duration-300 ${
              active === item.id ? 'bg-white text-black' : 'text-zinc-500 hover:text-white hover:bg-white/10'
            }`}
          >
            <item.icon size={20} strokeWidth={1.5} />
            <span className="absolute left-14 top-1/2 -translate-y-1/2 px-3 py-1 bg-zinc-900 text-white text-xs rounded border border-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {item.label}
            </span>
          </button>
        ))}
      </div>

      <div className="lg:hidden fixed bottom-6 left-6 right-6 z-40 bg-zinc-900/80 backdrop-blur-xl border border-white/10 p-2 rounded-2xl flex justify-around shadow-2xl">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`p-4 rounded-xl transition-all ${active === item.id ? 'bg-white text-black' : 'text-zinc-500'}`}
          >
            <item.icon size={20} />
          </button>
        ))}
      </div>
    </>
  );
};
