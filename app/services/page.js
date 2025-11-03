"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, { useMemo, useState, useEffect } from "react";
import Head from "next/head";

// Optimized ServiceCard with reduced re-renders and better performance
const ServiceCard = React.memo(({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleGetStarted = () => {
    const whatsappNumber = "+923394126260";
    const message = `Hi! I'm interested in your ${service.title} service. Can you provide more details?`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/80 to-gray-50/80 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100/30 backdrop-blur-xl`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 0.1}s`,
        transform: isHovered
          ? "translateY(-8px) scale(1.02)"
          : "translateY(0) scale(1)",
      }}
    >
      {/* Simplified animated background */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl transition-transform duration-500" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-pink-400/10 to-yellow-400/10 rounded-full blur-xl transition-transform duration-500" />

      <div className="relative p-8 z-10 flex flex-col items-center">
        {/* Icon container */}
        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg transition-transform duration-300">
          <span className="text-2xl">{service.icon}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent text-center">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-700 mb-6 leading-relaxed text-center text-sm">
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-6 w-full">
          {service.features.map((feature, featureIndex) => (
            <li
              key={featureIndex}
              className="flex items-center text-xs text-gray-600"
            >
              <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                <svg
                  className="w-2 h-2 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="truncate">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          onClick={handleGetStarted}
          className="relative w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold text-base overflow-hidden transition-all duration-300 hover:shadow-lg active:scale-95"
        >
          <span className="relative z-10 flex items-center justify-center">
            Get Started
            <svg
              className="w-4 h-4 ml-2 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
});

ServiceCard.displayName = "ServiceCard";

// Optimized Technology Card
const TechnologyCard = React.memo(({ tech, index }) => (
  <div
    className="group text-center p-4 bg-white/40 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/30"
    style={{
      animationDelay: `${index * 0.05}s`,
      boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
    }}
  >
    <div
      className={`w-16 h-16 mx-auto mb-3 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg transition-all duration-300`}
    >
      {tech.icon}
    </div>
    <h3 className="text-gray-900 font-semibold text-sm group-hover:text-blue-600 transition-colors duration-300">
      {tech.name}
    </h3>
  </div>
));

TechnologyCard.displayName = "TechnologyCard";

// Process Step Component
const ProcessStep = React.memo(({ step, index }) => (
  <div
    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mb-3 transition-transform duration-300">
      {step.step}
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
    <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
  </div>
));

ProcessStep.displayName = "ProcessStep";

export default function Services() {
  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Nxore Digital Services",
      description:
        "Premium digital services including web/mobile development, AI, automation, scraping, UI/UX, and more.",
      provider: {
        "@type": "Organization",
        name: "Nxore",
        url: "https://nxore.info",
      },
      areaServed: "Worldwide",
      serviceType: [
        "Web Development",
        "Mobile App Development",
        "Python AI & ML Models",
        "Web Scraping & Automation",
        "Cloud & DevOps Solutions",
        "E-commerce Solutions",
        "UI/UX Design",
        "Digital Marketing",
        "API & Backend Development",
        "Automation & Bots",
      ],
    }),
    []
  );

  const services = useMemo(
    () => [
      {
        title: "Web Development",
        description:
          "Custom websites and web applications built with modern technologies and best practices.",
        features: [
          "Responsive Design",
          "SEO Optimization",
          "Fast Loading Times",
          "Cross-browser Compatibility",
          "Content Management System",
          "Security Implementation",
        ],
        icon: "</>",
      },
      {
        title: "Mobile App Development",
        description:
          "Native and cross-platform mobile applications for iOS and Android devices.",
        features: [
          "iOS & Android Development",
          "Cross-platform Solutions",
          "App Store Optimization",
          "Push Notifications",
          "Offline Functionality",
          "Performance Optimization",
        ],
        icon: "📱",
      },
      {
        title: "Python AI & ML Models",
        description:
          "Custom machine learning, deep learning, and AI solutions for automation, analytics, and more.",
        features: [
          "Model Training & Deployment",
          "Data Analysis & Visualization",
          "Natural Language Processing",
          "Computer Vision",
          "Predictive Analytics",
          "API Integration",
        ],
        icon: "🤖",
      },
      {
        title: "Web Scraping & Automation",
        description:
          "Automated data extraction, scraping, and workflow automation for business intelligence and research.",
        features: [
          "Advanced Web Scraping",
          "API Data Extraction",
          "Data Cleaning & Processing",
          "Real-time Monitoring",
          "Custom Automation Bots",
          "Data Visualization",
        ],
        icon: "🔍",
      },
      {
        title: "Cloud & DevOps Solutions",
        description:
          "Scalable cloud infrastructure, CI/CD, and DevOps practices for modern application development.",
        features: [
          "AWS, Azure, Google Cloud",
          "Docker & Kubernetes",
          "CI/CD Pipeline Setup",
          "Infrastructure as Code",
          "Monitoring & Logging",
          "Auto-scaling & Load Balancing",
        ],
        icon: "☁️",
      },
      {
        title: "E-commerce Solutions",
        description:
          "Complete e-commerce platforms to help you sell online effectively.",
        features: [
          "Online Store Development",
          "Payment Gateway Integration",
          "Inventory Management",
          "Order Processing",
          "Customer Analytics",
          "Mobile Commerce",
        ],
        icon: "🛒",
      },
      {
        title: "UI/UX Design",
        description:
          "Beautiful and intuitive user interfaces that enhance user experience.",
        features: [
          "User Research",
          "Wireframing & Prototyping",
          "Visual Design",
          "User Testing",
          "Design Systems",
          "Accessibility Compliance",
        ],
        icon: "🎨",
      },
      {
        title: "API & Backend Development",
        description:
          "Robust backend systems and API integrations for scalable, secure applications.",
        features: [
          "REST & GraphQL APIs",
          "Authentication & Security",
          "Database Design",
          "Performance Optimization",
          "Third-party Integrations",
          "Documentation",
        ],
        icon: "🔗",
      },
    ],
    []
  );

  const technologies = useMemo(
    () => [
      { name: "React", icon: "⚛️", color: "from-blue-400 to-blue-600" },
      { name: "Python", icon: "🐍", color: "from-green-400 to-green-600" },
      { name: "Node.js", icon: "🟢", color: "from-green-400 to-green-600" },
      { name: "AWS", icon: "☁️", color: "from-orange-400 to-orange-600" },
      { name: "MongoDB", icon: "🍃", color: "from-green-400 to-green-600" },
      { name: "Docker", icon: "🐳", color: "from-blue-400 to-blue-600" },
      { name: "Flutter", icon: "💙", color: "from-blue-400 to-blue-600" },
      { name: "AI/ML", icon: "🤖", color: "from-purple-400 to-purple-600" },
    ],
    []
  );

  const process = useMemo(
    () => [
      {
        step: "01",
        title: "Discovery",
        description:
          "We start by understanding your business goals, target audience, and project requirements.",
      },
      {
        step: "02",
        title: "Planning",
        description:
          "We create a detailed project plan with timelines, milestones, and deliverables.",
      },
      {
        step: "03",
        title: "Design",
        description:
          "Our designers create beautiful, user-friendly interfaces that align with your brand.",
      },
      {
        step: "04",
        title: "Development",
        description:
          "Our developers bring the designs to life using modern technologies and best practices.",
      },
      {
        step: "05",
        title: "Testing",
        description:
          "We thoroughly test all functionality to ensure everything works perfectly.",
      },
      {
        step: "06",
        title: "Launch",
        description:
          "We deploy your project and provide ongoing support and maintenance.",
      },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-x-hidden">
      <Head>
        <title>
          Premium Digital Services | Nxore - Web, Mobile, AI, Automation,
          Scraping
        </title>
        <meta
          name="description"
          content="Nxore offers premium digital services: web/mobile development, AI, automation, scraping, UI/UX, marketing, and more. Get started with world-class solutions."
        />
        <meta
          name="keywords"
          content="Nxore, digital services, web development, mobile app, AI, machine learning, automation, scraping, UI/UX, cloud, DevOps, e-commerce, backend, bots, Pakistan, worldwide"
        />
        <meta property="og:title" content="Premium Digital Services | Nxore" />
        <meta
          property="og:description"
          content="Nxore offers premium digital services: web/mobile development, AI, automation, scraping, UI/UX, marketing, and more."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nxore.info/services" />
        <meta property="og:image" content="https://nxore.info/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premium Digital Services | Nxore" />
        <meta
          name="twitter:description"
          content="Nxore offers premium digital services: web/mobile development, AI, automation, scraping, UI/UX, marketing, and more."
        />
        <meta name="twitter:image" content="https://nxore.info/og-image.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-24 md:py-32 overflow-visible">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-6 tracking-tight z-10 px-4">
          Our Premium Services
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium mb-8 z-10 px-4">
          From AI to automation, web, mobile, and more — Nxore delivers
          world-class digital solutions for every need.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section
        className="py-16 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #e0e7ff 0%, #f0abfc 100%)",
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-4 tracking-tight">
              Technologies We Master
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium">
              We work with the latest and most powerful technologies to build
              your digital future
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {technologies.map((tech, index) => (
              <TechnologyCard key={index} tech={tech} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure your project is delivered
              on time and exceeds expectations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, index) => (
              <ProcessStep key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project and create something amazing
            together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold text-base hover:bg-gray-100 transition-all duration-200 active:scale-95">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-base hover:bg-white hover:text-blue-600 transition-all duration-200 active:scale-95">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
