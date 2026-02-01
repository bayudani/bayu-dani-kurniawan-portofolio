import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { db } from '../../firebase/firebase'; // Pastikan path ini sesuai lokasi firebase.js
import { doc, onSnapshot, updateDoc, increment, setDoc, getDoc } from 'firebase/firestore';

export const SpamLikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [pendingLikes, setPendingLikes] = useState(0);
  const [showBadge, setShowBadge] = useState(false);
  
  // Ref untuk debounce (menunda kirim ke database biar gak boros)
  const timeoutRef = useRef(null);

  // 1. Listen Data Realtime dari Firebase
  useEffect(() => {
    const docRef = doc(db, 'site_stats', 'likes');
    
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        setLikes(docSnap.data().count);
      } else {
        // Kalau dokumen belum ada, kita set default 0 (cuma sekali di awal project)
        setDoc(docRef, { count: 0 });
      }
    });

    return () => unsubscribe();
  }, []);

  // 2. Logic Kirim ke Database (Debounced)
  const flushLikesToDb = async (amount) => {
    if (amount === 0) return;

    const docRef = doc(db, 'site_stats', 'likes');
    try {
      await updateDoc(docRef, {
        count: increment(amount)
      });
    } catch (error) {
      console.error("Gagal update likes:", error);
    }
  };

  // 3. Handle Click / Spam
  const handleLike = (e) => {
    // A. Efek Getar di HP (Haptic Feedback)
    if (navigator.vibrate) navigator.vibrate(50);

    // B. Tambah counter lokal (biar instan di layar user)
    setPendingLikes((prev) => prev + 1);
    setShowBadge(true);

    // C. Efek Confetti Mini di posisi kursor/jari
    const rect = e.target.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 15,
      spread: 60,
      origin: { x, y },
      colors: ['#ef4444', '#ec4899', '#f472b6'], // Warna Pink/Merah
      disableForReducedMotion: true,
      zIndex: 9999,
      scalar: 0.6 // Ukuran confetti lebih kecil
    });

    // D. Debounce: Reset timer setiap kali klik
    // Kita tunggu user berhenti klik selama 2 detik, baru kirim totalnya ke DB
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    timeoutRef.current = setTimeout(() => {
      // Ambil nilai pending saat ini untuk dikirim
      setPendingLikes((currentPending) => {
        flushLikesToDb(currentPending);
        setShowBadge(false); // Sembunyikan badge "+12" nya
        return 0; // Reset pending
      });
    }, 2000); 
  };

  // Total yang ditampilkan = Data DB + Data Pending (yang belum terkirim)
  const displayCount = likes + pendingLikes;

  return (
    <div className="fixed top-25 left-6 z-50 flex flex-col items-end gap-2">
      
      {/* Badge Angka Spam (+5, +10, dst) */}
      <AnimatePresence>
        {showBadge && pendingLikes > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.5 }}
            className="bg-rose-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg mb-1 mr-2 font-mono"
          >
            +{pendingLikes}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tombol Utama */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        onClick={handleLike}
        className="group relative flex items-center justify-center w-14 h-14 bg-zinc-900/80 backdrop-blur-md border border-white/10 rounded-full shadow-2xl hover:bg-zinc-800 transition-all active:ring-4 active:ring-rose-500/30"
      >
        {/* Glow Effect di belakang */}
        <div className="absolute inset-0 bg-rose-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="relative flex flex-col items-center justify-center">
            <Heart 
                className={`w-6 h-6 transition-all duration-100 ${pendingLikes > 0 ? 'fill-rose-500 text-rose-500 scale-110' : 'text-zinc-400 group-hover:text-rose-400'}`} 
            />
            <span className="text-[10px] font-bold text-zinc-300 mt-0.5 font-mono">
                {displayCount > 999 ? (displayCount / 1000).toFixed(1) + 'k' : displayCount}
            </span>
        </div>
      </motion.button>
    </div>
  );
};