import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GiCheeseWedge } from "react-icons/gi";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-100 to-yellow-50 overflow-hidden">
      <div className="glow-bg"></div>

      {/* Subtle golden glare effects */}
      <div className="absolute top-20 left-1/3 w-40 h-40 bg-yellow-200/40 blur-3xl rounded-full animate-glow"></div>
      <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-yellow-100/30 blur-2xl rounded-full animate-glow-delayed"></div>

      {/* Floating Butter Drops Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Drop 1 */}
        <img
          src="https://imgs.search.brave.com/ZQ6cUVcprs7J63fPB0icucI-oRZBMHFmgzM8225wAvw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvYnV0dGVyL3Nt/YWxsL2J1dHRlcl9Q/TkcyNi5wbmc"
          alt="Butter Drop"
          className="absolute top-10 left-20 w-10 opacity-80 animate-drip"
        />
        {/* Drop 2 */}
        <img
          src="https://imgs.search.brave.com/ZQ6cUVcprs7J63fPB0icucI-oRZBMHFmgzM8225wAvw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvYnV0dGVyL3Nt/YWxsL2J1dHRlcl9Q/TkcyNi5wbmc"
          alt="Butter Drop"
          className="absolute top-40 right-32 w-8 opacity-70 animate-float"
        />
        {/* Drop 3 */}
        <img
          src="https://imgs.search.brave.com/ZQ6cUVcprs7J63fPB0icucI-oRZBMHFmgzM8225wAvw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvYnV0dGVyL3Nt/YWxsL2J1dHRlcl9Q/TkcyNi5wbmc"
          alt="Butter Drop"
          className="absolute top-130 left-1/2 w-12 opacity-80 animate-float"
        />
      </div>

      {/* Melting butter image */}
      <motion.img
        src="https://imgs.search.brave.com/a9Ppkm_AUgKahmW8IE7hf5bbmRe_13_Xr5Ksxo0fvZk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjcv/ODQzLzY2Mi9zbWFs/bC9jcmVhbXktYnV0/dGVyLXNwbGFzaGVz/LWFnYWluc3QtdHJh/bnNwYXJlbnQtYmFj/a2dyb3VuZC1zaG93/Y2FzaW5nLWl0cy1y/aWNoLXllbGxvdy1j/b2xvci1hbmQtc21v/b3RoLXRleHR1cmUt/ZXZva2luZy1zZW5z/ZS1vZi1mcmVzaG5l/c3MtYW5kLWluZHVs/Z2VuY2UtaXNvbGF0/ZWQtb24tdHJhbnNw/YXJlbnQtYmFja2dy/b3VuZC1wbmcucG5n"
        alt="Amul Butter"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="w-40 md:w-56 drop-shadow-2xl"
      />

      {/* Floating dripping cheese icon */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute top-20 right-20"
      >
        <GiCheeseWedge className="text-yellow-400 text-5xl animate-float" />
      </motion.div>

      {/* Text Section */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="text-5xl md:text-7xl font-extrabold text-yellow-800 text-center mt-6"
      >
        Utterly Butterly Delicious Amul
      </motion.h1>

      {/* Slogan motion */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="text-lg md:text-2xl text-yellow-700 mt-4 italic"
      >
        “Taste of India — Since 1946”
      </motion.p>
    </section>
  );
}
