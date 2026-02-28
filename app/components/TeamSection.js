"use client";
import React, { useState } from "react";
import {
  Code,
  Briefcase,
  Award,
  CheckCircle,
  Linkedin,
  Github,
  Mail,
} from "lucide-react";

export default function TeamSection() {
  const [isHovered, setIsHovered] = useState(false);

  const skills = [
    "Project Management",
    "Client Relations",
    "Business Development",
    "Team Leadership",
    "MERN Stack",
    "Mobile App Development",
    "Cloud Architecture",
    "SaaS Development",
    "System Design",
  ];

  const highlights = [
    { icon: <Award className="w-5 h-5" />, text: "3+ Years Experience" },
    { icon: <Code className="w-5 h-5" />, text: "Full-Stack Expert" },
    { icon: <Briefcase className="w-5 h-5" />, text: "Proven Track Record" },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #4f46e5 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold tracking-wide uppercase">
              Leadership
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Meet the Founder
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Visionary leader combining strategic thinking with hands-on
            technical expertise to build innovative digital solutions
          </p>
        </div>

        {/* Main Profile Card */}
        <div
          className="max-w-5xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:shadow-3xl hover:-translate-y-2">
            <div className="grid md:grid-cols-5 gap-0">
              {/* Image Section */}
              <div className="md:col-span-2 relative bg-gradient-to-br from-indigo-600 to-purple-700 p-8 flex items-center justify-center">
                <div className="relative">
                  {/* Decorative Circles */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-white opacity-10 rounded-full blur-xl" />
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-300 opacity-20 rounded-full blur-2xl" />

                  {/* Profile Image Container */}
                  <div className="relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-tr from-indigo-400 to-purple-400 rounded-2xl blur-xl opacity-50 transform transition-transform duration-500 ${
                        isHovered ? "scale-110" : "scale-100"
                      }`}
                    />
                    <div className="relative bg-white p-2 rounded-2xl shadow-xl">
                      <img
                        src="/a.png"
                        alt="Ahmad Khan PFP"
                        className=" object-cover rounded-xl"
                      />
                    </div>
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
                      <div className="w-6 h-3 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-xs font-semibold text-gray-700">
                        Available for Projects
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="md:col-span-3 p-10">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      Ahmad Khan
                    </h3>
                    <p className="text-lg text-indigo-600 font-semibold mb-4">
                      Founder & CEO | Lead Software Engineer
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-4 mb-6">
                      {highlights.map((highlight, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-gray-700"
                        >
                          <div className="text-indigo-600">
                            {highlight.icon}
                          </div>
                          <span className="text-sm font-medium">
                            {highlight.text}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Bio */}
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Founder-led technologist with 3+ years of experience
                      building scalable digital products. Combines strategic
                      leadership, project management, and hands-on full-stack
                      engineering to deliver high-impact web, mobile, and
                      cloud-based solutions for startups and growing businesses.
                    </p>
                  </div>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-indigo-600" />
                      Core Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 rounded-lg text-sm font-medium border border-indigo-100 hover:border-indigo-300 hover:shadow-md transition-all duration-200 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="mt-auto pt-6 border-t border-gray-100">
                    <div className="flex gap-3">
                      {/* Email */}
                      <a
                        href="mailto:ahmadkhan48646@gmail.com"
                        className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2"
                      >
                        <Mail className="w-5 h-5" />
                        Get in Touch
                      </a>

                      {/* LinkedIn */}
                      <a
                        href="https://www.linkedin.com/in/48646-ahmad-khan/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-100 text-gray-700 p-3 rounded-xl hover:bg-gray-200 transform hover:-translate-y-1 transition-all duration-200"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>

                      {/* GitHub
                      <a
                        href="https://github.com/meharahmadft6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-100 text-gray-700 p-3 rounded-xl hover:bg-gray-200 transform hover:-translate-y-1 transition-all duration-200"
                      >
                        <Github className="w-5 h-5" />
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
