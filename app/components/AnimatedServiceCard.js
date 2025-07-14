'use client';
import { useState } from 'react';

export default function AnimatedServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false);
  
  const getIconType = (title) => {
    if (title.toLowerCase().includes('web')) return 'web';
    if (title.toLowerCase().includes('mobile')) return 'mobile';
    if (title.toLowerCase().includes('marketing')) return 'marketing';
    if (title.toLowerCase().includes('design')) return 'design';
    return 'web';
  };

  const getColor = (index) => {
    const colors = ['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'];
    return colors[index % colors.length];
  };

  const getIcon = (type) => {
    switch (type) {
      case 'web':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'mobile':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        );
      case 'marketing':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case 'design':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        );
      default:
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
    }
  };

  return (
    <div 
      className="relative group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 border border-gray-100 overflow-hidden">
        <div className="p-8">
          {/* Animated Icon */}
          <div className="w-20 h-20 mb-6 relative">
            <div 
              className={`w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white transition-transform duration-300 ${hovered ? 'scale-110' : ''}`}
            >
              {getIcon(getIconType(service.title))}
            </div>
            
            {/* Floating Elements */}
            <div className={`absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full opacity-60 transition-all duration-300 ${hovered ? 'animate-bounce' : ''}`} />
            <div className={`absolute -bottom-1 -left-1 w-2 h-2 bg-purple-400 rounded-full opacity-60 transition-all duration-300 ${hovered ? 'animate-ping' : ''}`} />
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            {service.description}
          </p>

          {/* Price */}
          <div className="text-2xl font-bold text-blue-600 mb-6">
            {service.price}
          </div>

          {/* Features */}
          <ul className="space-y-3">
            {service.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
} 