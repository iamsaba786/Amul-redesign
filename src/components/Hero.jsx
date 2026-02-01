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
    <section className="relative h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-100 to-yellow-50 overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="glow-bg"></div>

      <img
        className="absolute top-0 left-4 sm:left-6 lg:left-7 z-[5] w-20 sm:w-24 md:w-28 lg:w-32 xl:w-35 h-20 sm:h-24 md:h-28 lg:h-32 xl:h-35 object-contain pointer-events-none"
        src="https://imgs.search.brave.com/xfQlyASw5j258Xx_NNR97FWWysPPHZcepvkSnLtMLv4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nYWxs/ZXJ5cG5nLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNC8w/NS9hbXVsLWxvZ28t/aW1hZ2UtZnJlZS1k/b3dubG9hZC03Mjl4/NzUwLnBuZw"
        alt="logo.png"
      />

      {/* Subtle golden glare effects */}
      <div className="absolute top-12 sm:top-16 md:top-20 left-1/3 w-32 sm:w-36 md:w-40 h-32 sm:h-36 md:h-40 bg-yellow-200/40 blur-3xl rounded-full animate-glow"></div>
      <div className="absolute bottom-20 right-1/4 w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 bg-yellow-100/30 blur-2xl rounded-full animate-glow-delayed"></div>

      {/* Floating Butter Drops Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Drop 1 */}
        <img
          src="https://imgs.search.brave.com/ZQ6cUVcprs7J63fPB0icucI-oRZBMHFmgzM8225wAvw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvYnV0dGVyL3Nt/YWxsL2J1dHRlcl9Q/TkcyNi5wbmc"
          alt="Butter Drop"
          className="absolute top-32 sm:top-40 md:top-45 left-16 sm:left-24 md:left-30 w-8 sm:w-9 md:w-10 opacity-80 animate-drip"
        />
        {/* Drop 2 */}
        <img
          src="https://imgs.search.brave.com/ZQ6cUVcprs7J63fPB0icucI-oRZBMHFmgzM8225wAvw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvYnV0dGVyL3Nt/YWxsL2J1dHRlcl9Q/TkcyNi5wbmc"
          alt="Butter Drop"
          className="absolute top-32 sm:top-36 md:top-40 right-24 sm:right-32 md:right-52 w-6 sm:w-7 md:w-8 opacity-70 animate-float"
        />

        {/* Drop 3 */}
        <img
          src="https://imgs.search.brave.com/ZQ6cUVcprs7J63fPB0icucI-oRZBMHFmgzM8225wAvw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvYnV0dGVyL3Nt/YWxsL2J1dHRlcl9Q/TkcyNi5wbmc"
          alt="Butter Drop"
          className="absolute top-64 sm:top-72 md:top-75 left-64 sm:left-80 md:left-105 w-8 sm:w-9 md:w-10 opacity-50 animate-drip"
        />
        {/* Drop 4 */}
        <img
          src="https://imgs.search.brave.com/ZQ6cUVcprs7J63fPB0icucI-oRZBMHFmgzM8225wAvw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvYnV0dGVyL3Nt/YWxsL2J1dHRlcl9Q/TkcyNi5wbmc"
          alt="Butter Drop"
          className="absolute top-8 right-64 sm:right-80 md:right-105 w-8 sm:w-9 md:w-10 opacity-80 animate-drip"
        />
      </div>

      {/* Melting butter image */}
      <motion.img
        src="https://imgs.search.brave.com/a9Ppkm_AUgKahmW8IE7hf5bbmRe_13_Xr5Ksxo0fvZk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjcv/ODQzLzY2Mi9zbWFs/bC9jcmVhbXktYnV0/dGVyLXNwbGFzaGVz/LWFnYWluc3QtdHJh/bnNwYXJlbnQtYmFj/a2dyb3VuZC1zaG93/Y2FzaW5nLWl0cy1y/aWNoLXllbGxvdy1j/b2xvci1hbmQtc21v/b3RoLXRleHR1cmUt/ZXZva2luZy1zZW5z/ZS1vZi1mcmVzaG5l/c3MtYW5kLWluZHVs/Z2VuY2UtaXNvbGF0/ZWQtb24tdHJhbnNw/YXJlbnQtYmFja2dy/b3VuZC1wbmcucG5n"
        alt="Amul Butter"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 drop-shadow-2xl z-10 mx-auto"
      />

      {/* Floating dripping cheese icon */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute top-16 sm:top-20 right-8 sm:right-16 md:right-20 z-10"
      >
        <GiCheeseWedge className="text-yellow-400 w-10 h-10 sm:w-12 sm:h-12 md:text-4xl lg:text-5xl animate-float" />
      </motion.div>

      {/* Floating dripping cheese icon 2 */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute top-8 left-36 sm:left-52 md:left-65 z-10"
      >
        <GiCheeseWedge className="text-yellow-400 w-10 h-10 sm:w-12 sm:h-12 md:text-4xl lg:text-5xl animate-float" />
      </motion.div>

      {/* Text Section */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-yellow-800 text-center mt-8 sm:mt-10 md:mt-12 leading-tight px-2 z-20"
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
        className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-yellow-700 mt-4 sm:mt-6 md:mt-8 italic px-4 text-center z-20 max-w-2xl mx-auto leading-relaxed"
      >
        "Taste of India — Since 1946"
      </motion.p>
    </section>
  );
}
