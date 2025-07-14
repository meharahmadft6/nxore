import { NextSeo } from 'next-seo';

const defaultSEO = {
  titleTemplate: '%s | Nxore - Digital Solutions',
  defaultTitle: 'Nxore - Digital Solutions & Web Development',
  description: 'Transform your digital presence with Nxore. We create stunning websites, powerful applications, and digital solutions that drive growth and engagement.',
  canonical: 'https://nxore.info',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nxore.info',
    siteName: 'Nxore',
    images: [
      {
        url: 'https://nxore.info/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nxore - Digital Solutions',
      },
    ],
  },
  twitter: {
    handle: '@nxore',
    site: '@nxore',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'web development, mobile apps, digital marketing, UI/UX design, e-commerce, consulting, digital solutions, technology, innovation',
    },
    {
      name: 'author',
      content: 'Nxore Team',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
  ],
};

export const homeSEO = {
  ...defaultSEO,
  title: 'Home',
  description: 'Transform your digital presence with Nxore. We help businesses create stunning websites, powerful applications, and digital solutions that drive growth and engagement.',
  openGraph: {
    ...defaultSEO.openGraph,
    title: 'Nxore - Digital Solutions & Web Development',
    description: 'Transform your digital presence with Nxore. We help businesses create stunning websites, powerful applications, and digital solutions that drive growth and engagement.',
  },
  additionalMetaTags: [
    ...defaultSEO.additionalMetaTags,
    {
      name: 'keywords',
      content: 'web development, mobile apps, digital marketing, UI/UX design, e-commerce, consulting, digital solutions, technology, innovation, business growth',
    },
  ],
};

export const aboutSEO = {
  ...defaultSEO,
  title: 'About Us',
  description: 'Learn about Nxore - a passionate team of digital innovators dedicated to transforming businesses through cutting-edge technology and creative solutions.',
  openGraph: {
    ...defaultSEO.openGraph,
    title: 'About Nxore - Our Mission & Team',
    description: 'Learn about Nxore - a passionate team of digital innovators dedicated to transforming businesses through cutting-edge technology and creative solutions.',
  },
  additionalMetaTags: [
    ...defaultSEO.additionalMetaTags,
    {
      name: 'keywords',
      content: 'about nxore, digital agency, web development team, technology experts, digital transformation, innovation, mission, vision, values',
    },
  ],
};

export const servicesSEO = {
  ...defaultSEO,
  title: 'Our Services',
  description: 'Comprehensive digital solutions tailored to your business needs. From web development to digital marketing, we offer expert services to help your business grow.',
  openGraph: {
    ...defaultSEO.openGraph,
    title: 'Nxore Services - Web Development, Mobile Apps, Digital Marketing',
    description: 'Comprehensive digital solutions tailored to your business needs. From web development to digital marketing, we offer expert services to help your business grow.',
  },
  additionalMetaTags: [
    ...defaultSEO.additionalMetaTags,
    {
      name: 'keywords',
      content: 'web development services, mobile app development, digital marketing services, UI/UX design, e-commerce solutions, consulting services, technology services',
    },
  ],
};

export const contactSEO = {
  ...defaultSEO,
  title: 'Contact Us',
  description: 'Ready to start your next project? Contact Nxore today. We\'d love to hear from you and discuss how we can help bring your vision to life.',
  openGraph: {
    ...defaultSEO.openGraph,
    title: 'Contact Nxore - Get Started Today',
    description: 'Ready to start your next project? Contact Nxore today. We\'d love to hear from you and discuss how we can help bring your vision to life.',
  },
  additionalMetaTags: [
    ...defaultSEO.additionalMetaTags,
    {
      name: 'keywords',
      content: 'contact nxore, get quote, project consultation, digital agency contact, web development quote, mobile app development contact',
    },
  ],
};

export default function SEO({ seoConfig = defaultSEO }) {
  return <NextSeo {...seoConfig} />;
}
