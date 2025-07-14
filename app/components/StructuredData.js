import Head from 'next/head';

export const OrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Nxore",
  "url": "https://nxore.com",
  "logo": "https://nxore.com/logo.png",
  "description": "Transform your digital presence with Nxore. We create stunning websites, powerful applications, and digital solutions that drive growth and engagement.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Innovation Drive",
    "addressLocality": "Tech City",
    "addressRegion": "TC",
    "postalCode": "12345",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-123-4567",
    "contactType": "customer service",
    "email": "hello@nxore.com"
  },
  "sameAs": [
    "https://twitter.com/nxore",
    "https://linkedin.com/company/nxore",
    "https://facebook.com/nxore"
  ],
  "foundingDate": "2020",
  "numberOfEmployees": "25",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "40.7128",
      "longitude": "-74.0060"
    },
    "geoRadius": "50000"
  }
};

export const ServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Digital Solutions",
  "description": "Comprehensive digital solutions including web development, mobile apps, digital marketing, and UI/UX design.",
  "provider": {
    "@type": "Organization",
    "name": "Nxore"
  },
  "serviceType": [
    "Web Development",
    "Mobile App Development", 
    "Digital Marketing",
    "UI/UX Design",
    "E-commerce Solutions",
    "Consulting"
  ],
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Development",
          "description": "Custom websites and web applications built with modern technologies."
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile App Development",
          "description": "Native and cross-platform mobile applications for iOS and Android."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Digital Marketing",
          "description": "Comprehensive digital marketing strategies to boost online presence."
        }
      }
    ]
  }
};

export const WebSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Nxore",
  "url": "https://nxore.com",
  "description": "Digital solutions and web development services",
  "publisher": {
    "@type": "Organization",
    "name": "Nxore"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://nxore.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const LocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Nxore",
  "image": "https://nxore.com/office.jpg",
  "description": "Digital solutions and web development agency",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Innovation Drive",
    "addressLocality": "Tech City", 
    "addressRegion": "TC",
    "postalCode": "12345",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "40.7128",
    "longitude": "-74.0060"
  },
  "url": "https://nxore.com",
  "telephone": "+1-555-123-4567",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification", 
      "dayOfWeek": "Saturday",
      "opens": "10:00",
      "closes": "16:00"
    }
  ],
  "sameAs": [
    "https://twitter.com/nxore",
    "https://linkedin.com/company/nxore"
  ]
};

export default function StructuredData({ schemas = [] }) {
  return (
    <Head>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema)
          }}
        />
      ))}
    </Head>
  );
} 