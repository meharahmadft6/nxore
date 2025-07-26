"use client";

export default function AnimatedLogo() {
  return (
    <div className="w-60 h-60 mx-auto flex items-center justify-center">
      <div className="relative  transition-transform duration-300">
        {/* 3D Text Effect */}
        <div className="text-7xl font-bold text-gray-900 relative animate-pulse">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            NXORE
          </span>
        </div>

        {/* Floating Elements */}
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-blue-500 rounded-full opacity-60 animate-bounce" />
        <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-purple-500 rounded-full opacity-60 animate-ping" />
        <div className="absolute top-1/2 -right-4 w-2 h-2 bg-pink-500 rounded-full opacity-60 animate-pulse" />
      </div>
    </div>
  );
}
