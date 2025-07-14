  'use client';
  import Navbar from '../components/Navbar';
  import Footer from '../components/Footer';
  import React from 'react';
  import Head from 'next/head';

  // Animated SVG Blob for Hero
  const AnimatedBlob = () => (
    <svg className="absolute -top-32 -left-32 w-[600px] h-[600px] opacity-40 z-0 animate-spin-slow" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="blobGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a5b4fc" />
          <stop offset="100%" stopColor="#f0abfc" />
        </linearGradient>
      </defs>
      <path d="M 300 100 Q 500 120 550 300 Q 500 500 300 500 Q 100 500 50 300 Q 100 120 300 100 Z" fill="url(#blobGradient)" />
    </svg>
  );

  // Animated Orbs Background
  const AnimatedOrbs = () => (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <div className="orb orb1" />
      <div className="orb orb2" />
      <div className="orb orb3" />
      <div className="orb orb4" />
      <div className="orb orb5" />
      <style jsx>{`
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.45;
          mix-blend-mode: lighten;
          will-change: transform;
        }
        .orb1 {
          width: 340px; height: 340px;
          background: radial-gradient(circle at 30% 30%, #a5b4fc 0%, #f0abfc 100%);
          left: 10vw; top: 10vh;
          animation: orb1move 18s linear infinite;
        }
        .orb2 {
          width: 260px; height: 260px;
          background: radial-gradient(circle at 70% 70%, #f472b6 0%, #a5b4fc 100%);
          left: 60vw; top: 20vh;
          animation: orb2move 22s linear infinite;
        }
        .orb3 {
          width: 200px; height: 200px;
          background: radial-gradient(circle at 50% 50%, #fbbf24 0%, #f472b6 100%);
          left: 30vw; top: 60vh;
          animation: orb3move 25s linear infinite;
        }
        .orb4 {
          width: 180px; height: 180px;
          background: radial-gradient(circle at 60% 40%, #34d399 0%, #60a5fa 100%);
          left: 70vw; top: 70vh;
          animation: orb4move 20s linear infinite;
        }
        .orb5 {
          width: 120px; height: 120px;
          background: radial-gradient(circle at 50% 50%, #a78bfa 0%, #f472b6 100%);
          left: 80vw; top: 40vh;
          animation: orb5move 28s linear infinite;
        }
        @keyframes orb1move {
          0% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(60px, 40px) scale(1.1); }
          50% { transform: translate(120px, 0) scale(0.95); }
          75% { transform: translate(60px, -40px) scale(1.05); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes orb2move {
          0% { transform: translate(0, 0) scale(1); }
          20% { transform: translate(-40px, 60px) scale(1.08); }
          50% { transform: translate(-80px, 0) scale(0.92); }
          80% { transform: translate(-40px, -60px) scale(1.04); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes orb3move {
          0% { transform: translate(0, 0) scale(1); }
          30% { transform: translate(30px, 60px) scale(1.12); }
          60% { transform: translate(60px, 0) scale(0.9); }
          90% { transform: translate(30px, -60px) scale(1.07); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes orb4move {
          0% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(-50px, 30px) scale(1.1); }
          50% { transform: translate(-100px, 0) scale(0.95); }
          75% { transform: translate(-50px, -30px) scale(1.05); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes orb5move {
          0% { transform: translate(0, 0) scale(1); }
          40% { transform: translate(20px, 40px) scale(1.15); }
          70% { transform: translate(40px, 0) scale(0.88); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @media (max-width: 900px) {
          .orb1, .orb2, .orb3, .orb4, .orb5 { filter: blur(30px); opacity: 0.25; }
          .orb1, .orb2, .orb3, .orb4, .orb5 { width: 120px !important; height: 120px !important; }
        }
      `}</style>
    </div>
  );

  // ServiceCard with WhatsApp redirect
  const ServiceCard = ({ service, index }) => {
    const handleGetStarted = () => {
      const whatsappNumber = '+923394126260';
      const message = `Hi! I'm interested in your ${service.title} service. Can you provide more details?`;
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    };

    return (
      <div
        className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/80 to-gray-50/80 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border border-blue-100/30 backdrop-blur-xl`}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {/* Animated background gradient */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-pink-400/20 to-yellow-400/20 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500" />
        <div className="relative p-10 z-10 flex flex-col items-center">
          {/* Animated icon container */}
          <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
            <span className="text-4xl">{service.icon}</span>
          </div>
          {/* Title with gradient effect */}
          <h3 className="text-2xl font-extrabold mb-4 bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500 text-center">
            {service.title}
          </h3>
          {/* Description */}
          <p className="text-gray-700 mb-6 leading-relaxed text-center">
            {service.description}
          </p>
          {/* Features with animated checkmarks */}
          <ul className="space-y-3 mb-8">
            {service.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-center text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mr-3 transform group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="group-hover:translate-x-1 transition-transform duration-300">{feature}</span>
              </li>
            ))}
          </ul>
          {/* CTA Button with advanced effects */}
          <button 
            onClick={handleGetStarted}
            className="relative w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-4 px-8 rounded-xl font-bold text-lg overflow-hidden group-hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center justify-center">
              Get Started
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </button>
        </div>
      </div>
    );
  };

  export default function Services() {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Nxore Digital Services",
      "description": "Premium digital services including web/mobile development, AI, automation, scraping, UI/UX, and more.",
      "provider": {
        "@type": "Organization",
        "name": "Nxore",
        "url": "https://nxore.info"
      },
      "areaServed": "Worldwide",
      "serviceType": [
        "Web Development",
        "Mobile App Development",
        "Python AI & ML Models",
        "Web Scraping & Automation",
        "Cloud & DevOps Solutions",
        "E-commerce Solutions",
        "UI/UX Design",
        "Digital Marketing",
        "API & Backend Development",
        "Automation & Bots"
      ]
    };

    const services = [
      {
        title: "Web Development",
        description: "Custom websites and web applications built with modern technologies and best practices.",
        features: [
          "Responsive Design",
          "SEO Optimization",
          "Fast Loading Times",
          "Cross-browser Compatibility",
          "Content Management System",
          "Security Implementation"
        ],
        icon: "<\/>",
      },
      {
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications for iOS and Android devices.",
        features: [
          "iOS & Android Development",
          "Cross-platform Solutions",
          "App Store Optimization",
          "Push Notifications",
          "Offline Functionality",
          "Performance Optimization"
        ],
        icon: "📱",
      },
      {
        title: "Python AI & ML Models",
        description: "Custom machine learning, deep learning, and AI solutions for automation, analytics, and more.",
        features: [
          "Model Training & Deployment",
          "Data Analysis & Visualization",
          "Natural Language Processing",
          "Computer Vision",
          "Predictive Analytics",
          "API Integration"
        ],
        icon: "🤖",
      },
      {
        title: "Web Scraping & Automation",
        description: "Automated data extraction, scraping, and workflow automation for business intelligence and research.",
        features: [
          "Advanced Web Scraping",
          "API Data Extraction",
          "Data Cleaning & Processing",
          "Real-time Monitoring",
          "Custom Automation Bots",
          "Data Visualization"
        ],
        icon: "🔍",
      },
      {
        title: "Cloud & DevOps Solutions",
        description: "Scalable cloud infrastructure, CI/CD, and DevOps practices for modern application development.",
        features: [
          "AWS, Azure, Google Cloud",
          "Docker & Kubernetes",
          "CI/CD Pipeline Setup",
          "Infrastructure as Code",
          "Monitoring & Logging",
          "Auto-scaling & Load Balancing"
        ],
        icon: "☁️",
      },
      {
        title: "E-commerce Solutions",
        description: "Complete e-commerce platforms to help you sell online effectively.",
        features: [
          "Online Store Development",
          "Payment Gateway Integration",
          "Inventory Management",
          "Order Processing",
          "Customer Analytics",
          "Mobile Commerce"
        ],
        icon: "🛒",
      },
      {
        title: "UI/UX Design",
        description: "Beautiful and intuitive user interfaces that enhance user experience.",
        features: [
          "User Research",
          "Wireframing & Prototyping",
          "Visual Design",
          "User Testing",
          "Design Systems",
          "Accessibility Compliance"
        ],
        icon: "🎨",
      },
      {
        title: "Digital Marketing",
        description: "Comprehensive digital marketing strategies to boost your online presence.",
        features: [
          "SEO & SEM Campaigns",
          "Social Media Management",
          "Content Marketing",
          "Email Marketing",
          "Analytics & Reporting",
          "Conversion Optimization"
        ],
        icon: "📈",
      },
      {
        title: "API & Backend Development",
        description: "Robust backend systems and API integrations for scalable, secure applications.",
        features: [
          "REST & GraphQL APIs",
          "Authentication & Security",
          "Database Design",
          "Performance Optimization",
          "Third-party Integrations",
          "Documentation"
        ],
        icon: "🔗",
      },
      {
        title: "Automation & Bots",
        description: "Custom bots and automation for business, marketing, and productivity.",
        features: [
          "Chatbots & Virtual Assistants",
          "Social Media Automation",
          "Data Entry Bots",
          "Email Automation",
          "Task Scheduling",
          "Custom Scripts"
        ],
        icon: "🤖",
      },
      // Add more services as needed
    ];

    const process = [
      {
        step: "01",
        title: "Discovery",
        description: "We start by understanding your business goals, target audience, and project requirements."
      },
      {
        step: "02",
        title: "Planning",
        description: "We create a detailed project plan with timelines, milestones, and deliverables."
      },
      {
        step: "03",
        title: "Design",
        description: "Our designers create beautiful, user-friendly interfaces that align with your brand."
      },
      {
        step: "04",
        title: "Development",
        description: "Our developers bring the designs to life using modern technologies and best practices."
      },
      {
        step: "05",
        title: "Testing",
        description: "We thoroughly test all functionality to ensure everything works perfectly."
      },
      {
        step: "06",
        title: "Launch",
        description: "We deploy your project and provide ongoing support and maintenance."
      }
    ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-x-hidden">
        <AnimatedOrbs />
        <Head>
          <title>Premium Digital Services | Nxore - Web, Mobile, AI, Automation, Scraping</title>
          <meta name="description" content="Nxore offers premium digital services: web/mobile development, AI, automation, scraping, UI/UX, marketing, and more. Get started with world-class solutions." />
          <meta name="keywords" content="Nxore, digital services, web development, mobile app, AI, machine learning, automation, scraping, UI/UX, cloud, DevOps, e-commerce, backend, bots, Pakistan, worldwide" />
          <meta property="og:title" content="Premium Digital Services | Nxore" />
          <meta property="og:description" content="Nxore offers premium digital services: web/mobile development, AI, automation, scraping, UI/UX, marketing, and more." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://nxore.info/services" />
          <meta property="og:image" content="https://nxore.info/og-image.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Premium Digital Services | Nxore" />
          <meta name="twitter:description" content="Nxore offers premium digital services: web/mobile development, AI, automation, scraping, UI/UX, marketing, and more." />
          <meta name="twitter:image" content="https://nxore.info/og-image.png" />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        </Head>
        <Navbar />
        
        {/* Hero Section with Animated Blob */}
        <section className="relative flex flex-col items-center justify-center text-center py-32 md:py-40 overflow-visible">
          <AnimatedBlob />
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-6 drop-shadow-lg tracking-tight z-10">Our Premium Services</h1>
          <p className="text-2xl md:text-3xl text-gray-700 max-w-3xl mx-auto font-medium mb-10 z-10">From AI to automation, web, mobile, and more — Nxore delivers world-class digital solutions for every need.</p>
          {/* Floating shapes for extra style */}
          <div className="absolute top-10 right-10 w-40 h-40 bg-pink-200 opacity-30 rounded-full blur-2xl animate-pulse z-0" />
          <div className="absolute bottom-10 left-20 w-56 h-56 bg-blue-200 opacity-20 rounded-full blur-3xl animate-pulse z-0" />
        </section>

        {/* Services Grid */}
        <section className="py-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section (keep as previously improved) */}
        <section className="py-24 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #e0e7ff 0%, #f0abfc 100%)'}}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-10 w-40 h-40 bg-purple-200 opacity-30 rounded-full blur-2xl animate-pulse" />
            <div className="absolute bottom-10 right-20 w-56 h-56 bg-blue-200 opacity-20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-pink-200 opacity-20 rounded-full blur-2xl animate-pulse" style={{transform: 'translate(-50%, -50%)'}} />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-extrabold bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-6 drop-shadow-lg tracking-tight">Technologies We Master</h2>
              <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-medium mb-2">We work with the latest and most powerful technologies to build your digital future</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
              {[
                { name: "React", icon: "⚛️", color: "from-blue-400 to-blue-600" },
                { name: "Python", icon: "🐍", color: "from-green-400 to-green-600" },
                { name: "Node.js", icon: "🟢", color: "from-green-400 to-green-600" },
                { name: "AWS", icon: "☁️", color: "from-orange-400 to-orange-600" },
                { name: "MongoDB", icon: "🍃", color: "from-green-400 to-green-600" },
                { name: "Docker", icon: "🐳", color: "from-blue-400 to-blue-600" },
                { name: "Flutter", icon: "💙", color: "from-blue-400 to-blue-600" },
                { name: "AI/ML", icon: "🤖", color: "from-purple-400 to-purple-600" }
              ].map((tech, index) => (
                <div
                  key={index}
                  className="group text-center p-6 bg-white/40 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-110 border border-white/30 relative overflow-hidden"
                  style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'}}
                >
                  <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                    {tech.icon}
                  </div>
                  <h3 className="text-gray-900 font-bold text-lg group-hover:text-blue-600 transition-colors duration-300 tracking-wide">
                    {tech.name}
                  </h3>
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{boxShadow: '0 0 32px 8px #a5b4fc, 0 0 64px 16px #f0abfc'}} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a proven methodology to ensure your project is delivered on time and exceeds expectations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-8 shadow-lg hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-4 hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss your project and create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">
                  Start Your Project
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200">
                  Schedule a Call
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  } 