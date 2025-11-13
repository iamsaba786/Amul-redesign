import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#FFFDF7] shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* ---- Left: Logo ---- */}
        <h1 className="text-2xl font-extrabold text-[#004B93] tracking-wide">
          Amul<span className="text-[#FF0000]">.</span>
        </h1>

        {/* ---- Right: Links ---- */}
        <div className="flex gap-6 text-[#004B93] font-medium">
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
    </nav>
  );
}
