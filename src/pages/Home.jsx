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
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#FEFCE7] overflow-hidden">
        <motion.img
          src="https://imgs.search.brave.com/lC2aZqM-EMZTDMh2YMCM6Y-4YfUDOWf5TIxSffx_lGc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvNS9NaWxr/LVNwbGFzaC1QTkcu/cG5n"
          alt="Milk Splash"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-80 md:w-96 drop-shadow-2xl"
        />

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-yellow-700 mt-8"
        >
          Pure. Fresh. Desi.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 max-w-xl mt-4"
        >
          Amul milk — the taste of purity, a splash of freshness that connects
          every Indian household with tradition and trust.
        </motion.p>
      </section>
      <Marque />
      <Featured />
      <Cards />
      {/* Stats Section */}
      <section className="w-full py-16 bg-yellow-100 flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-4xl font-bold text-yellow-700">75+</h3>
            <p className="mt-2 text-gray-700">Years of Purity</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-yellow-700">10M+</h3>
            <p className="mt-2 text-gray-700">Happy Families</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-yellow-700">100+</h3>
            <p className="mt-2 text-gray-700">Unique Products</p>
          </div>
        </div>
      </section>
      <Footer />;
    </>
  );
}
