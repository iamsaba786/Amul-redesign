import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Marque from "../components/Marque";
import Featured from "../components/Featured";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      {/* Milk Splash Section */}
      <section className="relative h-[70vh] sm:h-[75vh] md:h-[80vh] lg:min-h-screen lg:-mt-20 md:-mt-30 sm:-mt-40 flex flex-col items-center justify-center bg-[#FEFCE7] overflow-hidden px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <motion.img
          src="https://imgs.search.brave.com/lC2aZqM-EMZTDMh2YMCM6Y-4YfUDOWf5TIxSffx_lGc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvNS9NaWxr/LVNwbGFzaC1QTkcu/cG5n"
          alt="Milk Splash"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72 2xl:w-80 2xl:w-96 drop-shadow-2xl mx-auto max-h-[50vh] object-contain "
        />

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-700 mt-6 sm:mt-8 text-center leading-tight"
        >
          Pure. Fresh. Desi.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 text-sm sm:text-base md:text-lg max-w-md sm:max-w-lg md:max-w-xl mt-4 px-2 leading-relaxed"
        >
          Amul milk — the taste of purity, a splash of freshness that connects
          every Indian household with tradition and trust.
        </motion.p>
      </section>
      <Marque />
      <Featured />
      <Cards />
      {/* Stats Section */}
      <section className="w-full py-10 sm:py-12 md:py-16 lg:py-20 bg-yellow-100 flex justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 w-full max-w-4xl">
          <div className="text-center py-6">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-700">
              75+
            </h3>
            <p className="mt-2 sm:mt-3 text-gray-700 text-sm sm:text-base font-medium">
              Years of Purity
            </p>
          </div>
          <div className="text-center py-6">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-700">
              10M+
            </h3>
            <p className="mt-2 sm:mt-3 text-gray-700 text-sm sm:text-base font-medium">
              Happy Families
            </p>
          </div>
          <div className="text-center py-6">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-700">
              100+
            </h3>
            <p className="mt-2 sm:mt-3 text-gray-700 text-sm sm:text-base font-medium">
              Unique Products
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
