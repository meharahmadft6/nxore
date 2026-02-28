"use client";
import React, { useState } from "react";
import {
  ExternalLink,
  GraduationCap,
  Heart,
  Truck,
  TrendingUp,
  Car,
  Code,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
} from "lucide-react";
import Image from "next/image";

export default function ProjectsTestimonialsSection() {
  const [activeTab, setActiveTab] = useState("projects");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Infinity Quotient Learning",
      subtitle: "Find the Best Online Tutors & Teachers",
      description:
        "Developed a scalable full-stack e-learning platform that connects students with tutors through a role-based system. Implemented secure authentication, backend APIs, and database architecture to support course management, tutor profiles, real-time communication, and payments.",
      category: "E-Learning",
      technologies: ["MERN Stack", "JWT Auth", "WebSocket", "Payment Gateway"],
      link: "https://infinityquotientlearning.com/",
      icon: <GraduationCap className="w-8 h-8" />,
      gradient: "from-blue-500 to-indigo-600",
      image: "/infinity.jpg",
    },
    {
      id: 2,
      title: "Keen Claim LLC",
      subtitle: "Medical Billing & RCM Experts",
      description:
        "Specialized firm focused on healthcare revenue cycle management and medical billing services for healthcare providers. Helps practices optimize revenue by improving claims accuracy, reducing denials, accelerating cash flow, and maximizing reimbursements.",
      category: "Healthcare",
      technologies: ["React", "Node.js", "Healthcare APIs", "Dashboard"],
      link: "https://keenclaim.com",
      icon: <Heart className="w-8 h-8" />,
      gradient: "from-red-500 to-pink-600",
      image: "/keenclaim.png",
    },
    {
      id: 3,
      title: "Safe Piano Mover",
      subtitle: "Professional Piano Moving Services",
      description:
        "Specialist moving service based in California that focuses on safe, careful, and reliable piano transportation. Top-rated reviews across multiple platforms with expert handling of grand pianos, upright pianos, and heavy musical instruments.",
      category: "Logistics",
      technologies: ["React", "Booking System", "Google Maps", "CRM"],
      link: "https://safepianomover.com",
      icon: <Truck className="w-8 h-8" />,
      gradient: "from-orange-500 to-amber-600",
      image: "/safepiano.jpg",
    },
    {
      id: 4,
      title: "The AIO TECH US",
      subtitle: "AI-Driven Digital Solutions",
      description:
        "Digital solutions provider focused on helping businesses grow through advanced AI-driven technologies and modern web services. Offers comprehensive digital marketing, website development, AI-powered SEO, analytics, and responsive web development.",
      category: "Digital Agency",
      technologies: ["AI/ML", "SEO Tools", "Analytics", "Full Stack"],
      link: "https://theaiotech.us",
      icon: <TrendingUp className="w-8 h-8" />,
      gradient: "from-purple-500 to-violet-600",
      image: "/theaio.jpg",
    },
    {
      id: 5,
      title: "Cherry Limousine Worldwide",
      subtitle: "Premium Limo Service San Francisco",
      description:
        "Premium luxury transportation services in the San Francisco Bay Area. Over 25 years of excellence providing executive black car service, airport transfers, wedding transportation, party bus rentals with high-end vehicles and professional chauffeurs.",
      category: "Transportation",
      technologies: [
        "Booking Platform",
        "Fleet Management",
        "Payment Integration",
      ],
      link: "https://cherrylimousineworldwide.com",
      icon: <Car className="w-8 h-8" />,
      gradient: "from-slate-700 to-gray-900",
      image: "/cherry.jpg",
    },
    {
      id: 6,
      title: "Nxore",
      subtitle: "Premium Web Development & Digital Solutions",
      description:
        "Pakistan's leading software house dedicated to providing modern web solutions and digital services. Specializes in developing responsive and user-friendly websites, offering end-to-end solutions from design and development to deployment.",
      category: "Web Development",
      technologies: ["Full Stack", "UI/UX Design", "Cloud Deployment", "SEO"],
      link: "https://nxore.info",
      icon: <Code className="w-8 h-8" />,
      gradient: "from-emerald-500 to-teal-600",
      image: "/nxore.png",
    },
  ];

  // Fallback image for projects without images
  const getFallbackImage = (projectId) => {
    const fallbackColors = [
      "from-blue-500 to-indigo-600",
      "from-red-500 to-pink-600",
      "from-orange-500 to-amber-600",
      "from-purple-500 to-violet-600",
      "from-slate-700 to-gray-900",
      "from-emerald-500 to-teal-600",
    ];
    const colorIndex = (projectId - 1) % fallbackColors.length;
    return fallbackColors[colorIndex];
  };

  const testimonials = [
    {
      id: 1,
      name: "Khizer",
      role: "Founder, Infinity Quotient Learning",
      company: "IQL",
      rating: 5,
      text: "Ahmad transformed our vision into reality. The platform he built is not only technically robust but also incredibly user-friendly. Our tutors and students love the seamless experience. His dedication to quality and attention to detail made all the difference.",
      image: "/infinity.jpg",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      id: 2,
      name: "Hamza ",
      role: "CEO, Keen Claim LLC",
      company: "Keen Claim",
      rating: 5,
      text: "Working with Ahmad was exceptional. He understood our complex healthcare billing needs and delivered a solution that streamlined our entire revenue cycle management. The system has significantly improved our claims accuracy and cash flow.",
      image: "/keenclaim.png",
      gradient: "from-red-500 to-pink-600",
    },
    {
      id: 3,
      name: "ALEX",
      role: "Owner, Safe Piano Mover",
      company: "Safe Piano Mover",
      rating: 5,
      text: "Ahmad built us a booking system that perfectly fits our business needs. Our customers find it easy to schedule moves, and we can manage our operations efficiently. The integration with maps and CRM has been a game-changer for our California-based service.",
      image: "/safepiano.jpg",
      gradient: "from-orange-500 to-amber-600",
    },
    {
      id: 4,
      name: "THE AIO TECH US",
      role: "Director, The AIO TECH US",
      company: "AIO TECH",
      rating: 5,
      text: "Ahmad's expertise in AI-driven solutions is remarkable. He helped us build a comprehensive platform that showcases our services beautifully while incorporating cutting-edge technology. Our client acquisition has increased significantly since launch.",
      image: "/theaio.jpg",
      gradient: "from-purple-500 to-violet-600",
    },
    {
      id: 5,
      name: "Cherry Limo Transporter",
      role: "Operations Manager, Cherry Limousine",
      company: "Cherry Limousine",
      rating: 5,
      text: "After 25 years in business, we needed a modern platform to match our premium service. Ahmad delivered beyond expectations. The booking system is sophisticated yet simple, and our clients appreciate the seamless experience. Highly recommended!",
      image: "/cherry.jpg",
      gradient: "from-slate-700 to-gray-900",
    },
    {
      id: 6,
      name: "Ahmad Khan",
      role: "CEO, Nxore",
      company: "Nxore",
      rating: 5,
      text: "Ahmad is a brilliant developer who understands both technical excellence and business needs. He helped establish Nxore's online presence with a stunning, functional platform. His full-stack expertise and commitment to quality are unmatched.",
      image: "/a.png",
      gradient: "from-emerald-500 to-teal-600",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <>
      {/* Projects Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold tracking-wide uppercase">
                Portfolio
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transforming ideas into powerful digital solutions across
              industries
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 h-full flex flex-col"
              >
                {/* Project Header with Image or Gradient */}
                <div className={`h-48 relative overflow-hidden`}>
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain group-hover:scale-110 transition-transform duration-500"
                      priority={index < 3}
                    />
                  ) : (
                    <div
                      className={`h-full w-full bg-gradient-to-r ${project.gradient}`}
                    />
                  )}
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Icon Overlay */}
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm w-12 h-12 rounded-xl flex items-center justify-center text-white">
                      {project.icon}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-medium mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-500 text-xs font-medium rounded-lg">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* View Project Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-lg font-semibold text-sm hover:shadow-lg transform hover:scale-105 transition-all duration-200 mt-auto`}
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Hover Effect Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                />
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-8 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
              <div>
                <div className="text-4xl font-bold mb-2">20+</div>
                <div className="text-blue-100 font-medium">
                  Projects Delivered
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-blue-100 font-medium">
                  Client Satisfaction
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">20+</div>
                <div className="text-blue-100 font-medium">
                  Industries Served
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-100 font-medium">
                  Support Available
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-white overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #8b5cf6 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold tracking-wide uppercase">
                Testimonials
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              What Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Trusted by industry leaders and growing businesses worldwide
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Main Testimonial Card */}
              <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-12 relative overflow-hidden">
                {/* Quote Icon */}
                <div
                  className={`absolute top-6 right-6 w-20 h-20 bg-gradient-to-r ${testimonials[currentTestimonial].gradient} opacity-10 rounded-full flex items-center justify-center`}
                >
                  <Quote className="w-10 h-10 text-gray-400" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ),
                  )}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                  &ldquo;{testimonials[currentTestimonial].text}&rdquo;
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  {/* Client Avatar with fallback */}
                  <div className="relative">
                    {testimonials[currentTestimonial].image ? (
                      <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
                        <Image
                          src={testimonials[currentTestimonial].image}
                          alt={testimonials[currentTestimonial].name}
                          width={64}
                          height={64}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ) : (
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${testimonials[currentTestimonial].gradient} rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg ring-4 ring-white`}
                      >
                        {testimonials[currentTestimonial].name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-3 mt-8 justify-center">
                  <button
                    onClick={prevTestimonial}
                    className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-700" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-700" />
                  </button>
                </div>

                {/* Indicator Dots */}
                <div className="flex gap-2 justify-center mt-6">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentTestimonial(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === currentTestimonial
                          ? `w-8 bg-gradient-to-r ${testimonials[currentTestimonial].gradient}`
                          : "w-2 bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Background Cards for Depth Effect */}
              <div className="absolute -z-10 top-4 left-4 right-4 h-full bg-gradient-to-r from-indigo-100 to-purple-100 rounded-3xl opacity-50" />
              <div className="absolute -z-20 top-8 left-8 right-8 h-full bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl opacity-50" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
