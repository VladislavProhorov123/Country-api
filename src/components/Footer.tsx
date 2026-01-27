import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white/70">
      <div className="mx-auto max-w-6xl px-4 py-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="">
          <h3 className="text-lg font-semibold text-white mb-4">Countries</h3>
          <p className="text-sm leading-relaxed">
            Explore countries around the world. Learn key facts, population,
            regions and save your favorites in one place.
          </p>
        </div>
        <div className="">
          <h4 className="text-white font-medium mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/countries" className="hover:text-white">
                Countries
              </Link>
            </li>
            <li>
              <Link to="/favorites" className="hover:text-white">
                Favorites
              </Link>
            </li>
          </ul>
        </div>

        <div className="">
          <h4 className="text-white font-medium mb-4">Project</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-default">
              REST Countries API
            </li>
            <li className="hover:text-white cursor-default">
              React + TypeScript
            </li>
            <li className="hover:text-white cursor-default">Tailwind CSS</li>
          </ul>
        </div>

        <div className="">
          <h4 className="text-white font-medium mb-4">Contact</h4>
          <p className="text-sm">
            Built as a learning project.
            <br />
            Frontend focused.
          </p>
        </div>
      </div>
      
      <div className="bordet-t border-white/10 py-6 text-center text-sm text-white/40">
        © {new Date().getFullYear()} Countries. All rights reserved.
      </div>
    </footer>
  );
}
