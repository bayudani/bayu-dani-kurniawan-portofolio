import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PROFILE_DATA } from '../data/mock_profiledata';

export const SEO = () => {
    const siteTitle = `${PROFILE_DATA.name} - ${PROFILE_DATA.role}`;
    const siteDescription = PROFILE_DATA.bio;
    const siteUrl = "https://bayu-dani-kurniawan-portofolio.vercel.app/";
    const siteImage = "https://bayu-dani-kurniawan-portofolio.vercel.app/og-image.png"; 
    const themeColor = "#10b981"; 

    // JSON-LD Schema: Ini biar Google paham konteks  (Person Schema)
    // Sangat powerful buat SEO Personal Branding
    const schemaMarkup = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": PROFILE_DATA.name,
        "url": siteUrl,
        "image": siteImage,
        "sameAs": [
            PROFILE_DATA.socials.github,
            PROFILE_DATA.socials.linkedin,
            PROFILE_DATA.socials.instagram
        ],
        "jobTitle": PROFILE_DATA.role,
        "worksFor": {
            "@type": "Organization",
            "name": "Freelance"
        },
        "description": siteDescription
    };

    return (
        <Helmet>
            {/* --- 1. Standard Metadata --- */}
            <html lang="id" />
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription} />
            <meta name="keywords" content="Web Developer, React Developer, Frontend Engineer, Portfolio, Bayu Dani Kurniawan, Laravel Developer, Fullstack, Bengkalis, Riau, Politeknik Negeri Bengkalis, Mahasiswa, Informatics, Informatics Engineering, Informatics Engineering Politeknik Negeri Bengkalis" />
            <meta name="author" content={PROFILE_DATA.name} />
            <link rel="canonical" href={siteUrl} />
            <meta name="google-site-verification" content="3d2juzjh7Wv1DFViDmr1qN5U1T43eKmPauDGiv4z6Q8" />

            <meta name="theme-color" content={themeColor} />

            {/* Robots: Izinkan Google mengindeks halaman ini */}
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow" />

            {/* --- 2. Open Graph / Facebook / LinkedIn / WhatsApp (Biar ganteng pas di-share) --- */}
            <meta property="og:type" content="profile" /> {/* Tipe profil karena ini portfolio */}
            <meta property="og:url" content={siteUrl} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={siteDescription} />
            <meta property="og:image" content={siteImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={`Portfolio of ${PROFILE_DATA.name}`} />
            <meta property="og:locale" content="id_ID" />
            <meta property="og:site_name" content={PROFILE_DATA.name} />

            {/* --- 3. Twitter Cards (Biar keren di X/Twitter) --- */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="@bayudani" />
            <meta name="twitter:site" content="@bayudani" />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={siteDescription} />
            <meta name="twitter:image" content={siteImage} />
            <meta name="twitter:image:alt" content={`Portfolio of ${PROFILE_DATA.name}`} />

            {/* --- 4. JSON-LD Structured Data (Resep Rahasia Google) --- */}
            <script type="application/ld+json">
                {JSON.stringify(schemaMarkup)}
            </script>
        </Helmet>
    );
};