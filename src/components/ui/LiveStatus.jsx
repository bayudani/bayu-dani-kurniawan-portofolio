import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/firebase'; 
import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import { getAuth, signInAnonymously } from 'firebase/auth';

export const LiveStatus = () => {
  const [status, setStatus] = useState({
    text: "Available for Freelance",
    color: "emerald", // Default
    online: true
  });

  // State untuk memastikan auth siap
  const [isAuthReady, setIsAuthReady] = useState(false);

  // 1. Setup Auth (Login Anonymously biar aman & stabil koneksinya)
  useEffect(() => {
    const auth = getAuth();
    signInAnonymously(auth)
      .then((userCredential) => {
        console.log("✅ Signed in anonymously:", userCredential.user.uid);
        setIsAuthReady(true);
      })
      .catch((error) => {
        console.error("❌ Auth failed:", error);
        // Tetap lanjut true karena rules-nya 'allow read: if true'
        setIsAuthReady(true);
      });
  }, []);

  // 2. Realtime Listener (Jalan setelah Auth siap)
  useEffect(() => {
    if (!isAuthReady) return;

    // Pastikan db terinisialisasi
    if (!db) {
      console.error("❌ Database instance (db) not found! Check firebase.js");
      return;
    }

    try {
        const docRef = doc(db, 'site_stats', 'status');

        console.log("📡 Listening to document: site_stats/status...");

        const unsubscribe = onSnapshot(docRef, (docSnap) => {
          if (docSnap.exists()) {
              const data = docSnap.data();
              console.log("🔥 FIRESTORE UPDATE RECEIVED:", data); // Cek console browser!
              setStatus(data);
          } else {
              console.log("⚠️ Document 'status' not found, creating default...");
              // Auto-create doc jika hilang, biar ga error
              const defaultData = { 
                  text: "Available for Freelance", 
                  color: "emerald",
                  online: true
              };
              setDoc(docRef, defaultData, { merge: true });
              setStatus(defaultData);
          }
        }, (error) => {
            console.error("❌ Snapshot Error:", error.message);
        });

        return () => unsubscribe();
    } catch (err) {
        console.error("❌ Setup Error:", err);
    }
  }, [isAuthReady]);

  const getColorClass = (color) => {
    const colors = {
        emerald: "bg-emerald-500 shadow-emerald-500/50",
        green: "bg-green-500 shadow-green-500/50",
        amber: "bg-amber-500 shadow-amber-500/50", 
        yellow: "bg-yellow-500 shadow-yellow-500/50",
        rose: "bg-rose-500 shadow-rose-500/50", 
        red: "bg-red-500 shadow-red-500/50",
        blue: "bg-blue-500 shadow-blue-500/50", 
        purple: "bg-purple-500 shadow-purple-500/50", 
        gray: "bg-zinc-500 shadow-zinc-500/50"
    };
    // Fallback ke emerald jika warna typo/tidak ada
    return colors[color?.toLowerCase()] || colors.emerald;
  };

  return (
    <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20 cursor-default group">
      <span className="relative flex h-2.5 w-2.5">
        {status.online && (
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${getColorClass(status.color).split(' ')[0]}`}></span>
        )}
        <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${getColorClass(status.color)}`}></span>
      </span>
      <span className="text-xs font-mono text-zinc-300 tracking-widest uppercase group-hover:text-white transition-colors">
        {status.text}
      </span>
    </div>
  );
};