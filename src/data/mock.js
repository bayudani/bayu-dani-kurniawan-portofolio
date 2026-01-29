// Import gambar statis dari folder assets
// Pastikan file gambarnya ada di folder src/assets/images/
import profileImg from '../assets/images/profile.png';

// Images Project
import rekalokaImg from '../assets/images/rekaloka.png';
import vdCosmeticImg from '../assets/images/vdcosmetic.png';
import bumdesImg from '../assets/images/bumdes.png';
import gymImg from '../assets/images/fitid.png';
import moonlightImg from '../assets/images/moonlight.png';
import arBiolensImg from '../assets/images/arbiolens.png';
import arUmkmImg from '../assets/images/arumkm.png';
import medicalImg from '../assets/images/medical.png';

export const PROFILE_DATA = {
  name: "Bayu Dani K",
  role: "Web Developer",
  location: "Bengkalis, Riau",
  
  // --- PILIHAN BIO (Default: English) ---
  bio: "Dedicated Software Engineering student specializing in Web and Mobile Development with strong passion in building impactful digital products. Experienced in developing full-stack applications using Laravel, ExpressJS, Flutter, and Kotlin. Skilled in problem solving, teamwork, and adapting to new technologies quickly.",
  
  avatar: profileImg,
  stats: [
    { label: "Years", value: "01" },
    { label: "Projects", value: "09" },
    { label: "Awards", value: "01" },
  ],
  stack: ["Express JS", "Laravel", "MySQL", "Javascript", "Tailwind", "Unity", "Augmented Reality", "Flutter", "Kotlin", "Redis", "Node JS", "PHP"],
};

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "Rekaloka",
    cat: "Mobile & Web",
    desc: "Platform eksplorasi budaya dengan GenAI (Text-to-3D) & Computer Vision untuk validasi lokasi anti-spoofing.",
    link: "#",
    color: "from-orange-500/20 to-amber-600/20",
    image: rekalokaImg,
    tags: ["Node.js", "Express", "Prisma", "Python", "Gemini AI", "Redis"]
  },
  {
    id: 3,
    title: "VD Cosmetic's",
    cat: "Web",
    desc: "E-commerce kosmetik full-stack dengan dashboard keuangan real-time, booking konsultasi, dan manajemen stok.",
    link: "#",
    color: "from-rose-400/20 to-pink-500/20",
    image: vdCosmeticImg,
    tags: ["Laravel", "MySQL", "Filament", "Livewire", "Tailwind"]
  },
  {
    id: 4,
    title: "BUMDESmart",
    cat: "Web",
    desc: "Digitalisasi operasional BUMDes mencakup e-commerce publik, manajemen inventaris, dan pelaporan keuangan otomatis.",
    link: "#",
    color: "from-blue-500/20 to-cyan-600/20",
    image: bumdesImg,
    tags: ["Laravel", "Livewire", "Filament", "MySQL", "Tailwind"]
  },
  {
    id: 5,
    title: "FitID Gym",
    cat: "Mobile & Web",
    desc: "Aplikasi manajemen gym terintegrasi (Mobile+Web) dengan AI Personal Trainer (Gemini), QR attendance, dan gamifikasi.",
    link: "#",
    color: "from-emerald-500/20 to-teal-600/20",
    image: gymImg,
    tags: ["Flutter", "ExpressJS", "Laravel", "Filament", "Gemini AI"]
  },
  {
    id: 6,
    title: "Moonlight Memories",
    cat: "Mobile & Web",
    desc: "Platform Wedding Organizer (Web+Android) dengan fitur custom paket, manajemen vendor, dan pembayaran cicilan.",
    link: "#",
    color: "from-pink-500/20 to-purple-600/20",
    image: moonlightImg,
    tags: ["Kotlin", "Laravel", "Filament", "DaisyUI", "MySQL"]
  },
  {
    id: 7,
    title: "AR Biolens",
    cat: "AR",
    desc: "Aplikasi edukasi anatomi berbasis Augmented Reality & AI Context-Aware Tutor untuk visualisasi organ interaktif.",
    link: "#",
    color: "from-violet-500/20 to-indigo-600/20",
    image: arBiolensImg,
    tags: ["Unity 3D", "C#", "Vuforia", "ExpressJS", "Gemini AI"]
  },
  {
    id: 8,
    title: "AR UMKM Bumdes",
    cat: "AR",
    desc: "Katalog produk interaktif berbasis WebAR (React + MindAR) memungkinkan visualisasi produk 3D langsung di browser.",
    link: "#",
    color: "from-yellow-500/20 to-orange-600/20",
    image: arUmkmImg,
    tags: ["React.js", "MindAR", "A-Frame", "ExpressJS", "Prisma"]
  },
  {
    id: 9,
    title: "Sistem Medis Digital",
    cat: "Web",
    desc: "Manajemen klinik digital dengan rekam medis adaptif, penjadwalan dokter otomatis, dan ekspor laporan medis.",
    link: "#",
    color: "from-green-500/20 to-emerald-600/20",
    image: medicalImg,
    tags: ["Laravel", "Filament", "Livewire", "MySQL", "Tailwind"]
  }
];