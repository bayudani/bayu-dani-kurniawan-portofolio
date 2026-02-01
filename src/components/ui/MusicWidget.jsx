import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Disc3 } from 'lucide-react';

const USERNAME = import.meta.env.VITE_LASTFM_USERNAME;
const API_KEY = import.meta.env.VITE_LASTFM_API_KEY;

export const MusicWidget = ({ className }) => {
    const [song, setSong] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMusic = async () => {
            try {
                if (!USERNAME || !API_KEY) {
                    console.warn("LastFM API Key or Username is missing");
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
                        image: track.image[2]['#text'], // Ukuran Medium
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
        const interval = setInterval(fetchMusic, 30000); // Cek tiap 30 detik
        return () => clearInterval(interval);
    }, []);

    if (loading || !song) return null;

    return (
        <motion.a
            href={song.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            // FIX: Hapus 'hidden md:flex', ganti jadi 'flex' biar muncul di HP.
            // Tambahkan ${className} agar styling dari parent (App.js) bisa masuk.
            className={`fixed bottom-24 right-4 z-50 group flex items-center gap-3 bg-black/60 backdrop-blur-md border border-white/10 pr-4 pl-2 py-2 rounded-full hover:bg-black/80 transition-colors shadow-2xl ${className || ''}`}
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
            </div>

            <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold flex items-center gap-1">
                    {song.isPlaying ? 'Now Playing' : 'Last Played'}
                    {song.isPlaying && (
                        <span className="flex gap-[2px] items-end h-2">
                            <motion.span animate={{ height: [2, 8, 2] }} transition={{ repeat: Infinity, duration: 0.5 }} className="w-[2px] bg-green-500 rounded-full" />
                            <motion.span animate={{ height: [2, 6, 2] }} transition={{ repeat: Infinity, duration: 0.7, delay: 0.1 }} className="w-[2px] bg-green-500 rounded-full" />
                            <motion.span animate={{ height: [2, 8, 2] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-[2px] bg-green-500 rounded-full" />
                        </span>
                    )}
                </span>
                <span className="text-xs font-medium text-white max-w-[120px] truncate">
                    {song.name}
                </span>
                <span className="text-[10px] text-zinc-500 max-w-[120px] truncate">
                    {song.artist}
                </span>
            </div>
        </motion.a>
    );
};