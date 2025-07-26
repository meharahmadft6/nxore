"use client";
import AnimatedLogo from "./AnimatedLogo";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import "../globals.css";
function useCounter(to, duration = 1200) {
  const [count, setCount] = useState(0);
  const raf = useRef();
  useEffect(() => {
    let start;
    function animate(ts) {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(progress * to));
      if (progress < 1) raf.current = requestAnimationFrame(animate);
      else setCount(to);
    }
    raf.current = requestAnimationFrame(animate);
    return () => raf.current && cancelAnimationFrame(raf.current);
  }, [to, duration]);
  return count;
}

export default function Hero() {
  const projects = useCounter(100);
  const satisfaction = useCounter(98);
  const support = useCounter(24);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-white to-purple-300 overflow-hidden pt-4 md:pt-6 pb-6 md:pb-10">
      {/* Unique Animated SVG Blob Background */}
      <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none">
        <svg
          width="800"
          height="800"
          viewBox="0 0 700 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-blob-slow opacity-40"
        >
          <defs>
            <linearGradient id="blobGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#a5b4fc" />
              <stop offset="100%" stopColor="#f0abfc" />
            </linearGradient>
          </defs>
          <path>
            <animate
              attributeName="d"
              dur="12s"
              repeatCount="indefinite"
              values="M 350 100 Q 500 120 600 350 Q 500 600 350 600 Q 200 600 100 350 Q 200 120 350 100 Z;
                      M 350 120 Q 520 180 600 350 Q 520 520 350 580 Q 180 520 100 350 Q 180 180 350 120 Z;
                      M 350 100 Q 500 120 600 350 Q 500 600 350 600 Q 200 600 100 350 Q 200 120 350 100 Z"
            />
          </path>
          <path
            d="M 350 100 Q 500 120 600 350 Q 500 600 350 600 Q 200 600 100 350 Q 200 120 350 100 Z"
            fill="url(#blobGradient)"
          />
        </svg>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full">
        <div className="text-center space-y-4 md:space-y-5">
          {" "}
          {/* Reduced space-y from 5 md:space-y-7 */}
          {/* 3D Logo */}
          <div className="mb-1 md:mb-2 flex justify-center">
            {" "}
            {/* Reduced margin-bottom */}
            <AnimatedLogo />
          </div>
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 hover:scale-105 transition-transform mb-2">
            {" "}
            {/* Reduced padding and added margin-bottom */}
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            Welcome to Nxore - Your Digital Partner
          </div>
          {/* Main Headline with Parallax Hover Effect */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 md:mb-5 leading-tight relative group">
            <span className="transition-transform duration-300  inline-block">
              Transform Your
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Digital Presence
              </span>
            </span>
          </h1>
          {/* Subtitle */}
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
            We help businesses create stunning websites, powerful applications,
            and digital solutions that drive growth and engagement.
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-7 md:mb-10">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg text-center min-w-[200px]"
            >
              Start Your Project
            </Link>
            <Link
              href="/about"
              className="border-2 border-gray-500 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200 min-w-[200px] text-center"
            >
              Learn More
            </Link>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-6 md:mt-8">
            <div className="text-center hover:scale-110 transition-transform">
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {projects}+
              </div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center hover:scale-110 transition-transform">
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {satisfaction}%
              </div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center hover:scale-110 transition-transform">
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {support}/7
              </div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Add this to your global CSS (globals.css or tailwind.config.js) for the blob animation:
