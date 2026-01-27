import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/bg.png";

export default function CTA() {
  return (
    <section className="mx-auto max-w-6xl mb-[60px] px-4">
      <div
        className="h-[260px] bg-blue-600 rounded-3xl"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="flex flex-col items-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-4 mt-8">Start Exploring Countries Now!</h2>
          <p className="text-lg sm:text-xl mb-6 text-gray-200"> 
            Browse, save, and learn about every country in the world. Your
            journey starts here.
          </p>
          <Link to="/countries" className="bg-blue-700 text-gray-200 px-8 py-4 rounded-lg shadow-lg font-medium transition-all hover:bg-blue-800">
          Explore Countries
          </Link>
        </div>
      </div>
    </section>
  );
}
