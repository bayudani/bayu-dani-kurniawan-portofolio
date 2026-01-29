import React from 'react';
import { Code, Smartphone, GraduationCap, Layout, ArrowRight, Zap, Database, Globe } from 'lucide-react';

export const Services = () => {
    const services = [
        {
            id: 1,
            title: "Fullstack Web Development",
            desc: "Need a company profile, information system, or e-commerce site? I build them using modern tech stacks (Laravel/MERN) ensuring speed, security, and scalability.",
            icon: Globe,
            color: "text-blue-400",
            bg: "group-hover:bg-blue-500/10",
            border: "group-hover:border-blue-500/50"
        },
        {
            id: 2,
            title: "Mobile App Development",
            desc: "Need an Android/iOS app for your thesis or business? I craft them using Flutter or Kotlin. Guaranteed smooth UI/UX and high performance.",
            icon: Smartphone,
            color: "text-emerald-400",
            bg: "group-hover:bg-emerald-500/10",
            border: "group-hover:border-emerald-500/50"
        },
        {
            id: 3,
            title: "Coding Assistance / Solutions",
            desc: "Tight deadline? Stuck on errors? Or need a mentor for your college assignments/thesis? Relax, I'll help you solve it (Web, Mobile, AR).",
            icon: GraduationCap,
            color: "text-yellow-400",
            bg: "group-hover:bg-yellow-500/10",
            border: "group-hover:border-yellow-500/50"
        },
        {
            id: 4,
            title: "UI/UX Design",
            desc: "App designs that aren't just pretty but user-friendly. I help visualize your ideas into interactive Figma prototypes ready for development.",
            icon: Layout,
            color: "text-pink-400",
            bg: "group-hover:bg-pink-500/10",
            border: "group-hover:border-pink-500/50"
        },
        {
            id: 5,
            title: "Augmented Reality (AR)",
            desc: "Create immersive experiences with AR (WebAR/Unity). Perfect for education, marketing campaigns, or innovative campus projects.",
            icon: Zap,
            color: "text-purple-400",
            bg: "group-hover:bg-purple-500/10",
            border: "group-hover:border-purple-500/50"
        },
        {
            id: 6,
            title: "Database & Backend API",
            desc: "Need a robust REST API or efficient database management? I handle the backend architecture so your frontend can run smoothly.",
            icon: Database,
            color: "text-cyan-400",
            bg: "group-hover:bg-cyan-500/10",
            border: "group-hover:border-cyan-500/50"
        }
    ];

    return (
        <div className="max-w-6xl animate-in fade-in slide-in-from-bottom-8 duration-700 pt-20 pb-32">

            {/* Header */}
            <div className="mb-16">
                <h2 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tighter">
                    SERVICES
                </h2>
                <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
                    More than just writing code, I provide solutions. From academic assignments to professional projects,
                    <span className="text-white font-medium"> I got your back.</span>
                </p>
            </div>

            {/* Grid Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className={`group p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 ${service.border}`}
                    >
                        <div className={`mb-6 p-4 rounded-2xl bg-zinc-900/50 w-fit ${service.color} ${service.bg} transition-colors`}>
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

            {/* Bottom CTA */}
            <div className="mt-20 p-8 md:p-12 rounded-3xl border border-dashed border-white/20 bg-zinc-900/30 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Not sure what you need?
                </h3>
                <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
                    Just consult first, it's free! Tell me your problem, and let's find the solution together.
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