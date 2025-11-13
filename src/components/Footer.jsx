import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-yellow-800 text-white px-8 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo & Description */}
        <div>
          <h1 className="font-unifraktur text-4xl mb-4">Amul</h1>
          <p className="max-w-sm">
            Amul — The Taste of India. Since 1946, bringing purity, quality, and
            freshness to millions of households.
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="https://facebook.com/amul"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com/amul"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com/amul"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://youtube.com/amul"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
              aria-label="YouTube"
            >
              <FaYoutube size={24} />
            </a>
          </div>
        </div>

        {/* Products links */}
        <div>
          <h2 className="text-xl uppercase font-semibold mb-4">Products</h2>
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
        <div>
          <h2 className="text-xl uppercase font-semibold mb-4">Quick Links</h2>
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
        <div>
          <h2 className="text-xl uppercase font-semibold mb-4">Get in Touch</h2>
          <p className="mb-3 text-sm max-w-xs">
            Email:{" "}
            <a
              href="mailto:amulcare@amul.com"
              className="underline hover:text-yellow-400"
            >
              amulcare@amul.com
            </a>
          </p>
          <p className="mb-6 text-sm max-w-xs">
            Phone:{" "}
            <a
              href="tel:18002583333"
              className="underline hover:text-yellow-400"
            >
              1800 258 3333
            </a>
          </p>
          <form className="flex flex-col gap-5 max-w-xs">
            <input
              type="email"
              placeholder="Your email"
              className="flex-grow rounded-l-md px-3 py-2 text-black"
              required
            />
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-600 px-5 py-2 rounded-md font-semibold transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-yellow-400 mt-12 pt-6 text-center text-xs text-yellow-200 tracking-wide">
        &copy; {new Date().getFullYear()} Amul. All Rights Reserved.
      </div>
    </footer>
  );
}
