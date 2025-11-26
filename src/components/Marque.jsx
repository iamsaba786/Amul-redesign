import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full py-10 rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg bg-[#985D07]"
    >
      <div className="text-white border-t-2 border-b-2 border-zinc-400 flex overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[10vw] leading-none tracking-tighter font-['FoundersGrotesk, Roboto, sans-serif'] uppercase -mt-[2.5vw] -mb-[0.5vw] font-bold pr-20"
        >
          Utterly Butterly Delicious Amul
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[10vw] leading-none tracking-tighter font-['FoundersGrotesk, Roboto, sans-serif'] uppercase -mt-[2.5vw] -mb-[0.5vw] font-bold pr-20"
        >
          Utterly Butterly Delicious Amul
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
