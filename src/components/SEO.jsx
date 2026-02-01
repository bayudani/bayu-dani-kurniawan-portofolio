import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PROFILE_DATA } from '../data/mock_profiledata';

export const SEO = () => {
    const siteTitle = `${PROFILE_DATA.name} - ${PROFILE_DATA.role}`;
    const siteDescription = PROFILE_DATA.bio;
    const siteUrl = "https://bayu-dani-kurniawan-portofolio.vercel.app/";
    const siteImage = "https://bayu-dani-kurniawan-portofolio.vercel.app/og-image.png";
    const themeColor = "#10b981";

    // 1. Schema Person (Sudah ada & Bagus)
    const personSchema = {
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

    // 2. Schema WebSite (INI YANG PENTING BUAT MENGGANTI LABEL "VERCEL")
    // Ini memberitahu Google: "Nama situs ini adalah 'Bayu Dani', bukan Vercel."
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": PROFILE_DATA.name, // Nama yang ingin muncul menggantikan "Vercel"
        "alternateName": ["Bayu Dani Portfolio", "Portfolio Bayu"], // Alternatif nama
        "url": siteUrl
    };

    // 3. Navigation Schema
    const navigationSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": [
            {
                "@type": "SiteNavigationElement",
                "position": 1,
                "name": "Home",
                "description": "Portfolio Highlights and Top Projects",
                "url": `${siteUrl}#home`
            },
            {
                "@type": "SiteNavigationElement",
                "position": 2,
                "name": "About Me",
                "description": "My professional background, skills, and experience",
                "url": `${siteUrl}#about`
            },
            {
                "@type": "SiteNavigationElement",
                "position": 3,
                "name": "Services",
                "description": "Web Development, Mobile Apps, and AR Solutions",
                "url": `${siteUrl}#services`
            },
            {
                "@type": "SiteNavigationElement",
                "position": 4,
                "name": "Contact",
                "description": "Get in touch for collaborations",
                "url": `${siteUrl}#contact`
            }
        ]
    };

    return (
        <Helmet>
            {/* --- 1. Standard Metadata --- */}
            <html lang="id" />
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription} />
            <meta name="keywords" content="Web Developer, React Developer, Frontend Engineer, Portfolio, Bayu Dani Kurniawan, Laravel Developer, Fullstack, Bengkalis, Riau, Politeknik Negeri Bengkalis, Mahasiswa, Informatics, Informatics Engineering, Informatics Engineering Politeknik Negeri Bengkalis" />
            <meta name="author" content={PROFILE_DATA.name} />
            <meta name="google-site-verification" content="3d2juzjh7Wv1DFViDmr1qN5U1T43eKmPauDGiv4z6Q8" />
            <meta name="google-site-verification" content="EAOueREsgWASXn46hD-fgO1zoXDE7OCFzodTA1BpclE" />
            <link rel="canonical" href={siteUrl} />

            <meta name="theme-color" content={themeColor} />

            {/* Robots */}
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow" />

            {/* --- 2. Open Graph --- */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={siteDescription} />
            <meta property="og:image" content={siteImage} />
            <meta property="og:site_name" content={PROFILE_DATA.name} />
            <meta property="og:locale" content="id_ID" />

            {/* --- 3. Twitter Cards --- */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="@bayudani" />
            <meta name="twitter:site" content="@bayudani" />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={siteDescription} />
            <meta name="twitter:image" content={siteImage} />

            {/* --- 4. JSON-LD Structured Data --- */}
            <script type="application/ld+json">
                {JSON.stringify(personSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(websiteSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(navigationSchema)}
            </script>
        </Helmet>
    );
};