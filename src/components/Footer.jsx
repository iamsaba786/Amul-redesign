import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-yellow-800 text-white px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
        {/* Logo & Description */}
        <div className="text-center sm:text-left">
          <h1 className="font-unifraktur text-3xl sm:text-4xl mb-4">Amul</h1>
          <p className="max-w-sm mx-auto sm:mx-0 text-sm sm:text-base">
            Amul — The Taste of India. Since 1946, bringing purity, quality, and
            freshness to millions of households.
          </p>
          <div className="flex justify-center sm:justify-start gap-4 mt-6">
            <a
              href="https://facebook.com/amul"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
              aria-label="Facebook"
            >
              <FaFacebook size={22} />
            </a>
            <a
              href="https://twitter.com/amul"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
              aria-label="Twitter"
            >
              <FaTwitter size={22} />
            </a>
            <a
              href="https://instagram.com/amul"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
              aria-label="Instagram"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="https://youtube.com/amul"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
              aria-label="YouTube"
            >
              <FaYoutube size={22} />
            </a>
          </div>
        </div>

        {/* Products links */}
        <div className="text-center sm:text-left">
          <h2 className="text-lg sm:text-xl uppercase font-semibold mb-4">
            Products
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/products#butter" className="hover:text-yellow-400">
                Butter
              </a>
            </li>
            <li>
              <a href="/products#cheese" className="hover:text-yellow-400">
                Cheese
              </a>
            </li>
            <li>
              <a href="/products#milk" className="hover:text-yellow-400">
                Milk
              </a>
            </li>
            <li>
              <a href="/products#chocolate" className="hover:text-yellow-400">
                Chocolate
              </a>
            </li>
            <li>
              <a href="/products#icecream" className="hover:text-yellow-400">
                Ice Cream
              </a>
            </li>
            <li>
              <a href="/products#shakes" className="hover:text-yellow-400">
                Shakes
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="text-center sm:text-left">
          <h2 className="text-lg sm:text-xl uppercase font-semibold mb-4">
            Quick Links
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-yellow-400">
                Home
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-yellow-400">
                Products
              </a>
            </li>
            <li>
              <a href="/recipes" className="hover:text-yellow-400">
                Recipes
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-400">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Newsletter */}
        <div className="text-center sm:text-left">
          <h2 className="text-lg sm:text-xl uppercase font-semibold mb-4">
            Get in Touch
          </h2>
          <p className="mb-3 text-sm max-w-xs mx-auto sm:mx-0">
            Email:{" "}
            <a
              href="mailto:amulcare@amul.com"
              className="underline hover:text-yellow-400"
            >
              amulcare@amul.com
            </a>
          </p>
          <p className="mb-6 text-sm max-w-xs mx-auto sm:mx-0">
            Phone:{" "}
            <a
              href="tel:18002583333"
              className="underline hover:text-yellow-400"
            >
              1800 258 3333
            </a>
          </p>
          <form className="flex flex-col gap-4 max-w-xs mx-auto sm:mx-0">
            <input
              type="email"
              placeholder="Your email"
              className="rounded-md px-3 py-2 text-black text-sm"
              required
            />
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-600 px-5 py-2 rounded-md font-semibold transition text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-yellow-400 mt-10 sm:mt-12 pt-4 sm:pt-6 text-center text-xs text-yellow-200 tracking-wide">
        &copy; {new Date().getFullYear()} Amul. All Rights Reserved.
      </div>
    </footer>
  );
}
