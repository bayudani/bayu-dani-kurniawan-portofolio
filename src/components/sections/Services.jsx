import React, { useState, useEffect } from "react";
import {
    Smartphone,
    GraduationCap,
    Layout,
    ArrowRight,
    Zap,
    Database,
    Globe,
    Star,
    Quote,
    Plus,
    ChevronDown,
    ChevronUp,
    HelpCircle,
    ShieldCheck // Tambahan icon untuk indikator privasi
} from "lucide-react";
import { TESTIMONIALS } from "../../data/mock_profiledata";

export const Services = () => {
    // --- KONFIGURASI GOOGLE SHEETS & FORM ---
    const GOOGLE_SHEET_CSV_URL =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vSXv8bqT8Wi2AjkV7V4tj2jLAMSWxwyFCqwsE1eFx8HxMEBJkV4T-jYdsdzl37UZj18fAd056NJqTqk/pub?output=csv";

    const GOOGLE_FORM_URL = "https://forms.gle/SvDKdonFJAKyRVJZ6";
    // ---------------------------------------------------------

    const [reviews, setReviews] = useState(TESTIMONIALS);
    const [loading, setLoading] = useState(true);
    
    // State buat Accordion FAQ
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    // Fungsi Helper: Sensor Nama
    // Mengubah "Bayu Ardiansyah" menjadi "B*** A***"
    const censorName = (name) => {
        if (!name || name === "Anonymous") return "Student/Client";
        return name
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + "***") // Ambil huruf depan + ***
            .join(" ");
    };

    // Fungsi Toggle FAQ
    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    // Data FAQ
    const faqs = [
        {
            q: "What is the price range for web/app development?",
            a: "Pricing is very flexible depending on feature complexity. Simple Landing Pages start at affordable rates, while complex Fullstack Systems are scoped accordingly. Let's chat first, budget is negotiable! 😉"
        },
        {
            q: "How long does the development process take?",
            a: "It depends on the project scope. Academic assignments or Landing Pages usually take 3-7 days. Large-scale applications typically need 2-4 weeks. Need it ASAP? We can discuss priority delivery."
        },
        {
            q: "Do I get the Source Code?",
            a: "Yes, 100%! You will receive the Full Source Code, Database, and an installation guide. It's completely yours for future development."
        },
        {
            q: "Is there a revision guarantee?",
            a: "Absolutely. I provide 2x free minor revisions (bug fixes/small tweaks) after handover. New features outside the initial agreement will incur additional costs."
        },
        {
            q: "What Tech Stack do you usually use?",
            a: "I specialize in Laravel (PHP), React/Next.js, Flutter (Mobile), and AR (Unity/WebAR). However, I am adaptive if you require a specific stack like Node.js or Native."
        }
    ];

    // Fungsi Fetch Data dari Google Sheets
    useEffect(() => {
        const fetchReviews = async () => {
            if (GOOGLE_SHEET_CSV_URL.includes("CONTOH")) {
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(GOOGLE_SHEET_CSV_URL);
                const text = await response.text();

                // Parse CSV Manual
                const rows = text.split("\n").slice(1);
                const newReviews = rows
                    .map((row) => {
                        const cols = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
                        if (cols.length < 4) return null;

                        return {
                            name: cols[1]?.replace(/^"|"$/g, "").trim() || "Anonymous",
                            role: cols[2]?.replace(/^"|"$/g, "").trim() || "Client",
                            rating: parseInt(cols[3]?.replace(/^"|"$/g, "")) || 5,
                            msg: cols[4]?.replace(/^"|"$/g, "").trim() || "No review text.",
                        };
                    })
                    .filter((item) => item !== null);

                setReviews([...newReviews.reverse(), ...TESTIMONIALS]);
            } catch (error) {
                console.error("Error fetching reviews:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, []);

    const services = [
        {
            id: 1,
            title: "Fullstack Web Development",
            desc: "Need a company profile, information system, or e-commerce site? I build them using modern tech stacks (Laravel/MERN) ensuring speed, security, and scalability.",
            icon: Globe,
            color: "text-blue-400",
            bg: "group-hover:bg-blue-500/10",
            border: "group-hover:border-blue-500/50",
        },
        {
            id: 2,
            title: "Mobile App Development",
            desc: "Need an Android/iOS app for your thesis or business? I craft them using Flutter or Kotlin. Guaranteed smooth UI/UX and high performance.",
            icon: Smartphone,
            color: "text-emerald-400",
            bg: "group-hover:bg-emerald-500/10",
            border: "group-hover:border-emerald-500/50",
        },
        {
            id: 3,
            title: "Coding Assistance / Solutions",
            desc: "Tight deadline? Stuck on errors? Or need a mentor for your college assignments/thesis? Relax, I'll help you solve it (Web, Mobile, AR).",
            icon: GraduationCap,
            color: "text-yellow-400",
            bg: "group-hover:bg-yellow-500/10",
            border: "group-hover:border-yellow-500/50",
        },
        {
            id: 4,
            title: "UI/UX Design",
            desc: "App designs that aren't just pretty but user-friendly. I help visualize your ideas into interactive Figma prototypes ready for development.",
            icon: Layout,
            color: "text-pink-400",
            bg: "group-hover:bg-pink-500/10",
            border: "group-hover:border-pink-500/50",
        },
        {
            id: 5,
            title: "Augmented Reality (AR)",
            desc: "Create immersive experiences with AR (WebAR/Unity). Perfect for education, marketing campaigns, or innovative campus projects.",
            icon: Zap,
            color: "text-purple-400",
            bg: "group-hover:bg-purple-500/10",
            border: "group-hover:border-purple-500/50",
        },
        {
            id: 6,
            title: "Database & Backend API",
            desc: "Need a robust REST API or efficient database management? I handle the backend architecture so your frontend can run smoothly.",
            icon: Database,
            color: "text-cyan-400",
            bg: "group-hover:bg-cyan-500/10",
            border: "group-hover:border-cyan-500/50",
        },
    ];

    return (
        <div className="max-w-6xl animate-in fade-in slide-in-from-bottom-8 duration-700 pt-20 pb-32">
            
            {/* Header */}
            <div className="mb-16">
                <h2 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tighter">
                    SERVICES
                </h2>
                <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
                    More than just writing code, I provide solutions. From academic
                    assignments to professional projects,
                    <span className="text-white font-medium"> I got your back.</span>
                </p>
            </div>

            {/* Grid Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className={`group p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 ${service.border}`}
                    >
                        <div
                            className={`mb-6 p-4 rounded-2xl bg-zinc-900/50 w-fit ${service.color} ${service.bg} transition-colors`}
                        >
                            <service.icon size={32} />
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                            {service.title}
                        </h3>

                        <p className="text-sm text-zinc-400 leading-relaxed mb-8">
                            {service.desc}
                        </p>

                        <a
                            href={`https://wa.me/62895385526493?text=Hi%20Bayu,%20I'm%20interested%20in%20your%20${encodeURIComponent(service.title)}%20service`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-mono font-bold text-white opacity-60 group-hover:opacity-100 transition-opacity"
                        >
                            ORDER NOW <ArrowRight size={16} />
                        </a>
                    </div>
                ))}
            </div>

            {/* --- SECTION: TESTIMONIALS --- */}
            <div className="mb-24 relative">
                <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-10 gap-4">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                            <Quote className="text-emerald-500 fill-emerald-500/20" />
                            Trusted by Clients & Friends
                        </h3>
                        <p className="text-zinc-500 text-sm mt-2 ml-1 flex items-center gap-2">
                            Real feedback. 
                            <span className="inline-flex items-center gap-1 text-emerald-400/80 bg-emerald-500/10 px-2 py-0.5 rounded text-xs border border-emerald-500/20">
                                <ShieldCheck size={12} /> Privacy Protected
                            </span>
                        </p>
                    </div>

                    <a
                        href={GOOGLE_FORM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/50 hover:bg-emerald-500 hover:text-black transition-all font-medium text-sm"
                    >
                        <Plus size={16} /> Write a Review
                    </a>
                </div>

                {/* List Review */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {reviews.map((testi, idx) => (
                        <div
                            key={idx}
                            className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all"
                        >
                            <div className="flex gap-1 text-yellow-500 mb-4">
                                {[...Array(Number(testi.rating || 5))].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>

                            <p className="text-zinc-300 text-lg leading-relaxed italic mb-6">
                                "{testi.msg}"
                            </p>

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center text-white font-bold text-sm border border-white/10 uppercase">
                                    {testi.name ? testi.name.charAt(0) : "A"}
                                </div>
                                <div>
                                    {/* NAMA DI SENSOR DISINI */}
                                    <h4 className="text-white font-bold text-sm">
                                        {censorName(testi.name)}
                                    </h4>
                                    <p className="text-zinc-500 text-xs uppercase tracking-wider">
                                        {testi.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- NEW SECTION: FAQ --- */}
            <div className="mb-24">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 flex items-center gap-3">
                    <HelpCircle className="text-emerald-500" />
                    Frequently Asked Questions
                </h3>
                
                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div 
                            key={idx} 
                            className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden transition-all duration-300 hover:border-emerald-500/30"
                        >
                            <button 
                                onClick={() => toggleFaq(idx)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className="font-bold text-zinc-100 text-lg">{faq.q}</span>
                                {openFaqIndex === idx ? (
                                    <ChevronUp className="text-emerald-500" />
                                ) : (
                                    <ChevronDown className="text-zinc-500" />
                                )}
                            </button>
                            
                            <div 
                                className={`px-6 pb-6 text-zinc-400 leading-relaxed transition-all duration-300 ease-in-out ${
                                    openFaqIndex === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0 overflow-hidden pb-0'
                                }`}
                            >
                                {faq.a}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom CTA */}
            <div className="p-8 md:p-12 rounded-3xl border border-dashed border-white/20 bg-zinc-900/30 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Not sure what you need?
                </h3>
                <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
                    Just consult first, it's free! Tell me your problem, and let's find
                    the solution together.
                </p>
                <a
                    href="https://wa.me/62895385526493?text=Hi%20Bayu,%20I%20want%20to%20consult%20about%20a%20project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-zinc-200 transition-all active:scale-95"
                >
                    Consult via WhatsApp
                    <ArrowRight size={20} />
                </a>
            </div>
        </div>
    );
};