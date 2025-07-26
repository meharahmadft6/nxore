import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThreeDBackground from "./components/3DBackground";
import ThemeProvider from "./components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default:
      "Nxore - Premium Web Development & Digital Solutions | Pakistan's Leading Software House",
    template: "%s | Nxore - Digital Solutions",
  },
  description:
    "Nxore is Pakistan's premier digital solutions company specializing in web development, mobile app development, UI/UX design, digital marketing, and custom software solutions. Transform your business with cutting-edge technology and innovative digital strategies.",
  keywords: [
    // Primary Keywords
    "Nxore",
    "Nxore digital solutions",
    "Nxore Pakistan",
    "nxore.info",

    // Web Development Keywords
    "web development Pakistan",
    "website development company",
    "custom web development",
    "React development",
    "Next.js development",
    "MERN stack development",
    "responsive web design",
    "professional website design",

    // Mobile App Development
    "mobile app development Pakistan",
    "Android app development",
    "iOS app development",
    "React Native development",
    "Flutter development",
    "cross-platform apps",

    // Digital Services
    "digital marketing Pakistan",
    "SEO services Pakistan",
    "social media marketing",
    "UI/UX design services",
    "graphic design Pakistan",
    "brand identity design",
    "e-commerce development",
    "online store development",

    // Business Keywords
    "software house Pakistan",
    "IT company Pakistan",
    "digital agency",
    "technology solutions",
    "business automation",
    "custom software development",
    "SaaS development",
    "API development",
    "database design",

    // Location-based
    "web development Mingora",
    "software company Swat",
    "IT services KPK",
    "digital solutions Khyber Pakhtunkhwa",
    "Pakistan web developers",

    // Industry-specific
    "restaurant management system",
    "vehicle tracking system",
    "inventory management",
    "CRM development",
    "ERP solutions",
    "business intelligence",
  ].join(", "),

  icons: {
    icon: "/nxore.png",
    shortcut: "/nxore.png",
    apple: "/nxore.png",
  },
  authors: [
    { name: "Muhammad Ahmad", url: "https://nxore.info" },
    { name: "Nxore Development Team" },
  ],

  creator: "Nxore Digital Solutions",
  publisher: "Nxore",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nxore.info",
    siteName: "Nxore - Digital Solutions",
    title:
      "Nxore - Premium Web Development & Digital Solutions | Pakistan's Leading Software House",
    description:
      "Transform your business with Nxore's cutting-edge web development, mobile apps, and digital marketing solutions. Pakistan's most trusted software house with 100+ successful projects.",
    images: [
      {
        url: "https://nxore.info/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nxore - Premium Digital Solutions & Web Development Company",
        type: "image/jpeg",
      },
      {
        url: "https://nxore.info/nxore.png",
        width: 512,
        height: 512,
        alt: "Nxore Logo",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@nxore",
    creator: "@nxore",
    title: "Nxore - Premium Web Development & Digital Solutions",
    description:
      "Transform your business with cutting-edge web development, mobile apps, and digital marketing solutions. Pakistan's most trusted software house.",
    images: {
      url: "https://nxore.info/og-image.jpg",
      alt: "Nxore - Digital Solutions",
    },
  },

  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
    yandex: "your-yandex-verification-code", // Add if needed
    yahoo: "your-yahoo-verification-code", // Add if needed
  },

  alternates: {
    canonical: "https://nxore.info",
  },

  category: "Technology",
  classification: "Business",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#3b82f6" },
    { media: "(prefers-color-scheme: dark)", color: "#1e40af" },
  ],
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://nxore.info/#organization",
        name: "Nxore",
        alternateName: "Nxore Digital Solutions",
        url: "https://nxore.info",
        logo: {
          "@type": "ImageObject",
          url: "https://nxore.info/nxore.png",
          width: 512,
          height: 512,
        },
        image: {
          "@type": "ImageObject",
          url: "https://nxore.info/og-image.jpg",
          width: 1200,
          height: 630,
        },
        description:
          "Pakistan's premier digital solutions company specializing in web development, mobile app development, and digital marketing services.",
        address: {
          "@type": "PostalAddress",
          addressCountry: "PK",
          addressRegion: "Khyber Pakhtunkhwa",
          addressLocality: "Mingora",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          availableLanguage: ["English", "Urdu"],
        },
        sameAs: [
          "https://www.instagram.com/nxore.digitalsolutions",
          "https://www.facebook.com/share/16njMkKtge/",
          "https://nxore.info",
        ],
        foundingDate: "2023",
        founders: [
          {
            "@type": "Person",
            name: "Muhammad Ahmad",
            jobTitle: "MERN & Next.js Developer",
          },
        ],
        areaServed: {
          "@type": "Country",
          name: "Pakistan",
        },
        serviceType: [
          "Web Development",
          "Mobile App Development",
          "Digital Marketing",
          "UI/UX Design",
          "Custom Software Development",
          "E-commerce Solutions",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://nxore.info/#website",
        url: "https://nxore.info",
        name: "Nxore - Digital Solutions",
        description: "Premium web development and digital solutions company",
        publisher: {
          "@id": "https://nxore.info/#organization",
        },
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://nxore.info/search?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://nxore.info/#localbusiness",
        name: "Nxore Digital Solutions",
        image: "https://nxore.info/nxore.png",
        address: {
          "@type": "PostalAddress",
          addressCountry: "PK",
          addressRegion: "Khyber Pakhtunkhwa",
          addressLocality: "Mingora",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "35.0178",
          longitude: "72.1683",
        },
        url: "https://nxore.info",
        telephone: "+92-XXX-XXXXXXX", // Add your phone number
        priceRange: "$$",
        openingHours: "Mo-Fr 09:00-18:00",
        servedCuisine: "Digital Services",
        "@type": "ProfessionalService",
      },
    ],
  };

  return (
    <ThemeProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          {/* Favicon and App Icons */}
          <link rel="icon" type="image/png" sizes="32x32" href="/nxore.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/nxore.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/nxore.png" />
          <link rel="mask-icon" href="/nxore.png" color="#3b82f6" />
          <link rel="shortcut icon" href="/nxore.png" />
          <link rel="shortcut icon" href="/nxore.png" type="image/x-icon" />
          {/* Web App Manifest */}
          <link rel="manifest" href="/manifest.json" />

          {/* Canonical URL */}
          <link rel="canonical" href="https://nxore.info" />

          {/* DNS Prefetch for Performance */}
          <link rel="dns-prefetch" href="//fonts.googleapis.com" />
          <link rel="dns-prefetch" href="//www.google-analytics.com" />

          {/* Theme Colors */}
          <meta name="theme-color" content="#3b82f6" />
          <meta name="msapplication-TileColor" content="#3b82f6" />
          <meta name="msapplication-config" content="/browserconfig.xml" />

          {/* Additional Meta Tags for SEO */}
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="Nxore" />

          {/* Geo Tags */}
          <meta name="geo.region" content="PK-KP" />
          <meta name="geo.placename" content="Mingora, Khyber Pakhtunkhwa" />
          <meta name="geo.position" content="35.0178;72.1683" />
          <meta name="ICBM" content="35.0178, 72.1683" />

          {/* Language and Content */}
          <meta httpEquiv="content-language" content="en-US" />
          <meta name="language" content="English" />

          {/* Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structuredData),
            }}
          />

          {/* Preload Critical Resources */}
          <link rel="preload" href="/nxore.png" as="image" type="image/png" />

          {/* Additional Open Graph fallbacks */}
          <meta property="og:image" content="https://nxore.info/og-image.jpg" />
          <meta
            property="og:image:secure_url"
            content="https://nxore.info/og-image.jpg"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta
            property="og:image:alt"
            content="Nxore - Premium Digital Solutions"
          />
          <meta property="og:image:type" content="image/jpeg" />

          {/* Twitter Card fallbacks */}
          <meta
            name="twitter:image"
            content="https://nxore.info/og-image.jpg"
          />
          <meta name="twitter:image:alt" content="Nxore - Digital Solutions" />

          {/* Additional Business Info */}
          <meta name="rating" content="5" />
          <meta name="distribution" content="global" />
          <meta name="revisit-after" content="1 days" />
          <meta name="expires" content="never" />
          <meta name="pragma" content="no-cache" />
          <meta name="cache-control" content="no-cache" />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThreeDBackground />
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}
