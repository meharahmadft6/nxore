'use client';

export default function ThreeDBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated Background Elements */}
      <div 
        className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"
      />
      <div 
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"
      />
      <div 
        className="absolute top-40 left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"
      />
      
      {/* Floating Geometric Shapes */}
      <div 
        className="absolute top-1/4 right-1/4 w-16 h-16 border-2 border-blue-400 rounded-lg opacity-30 animate-spin"
      />
      <div 
        className="absolute bottom-1/4 left-1/4 w-12 h-12 border-2 border-purple-400 rounded-full opacity-30 animate-ping"
      />
      <div 
        className="absolute top-1/2 left-1/2 w-20 h-20 border-2 border-pink-400 transform rotate-45 opacity-30 animate-pulse"
      />
    </div>
  );
} 