import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import TeamSection from "./components/TeamSection";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";
import ProjectsTestimonialsSection from "./components/ProjectsTestimonialsSection";

export const metadata = {
  title: "Premium Web Development & Digital Solutions | Nxore",
  description:
    "Transform your business with Nxore's cutting-edge web development, mobile apps, digital marketing & UI/UX design. 100+ successful projects completed.",
  keywords:
    "web development, mobile apps, digital marketing, Pakistan software house, Next.js development, React development",

  // Page-specific Open Graph
  openGraph: {
    type: "website",
    url: "https://nxore.info",
    title: "Nxore - Pakistan's Leading Software House & Digital Agency",
    description:
      "Premium web development, mobile apps, digital marketing & custom software solutions in Pakistan.",
    siteName: "Nxore Digital Solutions",
    images: [
      {
        url: "https://nxore.info/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Nxore Digital Solutions - Home",
      },
    ],
    locale: "en_US",
  },

  // Page-specific Twitter
  twitter: {
    card: "summary_large_image",
    title: "Nxore - Digital Solutions Agency",
    description: "Your trusted partner for digital transformation in Pakistan",
    images: ["https://nxore.info/4.jpg"],
    creator: "@nxore",
  },

  // Page-specific structured data
  alternates: {
    canonical: "https://nxore.info",
    languages: {
      "en-US": "https://nxore.info",
      // Add if you have Urdu version: 'ur-PK': 'https://nxore.info/ur',
    },
  },
};

// Add JSON-LD for Home Page
const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Nxore Digital Solutions Home",
  description: "Pakistan's premier digital solutions company",
  url: "https://nxore.info",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://nxore.info",
      },
    ],
  },
  mainEntity: {
    "@type": "Organization",
    name: "Nxore",
    sameAs: [
      "https://www.instagram.com/nxore.digitalsolutions",
      "https://www.facebook.com/share/16njMkKtge/",
    ],
  },
};

export default function Home() {
  return (
    <>
      {/* Add JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />

      <div className="min-h-screen">
        {/* Add semantic HTML structure */}
        <header role="banner">
          <Navbar />
        </header>

        <main role="main">
          <Hero />
          <Services />
          <TeamSection />
          <ProjectsTestimonialsSection />
        </main>

        <footer role="contentinfo">
          <Footer />
        </footer>

        <FloatingWhatsAppButton />
      </div>
    </>
  );
}
