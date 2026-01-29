import { Heart, CheckCircle, Zap } from 'lucide-react';

// Import gambar profile
import profileImg from '../assets/images/profile.png';

// --- DATA UTAMA PROFILE ---
export const PROFILE_DATA = {
    name: "Bayu Dani K",
    role: "Web Developer",
    location: "Bengkalis, Riau",
    bio: "Dedicated Software Engineering student specializing in Web and Mobile Development with strong passion in building impactful digital products. Experienced in developing full-stack applications using Laravel, ExpressJS, Flutter, and Kotlin. Skilled in problem solving, teamwork, and adapting to new technologies quickly.",
    avatar: profileImg,
    stats: [
        { label: "Years", value: "01" },
        { label: "Projects", value: "08" },
        { label: "Awards", value: "01" },
    ],
    stack: ["Express JS", "Laravel", "MySQL", "Javascript", "Tailwind", "Unity", "Augmented Reality", "Flutter", "Kotlin", "Redis", "Node JS", "PHP"],
    socials: {
        github: "https://github.com/bayudani",
        linkedin: "https://www.linkedin.com/in/bayu-dani-kurniawan/",
        instagram: "https://www.instagram.com/bayukrnw_n?igsh=MXAxZDY2dzJmaThvZA=="
    }
};

// --- DATA KHUSUS SECTION ABOUT / RESUME ---
export const ABOUT_DATA = {
    experiences: [
        {
            role: "Fullstack Software Developer (MSIB Intern)",
            event: "Kampus Merdeka x Productzilla",
            year: "2024",
            desc: "Developed real-world fullstack web applications using React.js, Express.js, and MongoDB. Collaborated with industry mentors to build scalable software solutions."
        },
        {
            role: "Lecturer's Community Service Team",
            event: "Politeknik Negeri Bengkalis",
            year: "2025",
            desc: "Collaborated in developing digital solutions for community service programs."
        },
        {
            role: "Participan",
            event: "KMIPN (Kompetisi Mahasiswa Informatika Politeknik Nasiona)",
            year: "2025",
            desc: "Competed in national level informatics innovation."
        },
        {
            role: "Participant",
            event: "Budaya Go",
            year: "2025",
            desc: "Participated in cultural digitalization initiatives."
        }
    ],
    values: [
        {
            icon: Heart,
            title: "Dedicated & Resilient",
            desc: "I don't just write code; I build solutions. I stick with problems until they are solved and always aim for high-impact results."
        },
        {
            icon: CheckCircle,
            title: "Disciplined Execution",
            desc: "Consistency is key. I deliver clean, maintainable code and respect deadlines with a strong focus on details."
        },
        {
            icon: Zap,
            title: "Fast Adapter",
            desc: "Technology evolves fast, and so do I. I quickly adapt to new stacks and environments to keep staying relevant."
        }
    ],
    education: [
        {
            school: "Politeknik Negeri Bengkalis",
            degree: "D4 Software Engineering (Rekayasa Perangkat Lunak)",
            year: "2022 - Present",
            grade: "GPA: 3.60"
        },
        {
            school: "MAN 1 Plus Bengkalis",
            degree: "Science Major",
            year: "2019 - 2022",
            grade: ""
        }
    ],
    certifications: [
        "Digital Talent Scholarship - Junior Mobile Programmer",
        "Alibaba Cloud Certified Developer",
        "Dicoding - Belajar Dasar Pemrograman Web",
        "Rakamin Academy - HTML, CSS, Teamwork",
        "Kampus Merdeka - Fullstack Web Development with React & Express JS",
        "LinkedIn Learning - Artificial Intelligence",
        "Coding Studio - Fullstack Web Development with Laravel"
    ],
    publications: [
        {
            title: "Mengenal Laravel Livewire: Library Modern Web Development",
            desc: "An in-depth article about Laravel Livewire and how it simplifies modern web app development.",
            url: "https://medium.com/@bayu22122017/mengenal-laravel-livewire-library-yang-membawa-kemudadan-dalam-pengembangan-aplikasi-web-modern-552dda004d3b",
            type: "Medium Article"
        }
    ]
};