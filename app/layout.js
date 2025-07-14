import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThreeDBackground from './components/3DBackground';
import ThemeProvider from './components/ThemeProvider';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nxore - Digital Solutions & Web Development",
  description:
    "Transform your digital presence with Nxore. We create stunning websites, powerful applications, and digital solutions that drive growth and engagement.",
  keywords:
    "web development, mobile apps, digital marketing, UI/UX design, consulting, software house, Pakistan, branding, SaaS",
  authors: [{ name: "Nxore Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Nxore - Digital Solutions & Web Development",
    description:
      "Transform your digital presence with Nxore. We create stunning websites, powerful applications, and digital solutions that drive growth and engagement.",
    url: "https://nxore.info",
    siteName: "Nxore",
    images: [
      {
        url: "https://nxore.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nxore - Digital Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nxore - Digital Solutions & Web Development",
    description:
      "Transform your digital presence with Nxore. We create stunning websites, powerful applications, and digital solutions that drive growth and engagement.",
    images: ["https://nxore.com/og-image.jpg"],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" type="image/png" href="/nxore.png" />
          <link rel="canonical" href="https://nxore.info" />
          <meta name="theme-color" content="#3b82f6" />
          <meta name="msapplication-TileColor" content="#3b82f6" />

          {/* Fallback Open Graph */}
          <meta property="og:image" content="https://nxore.com/og-image.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          {/* Structured Data (JSON-LD) */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Nxore",
            "url": "https://nxore.info",
            "logo": "https://nxore.info/logo.png",
            "description": metadata.description,
            "sameAs": [
              "https://www.facebook.com/nxore",
              "https://twitter.com/nxore",
              "https://www.instagram.com/nxore"
            ]
          })}} />
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <ThreeDBackground />
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}
