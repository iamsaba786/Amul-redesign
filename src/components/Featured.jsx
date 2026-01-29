import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";

function Featured() {
  // Array of 6 animations for 6 cards
  const cards = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];

  const [showParagraph, setShowParagraph] = useState(false);

  const handleHover = (index) => {
    // Animation only triggers on Desktop (larger than 1024px)
    if (window.innerWidth >= 1024) {
      cards[index].start({ y: "0" });
    }
  };

  const handleHoverEnd = (index) => {
    if (window.innerWidth >= 1024) {
      cards[index].start({ y: "100%" });
    }
  };

  const amulLetters = ["A", "m", "u", "l"];
  const amulContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };
  const amulChild = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 250, damping: 26 },
    },
  };

  return (
    <div className="w-full bg-[#FEFCE7] py-10">
      <div className="w-full flex flex-col items-center px-6 sm:px-10 border-b-[1px] border-zinc-600 pb-12 sm:pb-20">
        <motion.div
          className="flex items-center justify-center"
          variants={amulContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
        >
          {amulLetters.map((char, idx) => (
            <motion.span
              key={idx}
              variants={amulChild}
              className="text-5xl sm:text-7xl text-red-600 font-extrabold font-unifraktur"
              style={{
                marginRight: idx < amulLetters.length - 1 ? "0.07em" : 0,
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
        {showParagraph && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-center text-gray-600 max-w-xl mt-2 text-lg sm:text-xl"
          >
            The taste of India
          </motion.p>
        )}
      </div>

      {/* ==== BLOCK 1 ==== */}
      <div className="px-6 sm:px-10">
        <div className="labs flex flex-col sm:flex-row sm:items-center justify-between sm:mr-[30vw] uppercase mt-12 mb-5 sm:-mb-5 gap-3">
          <div className="flex items-center gap-2 ">
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-400 sm:bg-zinc-100"></div>
            <h1 className="text-sm sm:text-md">Amul Almond Chocolate</h1>
          </div>
          <div className="flex items-center gap-2 ">
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-400 sm:bg-zinc-100"></div>
            <h1 className="text-sm sm:text-md">Amul Kool Shakes</h1>
          </div>
        </div>
        <div className="cards w-full flex flex-col sm:flex-row gap-10 mt-10 uppercase">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-full sm:w-1/2 h-[50vh] sm:h-[75vh]"
          >
            <h1 className="absolute hidden lg:flex text-[#EDD98E] overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter font-bold text-8xl pointer-events-none">
              {"Almond".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.03 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden shadow-lg">
              <img
                className="w-full h-full object-cover"
                src="https://i.pinimg.com/736x/c2/bd/eb/c2bdebb80d5a94b43f93e6f195ee0efd.jpg"
                alt="choco almond"
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-full sm:w-1/2 h-[50vh] sm:h-[75vh]"
          >
            <h1 className="absolute hidden lg:flex overflow-hidden text-[#EDD98E] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter font-bold text-8xl pointer-events-none">
              {"SHAKES".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.03 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden shadow-lg">
              <img
                className="w-full h-full object-cover"
                src="https://i.pinimg.com/1200x/01/34/52/013452a341a9d8176fbaea497befd575.jpg"
                alt="shakes"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ==== BLOCK 2 ==== */}
      <div className="px-6 sm:px-10 mt-10 sm:mt-0">
        <div className="labs flex flex-col sm:flex-row sm:items-center uppercase mt-20 mb-5 sm:-mb-5 sm:gap-[38%]">
          <div className="flex items-center gap-2 ">
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-400 sm:bg-zinc-100"></div>
            <h1 className="text-sm sm:text-md">Sandwich Lower</h1>
          </div>
          <div className="flex items-center gap-2 ">
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-400 sm:bg-zinc-100"></div>
            <h1 className="text-sm sm:text-md">Amul Neapolitan Cake</h1>
          </div>
        </div>
        <div className="cards w-full flex flex-col sm:flex-row gap-10 mt-10 uppercase">
          <motion.div
            onHoverStart={() => handleHover(2)}
            onHoverEnd={() => handleHoverEnd(2)}
            className="cardcontainer relative w-full sm:w-1/2 h-[50vh] sm:h-[75vh]"
          >
            <h1 className="absolute hidden lg:flex overflow-hidden text-[#EDD98E] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter font-bold text-8xl pointer-events-none">
              {"SANDWICH".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[2]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden shadow-lg">
              <img
                className="w-full h-full object-cover"
                src="https://i.pinimg.com/1200x/b5/92/c5/b592c565388313046862b098d6ae9af2.jpg"
                alt="Sandwich"
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(3)}
            onHoverEnd={() => handleHoverEnd(3)}
            className="cardcontainer relative w-full sm:w-1/2 h-[50vh] sm:h-[75vh]"
          >
            <h1 className="absolute hidden lg:flex overflow-hidden text-[#EDD98E] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter font-bold text-8xl pointer-events-none">
              {"NEAPOLITAN".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[3]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden shadow-lg">
              <img
                className="w-full h-full object-cover"
                src="https://i.pinimg.com/1200x/e4/08/f1/e408f15c8b5d5a39a352ae2178c3c3a7.jpg"
                alt="cake"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ==== BLOCK 3 ==== */}
      <div className="px-6 sm:px-10 mt-10 sm:mt-0">
        <div className="labs flex flex-col sm:flex-row sm:items-center justify-between sm:mr-[36vw] uppercase mt-20 mb-5 sm:-mb-5 gap-3">
          <div className="flex items-center gap-2 ">
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-400 sm:bg-zinc-100"></div>
            <h1 className="text-sm sm:text-md">Premium Blend</h1>
          </div>
          <div className="flex items-center gap-2 ">
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-100"></div>
            <h1 className="text-sm sm:text-md">Soft start</h1>
          </div>
        </div>
        <div className="cards w-full flex flex-col sm:flex-row gap-10 mt-10 uppercase">
          <motion.div
            onHoverStart={() => handleHover(4)}
            onHoverEnd={() => handleHoverEnd(4)}
            className="cardcontainer relative w-full sm:w-1/2 h-[50vh] sm:h-[75vh]"
          >
            <h1 className="absolute hidden lg:flex overflow-hidden text-[#EDD98E] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter font-bold text-8xl pointer-events-none">
              {"PREMIUM".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[4]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.03 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden shadow-lg">
              <img
                className="w-full h-full object-cover"
                src="https://i.pinimg.com/736x/c9/ba/fd/c9bafda7d0f4b40436b6df8d58e491eb.jpg"
                alt="premium"
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(5)}
            onHoverEnd={() => handleHoverEnd(5)}
            className="cardcontainer relative w-full sm:w-1/2 h-[50vh] sm:h-[75vh]"
          >
            <h1 className="absolute hidden lg:flex overflow-hidden text-[#EDD98E] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter font-bold text-8xl pointer-events-none">
              {"SOFTSTART".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[5]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.03 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden shadow-lg">
              <img
                className="w-full h-full object-cover"
                src="https://i.pinimg.com/736x/40/58/a4/4058a4ed5b8a5c6b8c9ef8a8311adcfe.jpg"
                alt="soft chocolate"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
