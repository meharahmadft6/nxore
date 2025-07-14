"use client";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function WebDevelopment() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center py-20 px-4">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 text-center">
          Web Development
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl text-center mb-8">
          We build fast, scalable, and beautiful websites tailored to your business needs. From landing pages to complex web applications, our team delivers robust digital solutions.
        </p>
        <a href="/contact" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
          Start Your Project
        </a>
      </main>
      <Footer />
    </div>
  );
} 