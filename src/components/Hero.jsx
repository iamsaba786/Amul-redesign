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

      <img
        className="absolute top-0 left-7 z-5 w-35 h-35 inset-0 overflow-hidden pointer-events-none"
        src="https://imgs.search.brave.com/xfQlyASw5j258Xx_NNR97FWWysPPHZcepvkSnLtMLv4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nYWxs/ZXJ5cG5nLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNC8w/NS9hbXVsLWxvZ28t/aW1hZ2UtZnJlZS1k/b3dubG9hZC03Mjl4/NzUwLnBuZw"
        alt="logo.png"
      />

      {/* Subtle golden glare effects */}
      <div className="absolute top-20 left-1/3 w-40 h-40 bg-yellow-200/40 blur-3xl rounded-full animate-glow"></div>
      <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-yellow-100/30 blur-2xl rounded-full animate-glow-delayed"></div>

      {/* Floating Butter Drops Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Drop 1 */}
        <img
          src="https://imgs.search.brave.com/ZQ6cUVcprs7J63fPB0icucI-oRZBMHFmgzM8225wAvw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvYnV0dGVyL3Nt/YWxsL2J1dHRlcl9Q/TkcyNi5wbmc"
          alt="Butter Drop"
          className="absolute top-45 left-30 w-10 opacity-80 animate-drip"
        />
        {/* Drop 2 */}
        <img
          src="https://imgs.search.brave.com/ZQ6cUVcprs7J63fPB0icucI-oRZBMHFmgzM8225wAvw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvYnV0dGVyL3Nt/YWxsL2J1dHRlcl9Q/TkcyNi5wbmc"
          alt="Butter Drop"
          className="absolute top-40 right-52 w-8 opacity-70 animate-float"
        />

        {/* Drop 3 */}
        <img
          src="https://imgs.search.brave.com/ZQ6cUVcprs7J63fPB0icucI-oRZBMHFmgzM8225wAvw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvYnV0dGVyL3Nt/YWxsL2J1dHRlcl9Q/TkcyNi5wbmc"
          alt="Butter Drop"
          className="absolute top-75 left-105 w-10 opacity-50 animate-drip"
        />
        {/* Drop 4 */}
        <img
          src="https://imgs.search.brave.com/ZQ6cUVcprs7J63fPB0icucI-oRZBMHFmgzM8225wAvw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvYnV0dGVyL3Nt/YWxsL2J1dHRlcl9Q/TkcyNi5wbmc"
          alt="Butter Drop"
          className="absolute top-10 right-105 w-10 opacity-80 animate-drip"
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

      {/* Floating dripping cheese icon 2 */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute top-8 left-65"
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
