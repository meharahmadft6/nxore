"use client";
import React, { useState, useEffect } from "react";
import { Users, Code, Video, Phone, Database, Link } from "lucide-react";

const teamMembers = [
  {
    name: "Muhammad Ahmad Sadaqat",
    role: "Founder & CEO | Lead Software Engineer",
    bio: "Founder of Nxore and full-stack engineer with 5+ years of experience in the MERN stack, mobile apps, and cloud solutions. Focused on building scalable digital products and leading innovation.",
    skills: [
      "MERN Stack",
      "Mobile Apps",
      "Cloud Architecture",
      "Team Leadership",
    ],
    color: "from-purple-600 to-pink-500",
    icon: <Code className="w-6 h-6" />,
  },
  {
    name: "Ahmad Khan",
    role: "Project Manager & Business Analyst",
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
    bio: "Creative video editor with expertise in motion graphics, visual storytelling, and multimedia content creation for 4+ years.",
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

export default function TeamSection() {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleMembers, setVisibleMembers] = useState([]);

  useEffect(() => {
    const updateVisibleMembers = () => {
      const windowWidth = window.innerWidth;
      let membersToShow = 3; // Default for larger screens

      if (windowWidth < 768) {
        membersToShow = 1;
      } else if (windowWidth < 1024) {
        membersToShow = 2;
      }

      const endIndex = Math.min(
        currentIndex + membersToShow,
        teamMembers.length
      );
      let visible = teamMembers.slice(currentIndex, endIndex);

      // If we're at the end, loop back to the beginning
      if (visible.length < membersToShow) {
        visible = [
          ...visible,
          ...teamMembers.slice(0, membersToShow - visible.length),
        ];
      }

      setVisibleMembers(visible);
    };

    updateVisibleMembers();
    window.addEventListener("resize", updateVisibleMembers);

    // Auto-rotate carousel
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    }, 5000);

    return () => {
      window.removeEventListener("resize", updateVisibleMembers);
      clearInterval(interval);
    };
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + teamMembers.length) % teamMembers.length
    );
  };

  return (
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

        {/* Carousel Container */}
        <div className="relative">
          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-500">
            {visibleMembers.map((member, index) => (
              <div
                key={`${member.name}-${index}`}
                className="group relative"
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 h-full flex flex-col">
                  {/* Profile Section */}
                  <div className="text-center mb-6 flex-grow">
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
        </div>

        {/* Team Stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Why Choose Our Team?</h3>
            <p className="text-blue-100">
              We combine expertise, creativity, and dedication to deliver
              outstanding results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">10+</div>
              <div className="text-blue-100">Combined Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support &amp; Availability</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">
                {teamMembers.length}
              </div>
              <div className="text-blue-100">Specialized Experts</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
