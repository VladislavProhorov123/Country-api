import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative w-full h-screen">
      {/* Фоновое изображение */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('src/assets/hero.jpg')" }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>

      {/* Контент */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
          Discover the World
        </h1>
        <p className="text-gray-700 text-lg sm:text-xl mb-12">
          Explore countries, learn details, and save your favorites all in one place.
          Get insights and data on every nation around the globe.
        </p>

        {/* Статистика */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center mb-12">
          <div className="flex flex-col">
            <span className="text-4xl font-bold text-gray-900">195+</span>
            <span className="text-gray-700">Countries</span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl font-bold text-gray-900">1M+</span>
            <span className="text-gray-700">Visitors</span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl font-bold text-gray-900">50K+</span>
            <span className="text-gray-700">Favorites Saved</span>
          </div>
        </div>

        {/* Кнопки */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/countries"
            className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
          <a
            href="#features"
            className="inline-block bg-gray-200 text-gray-900 font-medium px-6 py-3 rounded-lg shadow hover:bg-gray-300 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
