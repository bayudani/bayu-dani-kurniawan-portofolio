import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Disc3, ExternalLink, PlayCircle } from 'lucide-react'; // Tambah icon Play

// Ganti import.meta.env dengan process.env untuk kompatibilitas
const USERNAME = import.meta.env.VITE_LASTFM_USERNAME;
const API_KEY = import.meta.env.VITE_LASTFM_API_KEY;
export const MusicWidget = ({ className }) => {
    const [song, setSong] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMusic = async () => {
            try {
                if (!USERNAME || !API_KEY) {
                    if (!API_KEY) console.warn("LastFM API Key is missing.");
                    setLoading(false);
                    return;
                }

                const res = await fetch(
                    `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USERNAME}&api_key=${API_KEY}&format=json&limit=1`
                );
                const data = await res.json();
                const track = data.recenttracks?.track?.[0];

                if (track) {
                    setSong({
                        name: track.name,
                        artist: track.artist['#text'],
                        image: track.image[2]['#text'],
                        isPlaying: track['@attr']?.nowplaying === 'true',
                        url: track.url
                    });
                }
            } catch (error) {
                console.error("Error fetching music:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMusic();
        const interval = setInterval(fetchMusic, 30000); 
        return () => clearInterval(interval);
    }, []);

    if (loading || !song) return null;

    // FITUR BARU: Generate Link ke Spotify Search
    // Ini akan membuka Spotify dan langsung mencari "Judul Lagu + Artis"
    const spotifyUrl = `https://open.spotify.com/search/${encodeURIComponent(song.name + " " + song.artist)}`;

    return (
        <motion.a
            href={spotifyUrl} // Link diganti ke Spotify
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`fixed bottom-34 right-4 z-50 group flex items-center gap-3 bg-black/60 backdrop-blur-md border border-white/10 pr-4 pl-2 py-2 rounded-full hover:bg-black/80 transition-all hover:scale-105 hover:border-green-500/50 shadow-2xl cursor-pointer ${className || ''}`}
            title="Click to listen on Spotify"
        >
            <div className={`relative w-10 h-10 rounded-full overflow-hidden border border-white/20 ${song.isPlaying ? 'animate-spin-slow' : ''}`}>
                {song.image ? (
                    <img src={song.image} alt={song.name} className="w-full h-full object-cover" />
                ) : (
                    <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
                        <Disc3 size={16} className="text-zinc-500" />
                    </div>
                )}

                {/* Status Dot */}
                <div className={`absolute top-0 right-0 w-3 h-3 rounded-full border-2 border-black ${song.isPlaying ? 'bg-green-500 animate-pulse' : 'bg-zinc-500'}`} />
                
                {/* Overlay Play Icon saat Hover */}
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <PlayCircle size={20} className="text-white" />
                </div>
            </div>

            <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold flex items-center gap-1 group-hover:text-green-400 transition-colors">
                    {song.isPlaying ? 'Now Playing' : 'Last Played'}
                    {song.isPlaying && (
                        <span className="flex gap-[2px] items-end h-2">
                            <motion.span animate={{ height: [2, 8, 2] }} transition={{ repeat: Infinity, duration: 0.5 }} className="w-[2px] bg-green-500 rounded-full" />
                            <motion.span animate={{ height: [2, 6, 2] }} transition={{ repeat: Infinity, duration: 0.7, delay: 0.1 }} className="w-[2px] bg-green-500 rounded-full" />
                            <motion.span animate={{ height: [2, 8, 2] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-[2px] bg-green-500 rounded-full" />
                        </span>
                    )}
                </span>
                <span className="text-xs font-medium text-white max-w-[120px] truncate group-hover:underline decoration-green-500/50 underline-offset-2">
                    {song.name}
                </span>
                <span className="text-[10px] text-zinc-500 max-w-[120px] truncate">
                    {song.artist}
                </span>
            </div>
        </motion.a>
    );
};