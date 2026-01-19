import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40  backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
        <Link to="/" className="text-xl font-bold"></Link>
        <nav className="hidden md:flex gap-6 text-sm">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/countries" className="hover:text-gray-300">
            Countries
          </Link>
          <Link to="/favorites" className="hover:text-gray-300">
            Favorites
          </Link>
        </nav>
      </div>
    </header>
  );
}
