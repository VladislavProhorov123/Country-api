import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 pt-4">
      <div
        className="
          w-full
          h-16
          flex items-center justify-between
          px-8
          rounded-2xl

          bg-gray-400
          backdrop-blur-md
          border border-white/5

          text-white
        "
      >
        {/* LOGO */}
        <Link
          to="/"
          className="text-lg font-semibold tracking-wide"
        >
          Countries
        </Link>

        {/* NAV */}
        <nav className="flex gap-8 text-sm font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white"
                : "text-white/60 hover:text-white transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/countries"
            className={({ isActive }) =>
              isActive
                ? "text-white"
                : "text-white/60 hover:text-white transition"
            }
          >
            Countries
          </NavLink>

          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive
                ? "text-white"
                : "text-white/60 hover:text-white transition"
            }
          >
            Favorites
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
