"use client";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function DigitalMarketing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center py-20 px-4">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 text-center">
          Digital Marketing
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl text-center mb-8">
          Grow your business with our data-driven digital marketing strategies. We help you reach your audience, boost engagement, and drive conversions across all digital channels.
        </p>
        <a href="/contact" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
          Boost Your Brand
        </a>
      </main>
      <Footer />
    </div>
  );
} 