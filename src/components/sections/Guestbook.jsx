import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/firebase'; // Pastikan path import ini sesuai lokasi file firebase.js
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { Send, MessageSquare, User, Loader2 } from 'lucide-react';

export const Guestbook = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);

    // 1. Fetch Data Realtime
    useEffect(() => {
        // Mengambil koleksi "guestbook" diurutkan dari yang terbaru
        const q = query(collection(db, 'guestbook'), orderBy('createdAt', 'desc'));

        // onSnapshot akan otomatis update jika ada data baru masuk (Realtime!)
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const msgs = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setMessages(msgs);
        });

        return () => unsubscribe();
    }, []);

    // 2. Fungsi Kirim Pesan
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!newMessage.trim() || !name.trim()) return;

        setLoading(true);
        try {
            await addDoc(collection(db, 'guestbook'), {
                name: name,
                text: newMessage,
                createdAt: serverTimestamp(), // Menggunakan waktu server
                avatarColor: `hsl(${Math.random() * 360}, 70%, 50%)` // Warna avatar random
            });

            // Reset form
            setNewMessage('');
            // Nama tidak di-reset agar user tidak perlu ngetik ulang kalau mau chat lagi
        } catch (error) {
            console.error("Error adding document: ", error);
            alert("Gagal mengirim pesan. Cek koneksi internetmu.");
        } finally {
            setLoading(false);
        }
    };

    // Helper untuk format tanggal
    const formatDate = (timestamp) => {
        if (!timestamp) return '';
        // timestamp dari firebase perlu dikonversi ke Date object JS
        return new Date(timestamp.seconds * 1000).toLocaleDateString("id-ID", {
            day: 'numeric', month: 'short', year: 'numeric'
        });
    };

    return (
        <section className="max-w-4xl mx-auto py-20 px-6">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                    <MessageSquare className="text-emerald-500" size={32} />
                    Guestbook
                </h2>
                <p className="text-zinc-400">
                    Tinggalkan jejak, saran, atau sekadar menyapa! 👋
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">

                {/* KOLOM KIRI: Form Input */}
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl h-fit sticky top-24">
                    <h3 className="text-xl font-bold text-white mb-6">Sign the Guestbook</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-1 block">Nama</label>
                            <div className="relative">
                                <User className="absolute left-3 top-3 text-zinc-500" size={18} />
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Nama kamu..."
                                    className="w-full bg-black/50 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-1 block">Pesan</label>
                            <textarea
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                placeholder="Tulis pesan keren di sini..."
                                rows="4"
                                className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="animate-spin" size={18} /> Mengirim...
                                </>
                            ) : (
                                <>
                                    <Send size={18} /> Kirim Pesan
                                </>
                            )}
                        </button>
                    </form>
                </div>

                {/* KOLOM KANAN: Daftar Pesan */}
                <div className="space-y-4 max-h-[600px] overflow-y-auto custom-scrollbar pr-2">
                    {messages.length === 0 ? (
                        <div className="text-center text-zinc-500 py-10 italic">
                            Belum ada pesan. Jadilah yang pertama! 🚀
                        </div>
                    ) : (
                        messages.map((msg) => (
                            <div key={msg.id} className="group p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all animate-in fade-in slide-in-from-bottom-2">
                                <div className="flex items-start gap-3">
                                    <div
                                        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shrink-0"
                                        style={{ backgroundColor: msg.avatarColor || '#10b981' }}
                                    >
                                        {msg.name.charAt(0).toUpperCase()}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-baseline mb-1">
                                            <h4 className="font-bold text-zinc-200 truncate">{msg.name}</h4>
                                            <span className="text-[10px] text-zinc-600 font-mono shrink-0 ml-2">
                                                {formatDate(msg.createdAt)}
                                            </span>
                                        </div>
                                        <p className="text-zinc-400 text-sm leading-relaxed break-words">
                                            {msg.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

            </div>
        </section>
    );
};
