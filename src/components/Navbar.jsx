import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#FFFDF7] shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* ---- Left: Logo ---- */}
        <h1 className="text-xl sm:text-2xl font-extrabold text-[#004B93] tracking-wide">
          Amul<span className="text-[#FF0000]">.</span>
        </h1>

        {/* ---- Mobile menu button ---- */}
        <button
          className="md:hidden text-[#004B93] p-1"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* ---- Right: Links (Desktop) ---- */}
        <div className="hidden md:flex gap-6 text-[#004B93] font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#FF0000]" : "hover:text-[#FF0000]"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "text-[#FF0000]" : "hover:text-[#FF0000]"
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/recipes"
            className={({ isActive }) =>
              isActive ? "text-[#FF0000]" : "hover:text-[#FF0000]"
            }
          >
            Recipes
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-[#FF0000]" : "hover:text-[#FF0000]"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-[#FF0000]" : "hover:text-[#FF0000]"
            }
          >
            Contact
          </NavLink>
        </div>
      </div>

      {/* ---- Mobile Menu Dropdown ---- */}
      <div
        className={`md:hidden bg-[#FFFDF7] shadow-lg border-t border-gray-200 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `py-2 px-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-[#FF0000] text-white shadow-lg shadow-red-500/25"
                  : "hover:bg-[#004B93] hover:text-white"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              `py-2 px-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-[#FF0000] text-white"
                  : "hover:bg-[#004B93] hover:text-white"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Products
          </NavLink>

          <NavLink
            to="/recipes"
            className={({ isActive }) =>
              `py-2 px-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-[#FF0000] text-white"
                  : "hover:bg-[#004B93] hover:text-white"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Recipes
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `py-2 px-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-[#FF0000] text-white"
                  : "hover:bg-[#004B93] hover:text-white"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `py-2 px-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-[#FF0000] text-white"
                  : "hover:bg-[#004B93] hover:text-white"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
