'use client';
import React, { useState } from 'react';
import { Users, Code, Video, Phone } from 'lucide-react';

const teamMembers = [
  {
    name: "Ahmad Khan",
    role: "Project Manager & Client Hunter",
    image: "/team/ahmad.jpg",
    bio: "Expert in project coordination and client relationship management with 8+ years of experience in digital solutions.",
    skills: ["Project Management", "Client Relations", "Business Development", "Team Leadership"],
    color: "from-blue-500 to-cyan-500",
    icon: <Users className="w-6 h-6" />
  },
  {
    name: "Muhammad Ahmad Sadaqat",
    role: "Software Engineer",
    image: "/team/sadaqat.jpg",
    bio: "Full-stack developer specializing in MERN stack, mobile apps, and DevOps. Handles all technical aspects of projects.",
    skills: ["MERN Stack", "Mobile Apps", "DevOps", "Cloud Architecture"],
    color: "from-purple-500 to-pink-500",
    icon: <Code className="w-6 h-6" />
  },
  {
    name: "Salman",
    role: "Video Editor & Creative Specialist",
    image: "/team/salman.jpg",
    bio: "Creative video editor with expertise in motion graphics, visual storytelling, and multimedia content creation.",
    skills: ["Video Editing", "Motion Graphics", "Creative Design", "Multimedia"],
    color: "from-green-500 to-teal-500",
    icon: <Video className="w-6 h-6" />
  }
];

export default function TeamSection() {
  const [hoveredMember, setHoveredMember] = useState(null);
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our talented team of specialists is passionate about delivering exceptional results and pushing the boundaries of what&apos;s possible.
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
                    <div className={`w-24 h-24 bg-gradient-to-r ${member.color} rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-lg">
                      <div className={`w-8 h-8 bg-gradient-to-r ${member.color} rounded-full flex items-center justify-center text-white`}>
                        {member.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{member.bio}</p>
                </div>
                {/* Skills Section */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Expertise</h4>
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
                <div className={`absolute inset-0 bg-gradient-to-r ${member.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`} />
              </div>
              {/* Floating Action Button */}
              <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-r ${member.color} rounded-full flex items-center justify-center text-white shadow-lg transform transition-all duration-300 ${
                hoveredMember === index ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              }`}>
                <Phone className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
        {/* Team Stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Why Choose Our Team?</h3>
            <p className="text-blue-100">We combine expertise, creativity, and dedication to deliver outstanding results</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">10+</div>
              <div className="text-blue-100">Combined Years of Experience</div>
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
  );
} 