import React, { useEffect, useState } from 'react';
import { GitCommit, GitPullRequest, Star, GitBranch, AlertCircle, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const GithubActivity = ({ username }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGithubActivity = async () => {
      if (!username) return;
      
      try {
        // Ambil data event publik (Push, PR, dll)
        const response = await fetch(`https://api.github.com/users/${username}/events?per_page=10`);
        
        if (!response.ok) {
            if (response.status === 403) throw new Error("API Rate Limit Exceeded (Tunggu sebentar)");
            throw new Error("Gagal mengambil data GitHub");
        }

        const data = await response.json();
        
        // Filter cuma ambil PushEvent dan PullRequestEvent biar rapi
        const relevantEvents = data.filter(evt => 
            evt.type === 'PushEvent' || evt.type === 'PullRequestEvent' || evt.type === 'WatchEvent'
        ).slice(0, 5); // Ambil 5 terakhir aja

        setEvents(relevantEvents);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubActivity();
  }, [username]);

  // Helper untuk format waktu (e.g., "2 hours ago")
  const formatTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = Math.floor((now - date) / 1000); // detik

    if (diff < 60) return `${diff}s ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return `${Math.floor(diff / 86400)}d ago`;
  };

  return (
    <div className="space-y-6">
      {/* 1. GitHub Stats Cards (Pakai Vercel Widget biar enteng & visual bagus) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         <div className="relative group">
             <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
             <img 
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=dark&hide_border=true&bg_color=00000000&text_color=a1a1aa&title_color=10b981&icon_color=10b981`}
                alt="GitHub Stats"
                className="relative w-full h-auto rounded-xl border border-white/10 bg-zinc-900/50"
             />
         </div>
         <div className="relative group hidden md:block">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <img 
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=dark&hide_border=true&bg_color=00000000&text_color=a1a1aa&title_color=3b82f6`}
                alt="Top Languages"
                className="relative w-full h-auto rounded-xl border border-white/10 bg-zinc-900/50"
            />
         </div>
      </div>

      {/* 2. Recent Activity Feed */}
      <div className="space-y-4">
        <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest border-b border-white/10 pb-2 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"/>
            Live Activity Feed
        </h3>

        {loading ? (
            <div className="flex justify-center py-8">
                <Loader2 className="animate-spin text-zinc-500" />
            </div>
        ) : error ? (
            <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 p-4 rounded-lg border border-red-500/20">
                <AlertCircle size={16} /> {error}
            </div>
        ) : (
            <div className="space-y-0 relative border-l border-zinc-800 ml-3">
                {events.map((event, idx) => (
                    <motion.div 
                        key={event.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="relative pl-8 pb-8 last:pb-0"
                    >
                        {/* Dot Connector */}
                        <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-zinc-900 border border-zinc-600 ring-4 ring-black" />
                        
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center justify-between text-xs">
                                <span className="text-zinc-500 font-mono">{formatTime(event.created_at)}</span>
                                <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-zinc-400">
                                    {event.type.replace('Event', '')}
                                </span>
                            </div>
                            
                            {/* Content based on event type */}
                            {event.type === 'PushEvent' && (
                                <div className="text-sm text-zinc-300">
                                    <span className="text-emerald-400 font-bold">Pushed</span> {event.payload.size} commits to 
                                    <a href={`https://github.com/${event.repo.name}`} target="_blank" rel="noreferrer" className="text-white hover:text-emerald-400 ml-1 font-medium transition-colors">
                                        {event.repo.name}
                                    </a>
                                    <div className="mt-1 text-xs text-zinc-500 bg-zinc-900/50 p-2 rounded border border-white/5 font-mono truncate">
                                        <GitCommit size={12} className="inline mr-1"/>
                                        {event.payload.commits[0]?.message || "No commit message"}
                                    </div>
                                </div>
                            )}

                            {event.type === 'PullRequestEvent' && (
                                <div className="text-sm text-zinc-300">
                                    <span className="text-purple-400 font-bold">{event.payload.action}</span> PR in
                                    <a href={`https://github.com/${event.repo.name}`} target="_blank" rel="noreferrer" className="text-white hover:text-purple-400 ml-1 font-medium transition-colors">
                                        {event.repo.name}
                                    </a>
                                </div>
                            )}

                             {event.type === 'WatchEvent' && (
                                <div className="text-sm text-zinc-300">
                                    <span className="text-yellow-400 font-bold">Starred</span> repo
                                    <a href={`https://github.com/${event.repo.name}`} target="_blank" rel="noreferrer" className="text-white hover:text-yellow-400 ml-1 font-medium transition-colors">
                                        {event.repo.name}
                                    </a>
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        )}
      </div>
    </div>
  );
};