
import profileImg from '../assets/images/profile.png';

// Images Project
import rekalokaImg from '../assets/images/rekaloka.png';
import supplierImg from '../assets/images/supplier.png'; 
import floodguardImg from '../assets/images/floodguard.png';
import vdCosmeticImg from '../assets/images/vdcosmetic.png';
import bumdesImg from '../assets/images/bumdes.png';
import gymImg from '../assets/images/fitid.png';
import moonlightImg from '../assets/images/moonlight.png';
import arBiolensImg from '../assets/images/arbiolens.png';
import arUmkmImg from '../assets/images/arumkm.png';
import medicalImg from '../assets/images/medical.png';

export const PROFILE_DATA = {
  name: "Bayu Dani Kurniawan",
  role: "Web Developer",
  location: "Bengkalis, Riau",
  
  // --- PILIHAN BIO (Default: English) ---
  bio: "Dedicated Software Engineering student specializing in Web and Mobile Development with strong passion in building impactful digital products. Experienced in developing full-stack applications using Laravel, ExpressJS, Flutter, and Kotlin. Skilled in problem solving, teamwork, and adapting to new technologies quickly.",
  
  avatar: profileImg,
  stats: [
    { label: "Years", value: "2" },
    { label: "Projects", value: "10" }, 
    { label: "Awards", value: "01" },
  ],
  stack: ["Express JS", "Laravel", "MySQL", "Javascript", "Tailwind", "Unity", "Augmented Reality", "Flutter", "Kotlin", "Redis", "Node JS", "PHP"],
};

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "Rekaloka",
    cat: "Mobile & Web", // Dual category
    desc: "Platform eksplorasi budaya dengan GenAI (Text-to-3D) & Computer Vision.",
    link: "#",
    color: "from-orange-500/20 to-amber-600/20",
    image: rekalokaImg,
    tags: ["Node.js", "Express", "Prisma", "Python", "Gemini AI", "Redis"],
    details: {
      overview: "Membangun infrastruktur backend yang scalable dan mengintegrasikan kecerdasan buatan (Generative AI & Computer Vision) untuk menciptakan pengalaman gamifikasi budaya yang imersif.",
      features: [
        "Text-to-3D Generator menggunakan Shap-E & TripoSR",
        "Anti-spoofing Location Check dengan Gemini Vision",
        "Gamifikasi Budaya (XP, Badges, Leaderboard)",
        "REST API High Performance dengan Redis Caching"
      ],
      stack: "Node.js, Express, Prisma, Python (Colab), Redis, Gemini AI"
    }
  },
  {
    id: 2,
    title: "Supplier System",
    cat: "Web",
    desc: "Sistem manajemen stok & produksi dengan RBAC ketat untuk separasi akses dapur & admin.",
    link: "#",
    color: "from-slate-500/20 to-gray-600/20",
    image: supplierImg,
    tags: ["Laravel", "Filament", "MySQL", "Tailwind"],
    details: {
      overview: "Supplier Management System adalah platform web full-stack untuk mendigitalisasi alur kerja bisnis supplier. Sistem ini menciptakan batasan kerja yang jelas (separation of concerns) antara tim produksi dan manajemen keuangan.",
      features: [
        "Multi-Role Authentication (RBAC): Super Admin (God Mode) vs Staff Produksi (Limited Access)",
        "Dashboard User-Specific: Tampilan berbeda untuk Admin & Dapur",
        "Smart Seeder: Generate akun otomatis tanpa duplikat",
        "Audit Log & Laporan Keuangan Real-time (Admin Only)"
      ],
      stack: "Laravel, FilamentPHP, MySQL, Tailwind CSS"
    }
  },
  {
    id: 3,
    title: "VD Cosmetic's",
    cat: "Web",
    desc: "E-commerce kosmetik full-stack dengan dashboard keuangan real-time.",
    link: "#",
    color: "from-rose-400/20 to-pink-500/20",
    image: vdCosmeticImg,
    tags: ["Laravel", "MySQL", "Filament", "Livewire", "Tailwind"],
    details: {
      overview: "Aplikasi e-commerce end-to-end untuk toko kosmetik. Dilengkapi sistem booking konsultasi dinamis dan dashboard pelaporan keuangan otomatis untuk memudahkan owner memantau laba rugi.",
      features: [
        "Dashboard Keuangan Real-time (Profit/Loss)",
        "Sistem Booking Konsultasi Dinamis",
        "Checkout Multi-skenario (Langsung/Keranjang)",
        "Manajemen Hak Akses (Owner, Pegawai, Customer)"
      ],
      stack: "Laravel, Filament, Livewire, Alpine.js, MySQL"
    }
  },
  {
    id: 4,
    title: "BUMDESmart",
    cat: "Web",
    desc: "Digitalisasi operasional BUMDes mencakup e-commerce publik & manajemen inventaris.",
    link: "#",
    color: "from-blue-500/20 to-cyan-600/20",
    image: bumdesImg,
    tags: ["Laravel", "Livewire", "Filament", "MySQL", "Tailwind"],
    details: {
      overview: "Platform web full-stack untuk digitalisasi BUMDes 'Sebauk Gemilang'. Memperluas pasar produk lokal desa melalui e-commerce dan merapikan pembukuan dengan sistem otomatis.",
      features: [
        "E-Commerce Publik & Blog Berita Desa",
        "Panel Admin: Stok, Transaksi, CMS Konten",
        "Laporan PDF Dinamis dengan Kop Surat Resmi",
        "Manajemen Data Master Terpusat"
      ],
      stack: "Laravel, Filament, Livewire, Tailwind CSS"
    }
  },
  {
    id: 5,
    title: "FitID Gym",
    cat: "Mobile & Web", // Dual Category
    desc: "Aplikasi gym terintegrasi dengan AI Personal Trainer & QR Attendance.",
    link: "#",
    color: "from-emerald-500/20 to-teal-600/20",
    image: gymImg,
    tags: ["Flutter", "ExpressJS", "Laravel", "Filament", "Gemini AI"],
    details: {
      overview: "Solusi manajemen gym modern yang menghubungkan member (via Mobile App) dan pengelola (via Web Dashboard). Dilengkapi AI Coach untuk konsultasi latihan.",
      features: [
        "QR Code Attendance System",
        "AI Personal Trainer Chatbot(Gemini API)",
        "Gamifikasi Reward & Poin",
        "Manajemen Member & Membership"
      ],
      stack: "Flutter, ExpressJS, Laravel, Gemini AI"
    }
  },
  {
    id: 6,
    title: "Moonlight Memories",
    cat: "Mobile & Web", // Dual Category
    desc: "Platform Wedding Organizer dengan fitur custom paket & manajemen vendor.",
    link: "#",
    color: "from-pink-500/20 to-purple-600/20",
    image: moonlightImg,
    tags: ["Kotlin", "Laravel", "Filament", "DaisyUI", "MySQL"],
    details: {
      overview: "Platform digital wedding planner yang memudahkan calon pengantin memilih paket dan vendor. Terintegrasi dengan payment gateway untuk kemudahan pembayaran.",
      features: [
        "Custom Package Builder",
        "Manajemen Vendor Terintegrasi",
        "Sistem Pembayaran Cicilan/Tunai (Midtrans)",
        "Aplikasi Android Native (Kotlin)"
      ],
      stack: "Kotlin, Laravel, Filament, MySQL"
    }
  },
  {
    id: 7,
    title: "AR Biolens",
    cat: "AR",
    desc: "Aplikasi edukasi anatomi Augmented Reality & AI Context-Aware Tutor.",
    link: "#",
    color: "from-violet-500/20 to-indigo-600/20",
    image: arBiolensImg,
    tags: ["Unity 3D", "C#", "Vuforia", "ExpressJS", "Gemini AI"],
    details: {
      overview: "Aplikasi pembelajaran Biologi inovatif berbasis Android. Menggabungkan visualisasi AR 3D dengan AI Tutor yang pintar untuk menjawab pertanyaan siswa sesuai konteks organ.",
      features: [
        "Real-time 3D Organ Visualization (Vuforia)",
        "Context-Aware AI Tutor (Gemini API)",
        "Interactive Quiz & Progress Tracking",
        "3D Manipulation (Rotate/Zoom)"
      ],
      stack: "Unity 3D, Vuforia, Gemini AI, Node.js"
    }
  },
  {
    id: 8,
    title: "AR UMKM Bumdes",
    cat: "AR & Web", // Dual Category
    desc: "Katalog produk interaktif berbasis WebAR (React + MindAR).",
    link: "#",
    color: "from-yellow-500/20 to-orange-600/20",
    image: arUmkmImg,
    tags: ["React.js", "MindAR", "A-Frame", "ExpressJS", "Prisma"],
    details: {
      overview: "Katalog produk masa depan berbasis WebAR. Pengguna bisa melihat produk 3D langsung dari browser HP tanpa perlu install aplikasi tambahan (App-less experience).",
      features: [
        "Web-Native AR (No App Install Required)",
        "MindAR & A-Frame Integration",
        "CMS Kustom untuk Upload Aset 3D",
        "Optimasi Loading Aset 3D"
      ],
      stack: "React.js, MindAR, ExpressJS, Prisma"
    }
  },
  {
    id: 9,
    title: "Sistem Medis Digital",
    cat: "Web",
    desc: "Manajemen klinik digital dengan rekam medis adaptif.",
    link: "#",
    color: "from-green-500/20 to-emerald-600/20",
    image: medicalImg,
    tags: ["Laravel", "Filament", "Livewire", "MySQL", "Tailwind"],
    details: {
      overview: "Sistem informasi manajemen klinik komprehensif. Menggantikan rekam medis kertas dengan database digital yang aman dan formulir dinamis.",
      features: [
        "Formulir Medis Dinamis (Poli Umum/Gigi)",
        "Penjadwalan Dokter Otomatis",
        "Dashboard Analitik Kunjungan Pasien",
        "Export Laporan Medis & Keuangan"
      ],
      stack: "Laravel, Filament, Livewire, MySQL"
    }
  },
  {
    id: 10, 
    title: "FloodGuard IoT",
    cat: "IoT & Web", // Dual Category
    desc: "Dashboard monitoring banjir real-time via Serial-to-Web Gateway.",
    link: "#",
    color: "from-cyan-500/20 to-blue-600/20",
    image: floodguardImg,
    tags: ["Express.js", "Node.js", "Arduino", "Chart.js", "Tailwind", "SQLite"],
    details: {
      overview: "Sistem peringatan dini banjir yang cerdas. Menghubungkan sensor Arduino offline ke internet menggunakan custom Serial-to-Web Gateway, memungkinkan monitoring jarak jauh.",
      features: [
        "Serial-to-Web Gateway: Bridge data USB Arduino ke REST API",
        "Interactive Dashboard: Visualisasi tangki air dinamis & grafik tren",
        "Smart Alert System: Alarm Audio Browser & Buzzer Fisik",
        "Automated Logging ke SQLite"
      ],
      stack: "Arduino, Express.js, Prisma, SQLite, Tailwind, Chart.js"
    }
  }
];