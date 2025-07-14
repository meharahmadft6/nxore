"use client";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MobileApps() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center py-20 px-4">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 text-center">
          Mobile Apps
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl text-center mb-8">
          We design and develop high-performance mobile applications for iOS and Android. Bring your ideas to life with seamless, user-friendly, and engaging mobile experiences.
        </p>
        <a href="/contact" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
          Start Your App
        </a>
      </main>
      <Footer />
    </div>
  );
} 