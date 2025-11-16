"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Users,
  Target,
  Heart,
  Zap,
  Code,
  Video,
  Phone,
  Award,
  TrendingUp,
  Globe,
  Link,
  Database,
  Star,
} from "lucide-react";
import FloatingWhatsAppButton from "../components/FloatingWhatsAppButton";

// Floating particles animation
const FloatingParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `float ${particle.duration}s ease-in-out infinite ${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

// Counter animation hook
const useCounter = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = end / (duration / 50);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [end, duration, isVisible]);

  return [count, setIsVisible];
};

// Scroll reveal hook
const useScrollReveal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector(".scroll-reveal");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return isVisible;
};

export default function About() {
  const [activeTab, setActiveTab] = useState("mission");
  const [hoveredMember, setHoveredMember] = useState(null);

  const teamMembers = [
    {
      name: "Ahmad Khan",
      role: "Project Manager & Client Hunter",
      bio: "Expert in project coordination and client relationship management with 8+ years of experience in digital solutions.",
      skills: [
        "Project Management",
        "Client Relations",
        "Business Development",
        "Team Leadership",
      ],
      color: "from-blue-500 to-cyan-500",
      icon: <Users className="w-6 h-6" />,
    },
    {
      name: "Salman",
      role: "Video Editor & Content Writer",
      bio: "Creative storyteller with 2+ years of experience in video editing, motion graphics, and content creation. Focused on delivering engaging visual narratives that elevate digital branding.",
      skills: [
        "Video Editing",
        "Motion Graphics",
        "Creative Design",
        "Multimedia",
      ],
      color: "from-green-500 to-teal-500",
      icon: <Video className="w-6 h-6" />,
    },
  ];

  const stats = [
    {
      number: "500+",
      label: "Projects Completed",
      icon: <Award className="w-8 h-8" />,
    },
    {
      number: "50+",
      label: "Happy Clients",
      icon: <Heart className="w-8 h-8" />,
    },
    {
      number: "5+",
      label: "Years Experience",
      icon: <TrendingUp className="w-8 h-8" />,
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      icon: <Star className="w-8 h-8" />,
    },
  ];

  const values = [
    {
      title: "Innovation",
      description:
        "We constantly push boundaries and explore cutting-edge technologies to deliver revolutionary solutions.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: "Excellence",
      description:
        "We strive for perfection in every line of code, every design element, and every client interaction.",
      icon: <Target className="w-8 h-8" />,
      color: "from-blue-400 to-indigo-500",
    },
    {
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and close partnership with our clients to achieve extraordinary results.",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-400 to-teal-500",
    },
  ];

  // Fix useCounter usage for stats
  const projectCount = useCounter(500);
  const clientCount = useCounter(50);
  const yearsCount = useCounter(5);
  const satisfactionCount = useCounter(98);
  const statCounts = [projectCount, clientCount, yearsCount, satisfactionCount];

  return (
    <>
      {/* SEO Meta Tags */}
      <div style={{ display: "none" }}>
        <h1>About Nxore - Leading Digital Solutions Company</h1>
        <meta
          name="description"
          content="Discover Nxore's expert team of developers, project managers, and creative professionals. We deliver innovative digital solutions including web development, mobile apps, and video production."
        />
        <meta
          name="keywords"
          content="Nxore, digital solutions, web development, mobile apps, MERN stack, video editing, project management, DevOps"
        />
      </div>

      <div className="min-h-screen bg-white">
        <Navbar />

        {/* Hero Section with Advanced Animations */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden">
          <FloatingParticles />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="animate-fade-in-up">
                <h1 className="text-5xl sm:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                  About{" "}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                      Nxore
                    </span>
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse" />
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 animate-fade-in-up animation-delay-200">
                  We are a passionate team of digital innovators dedicated to
                  transforming businesses through
                  <span className="text-blue-600 font-semibold">
                    {" "}
                    cutting-edge technology
                  </span>{" "}
                  and
                  <span className="text-purple-600 font-semibold">
                    {" "}
                    creative solutions
                  </span>
                  .
                </p>
              </div>

              <div className="flex justify-center animate-fade-in-up animation-delay-400">
                <div className="flex items-center space-x-4 bg-white/70 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg">
                  <div className="flex -space-x-2">
                    {teamMembers.map((member, idx) => (
                      <div
                        key={idx}
                        className={`w-10 h-10 rounded-full bg-gradient-to-r ${member.color} border-2 border-white flex items-center justify-center text-white font-bold text-sm`}
                      >
                        {member.name.charAt(0)}
                      </div>
                    ))}
                  </div>
                  <span className="text-gray-600 font-medium">
                    Meet our amazing team
                  </span>
                  <ChevronDown className="w-5 h-5 text-gray-400 animate-bounce" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision with Tabs */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Purpose
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Driven by passion, guided by purpose, committed to excellence in
                everything we do.
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
              <div className="flex justify-center mb-8">
                <div className="bg-white rounded-full p-2 shadow-lg">
                  <div className="flex space-x-2">
                    {["mission", "vision", "values"].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                          activeTab === tab
                            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                            : "text-gray-600 hover:text-blue-600"
                        }`}
                      >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {activeTab === "mission" && (
                  <>
                    <div className="animate-fade-in-up">
                      <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                        <Target className="w-8 h-8 text-blue-600 mr-3" />
                        Our Mission
                      </h3>
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        To empower businesses with innovative digital solutions
                        that drive growth, enhance user experiences, and create
                        lasting impact in the digital landscape.
                      </p>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        We believe that every business deserves access to
                        world-class digital tools and expertise, regardless of
                        their size or industry.
                      </p>
                    </div>
                    <div className="relative">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white transform hover:scale-105 transition-transform duration-300 shadow-2xl">
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/20 rounded-full" />
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/10 rounded-full" />
                        <div className="relative z-10">
                          <Globe className="w-12 h-12 mb-4" />
                          <h4 className="text-2xl font-bold mb-4">
                            Global Impact
                          </h4>
                          <p className="text-lg leading-relaxed">
                            Transforming businesses across the globe with
                            cutting-edge digital solutions.
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {activeTab === "vision" && (
                  <>
                    <div className="animate-fade-in-up">
                      <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                        <Star className="w-8 h-8 text-purple-600 mr-3" />
                        Our Vision
                      </h3>
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        To be the leading digital partner for businesses
                        worldwide, known for our innovative solutions,
                        exceptional service, and commitment to client success.
                      </p>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        We envision a future where technology seamlessly
                        integrates with business needs to create extraordinary
                        digital experiences.
                      </p>
                    </div>
                    <div className="relative">
                      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white transform hover:scale-105 transition-transform duration-300 shadow-2xl">
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/20 rounded-full" />
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/10 rounded-full" />
                        <div className="relative z-10">
                          <TrendingUp className="w-12 h-12 mb-4" />
                          <h4 className="text-2xl font-bold mb-4">
                            Future Forward
                          </h4>
                          <p className="text-lg leading-relaxed">
                            Leading the digital transformation revolution with
                            innovative solutions.
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {activeTab === "values" && (
                  <div className="lg:col-span-2">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {values.map((value, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                          <div
                            className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center text-white mb-4`}
                          >
                            {value.icon}
                          </div>
                          <h4 className="text-xl font-bold text-gray-900 mb-3">
                            {value.title}
                          </h4>
                          <p className="text-gray-600 leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Stats Section */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Impact
              </h2>
              <p className="text-xl text-gray-600">
                Numbers that speak for our dedication and success
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center group scroll-reveal"
                  onMouseEnter={() => statCounts[index][1](true)}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="text-blue-600 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      {stat.number.includes("+")
                        ? `${statCounts[index][0]}+`
                        : stat.number.includes("%")
                        ? `${statCounts[index][0]}%`
                        : statCounts[index][0]}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium Team Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Meet Our Expert Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our talented team of specialists is passionate about delivering
                exceptional results and pushing the boundaries of what&apos;s
                possible.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="group relative"
                  onMouseEnter={() => setHoveredMember(index)}
                  onMouseLeave={() => setHoveredMember(null)}
                >
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100">
                    {/* Profile Section */}
                    <div className="text-center mb-6">
                      <div className="relative inline-block mb-4">
                        <div
                          className={`w-24 h-24 bg-gradient-to-r ${member.color} rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                        >
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-lg">
                          <div
                            className={`w-8 h-8 bg-gradient-to-r ${member.color} rounded-full flex items-center justify-center text-white`}
                          >
                            {member.icon}
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 font-semibold mb-4">
                        {member.role}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        {member.bio}
                      </p>
                    </div>

                    {/* Skills Section */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                        Expertise
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${member.color} text-white shadow-sm transform hover:scale-105 transition-transform duration-200`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${member.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}
                    />
                  </div>

                  {/* Floating Action Button */}
                  <div
                    className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-r ${
                      member.color
                    } rounded-full flex items-center justify-center text-white shadow-lg transform transition-all duration-300 ${
                      hoveredMember === index
                        ? "scale-100 opacity-100"
                        : "scale-0 opacity-0"
                    }`}
                  >
                    <Phone className="w-5 h-5" />
                  </div>
                </div>
              ))}
            </div>

            {/* Team Stats */}
            <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">
                  Why Choose Our Team?
                </h3>
                <p className="text-blue-100">
                  We combine expertise, creativity, and dedication to deliver
                  outstanding results
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">10+</div>
                  <div className="text-blue-100">
                    Combined Years of Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-blue-100">Support & Availability</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">3</div>
                  <div className="text-blue-100">Specialized Experts</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let&apos;s collaborate and bring your digital vision to life with
              our expert team and cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg"
              >
                Start Your Project
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </section>

        <Footer />
        <FloatingWhatsAppButton />
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </>
  );
}
