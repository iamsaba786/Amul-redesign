import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GiCheeseWedge } from "react-icons/gi";

const products = [
  {
    name: "Amul Butter",
    image:
      "https://i.pinimg.com/1200x/5b/05/e1/5b05e14b82ed16a0bd8b092e1f7f770e.jpg",
    description: "The classic, rich taste of real dairy butter.",
    link: "https://amul.com/products/amul-butter",
  },
  {
    name: "Amul Cheese",
    image:
      "https://i.pinimg.com/1200x/1a/ca/05/1aca0533caffff95156d1d48dd029dbd.jpg",
    description: "Creamy slices and spreads for every dish.",
    link: "https://amul.com/products/amul-cheese",
  },
  {
    name: "Amul Milk",
    image:
      "https://i.pinimg.com/736x/0a/ea/c4/0aeac49d5bed3accb53dd031122f0076.jpg",
    description: "Fresh and wholesome, sourced from the best dairies.",
    link: "https://amul.com/products/amul-taaza-toned-milk",
  },
  {
    name: "Amul Chocolate",
    image:
      "https://i.pinimg.com/1200x/d9/27/bc/d927bcb0f3f53b970cbdb483e0144d99.jpg",
    description: "Smooth, milky chocolates you can never resist.",
    link: "https://amul.com/products/amul-chocolates",
  },
  {
    name: "Amul Ice Cream",
    image:
      "https://i.pinimg.com/736x/3a/84/6b/3a846b967d0eaef87242b60285ce1c94.jpg",
    description: "Luscious frozen delights for every occasion.",
    link: "https://amul.com/products/amul-ice-creams",
  },
  {
    name: "Amul Shakes",
    image:
      "https://i.pinimg.com/1200x/d1/12/17/d112170541c9fb3a547601243f23044b.jpg",
    description: "Premium quality, rich cocoa flavor.",
    link: "https://amul.com/products/amul-kool-milk-shakes",
  },
  {
    name: "Amul Shakes",
    image:
      "https://i.pinimg.com/1200x/c5/45/6c/c5456cdc8644e132120bbdae0fa9f379.jpg",
    description: "Premium quality, rich cocoa flavor.",
    link: "https://amul.com/products/amul-kool-milk-shakes",
  },
  {
    name: "Amul dark chocolate",
    image:
      "https://i.pinimg.com/736x/85/a3/cf/85a3cf74212f33963472fc3b9feebcd8.jpg",
    description: "Premium quality, rich cocoa flavor.",
    link: "https://amul.com/products/amul-kool-milk-shakes",
  },
  {
    name: "Amul cools",
    image:
      "https://i.pinimg.com/1200x/8d/49/20/8d4920cb0fd092988cc8c690b9e86203.jpg",
    description: "Premium quality, rich cocoa flavor.",
    link: "https://amul.com/products/amul-kool-milk-shakes",
  },
  {
    name: "Amul epic",
    image:
      "https://i.pinimg.com/1200x/b7/32/14/b73214a119f956360133e794d3b244e9.jpg",
    description: "Premium quality, rich cocoa flavor.",
    link: "https://amul.com/products/amul-kool-milk-shakes",
  },
  {
    name: "Amul coffee",
    image:
      "https://i.pinimg.com/1200x/d5/e9/c1/d5e9c180748cae5033dec76c44f09e8a.jpg",
    description: "Premium quality, rich cocoa flavor.",
    link: "https://amul.com/products/amul-kool-milk-shakes",
  },
  {
    name: "Amul chocolate",
    image:
      "https://i.pinimg.com/736x/bf/5f/39/bf5f39a42f3a79e6e75e4c3ed04a52b8.jpg",
    description: "Premium quality, rich cocoa flavor.",
    link: "https://amul.com/products/amul-kool-milk-shakes",
  },
  {
    name: "Amul milk",
    image:
      "https://i.pinimg.com/736x/79/87/40/798740830ed564a3ab5b6f700f602bd9.jpg",
    description: "Premium quality, rich cocoa flavor.",
    link: "https://amul.com/products/amul-kool-milk-shakes",
  },
  {
    name: "Amul drinks",
    image:
      "https://i.pinimg.com/1200x/69/53/77/695377a92195575793b9819701725dfb.jpg",
    description: "Premium quality, rich cocoa flavor.",
    link: "https://amul.com/products/amul-kool-milk-shakes",
  },
  {
    name: "Amul badam Shakes",
    image:
      "https://i.pinimg.com/1200x/9d/4d/bc/9d4dbccd7b4a4ab80679a3be89336fe5.jpg",
    description: "Premium quality, rich cocoa flavor.",
    link: "https://amul.com/products/amul-kool-milk-shakes",
  },
  {
    name: "Amul Shakes",
    image:
      "https://i.pinimg.com/736x/14/7a/62/147a627a892bd9ad792f2411f42b51c7.jpg",
    description: "Premium quality, rich cocoa flavor.",
    link: "https://amul.com/products/amul-kool-milk-shakes",
  },
  {
    name: "Amul Shakes",
    image:
      "https://i.pinimg.com/1200x/76/bb/53/76bb53a8406d3fcb5650c5eb2ad0c225.jpg",
    description: "Premium quality, rich cocoa flavor.",
    link: "https://amul.com/products/amul-kool-milk-shakes",
  },
  {
    name: "Amul Shakes",
    image:
      "https://i.pinimg.com/1200x/0a/1f/ff/0a1ffffa492e31e238823c8eeaf29422.jpg",
    description: "Premium quality, rich cocoa flavor.",
    link: "https://amul.com/products/amul-kool-milk-shakes",
  },
];

export default function Products() {
  const [selectedIdx, setSelectedIdx] = useState(null);

  return (
    <section className="py-16 bg-gradient-to-br from-[#221f1f] via-[#c9a34c33] to-[#2d251830] min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-yellow-500 tracking-tight mb-10"
        >
          Our Products{" "}
          <GiCheeseWedge className="inline-block ml-3 text-yellow-400 animate-wiggle" />
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="cursor-pointer"
              onClick={() => setSelectedIdx(idx)}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-auto max-h-[340px] object-contain mx-auto"
              />
            </motion.div>
          ))}
        </div>
      </div>
      <style>
        {`
          .animate-wiggle {
            animation: wiggle 2.5s infinite;
          }
          @keyframes wiggle {
            0%, 100% { transform: rotate(-15deg);}
            50% { transform: rotate(15deg);}
          }
        `}
      </style>

      {/* ---- MODAL PRODUCT DETAILS ---- */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            onClick={() => setSelectedIdx(null)}
          >
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 60, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white/90 border border-yellow-400 shadow-2xl rounded-2xl p-10 w-full max-w-sm text-center flex flex-col items-center"
            >
              <img
                src={products[selectedIdx].image}
                alt={products[selectedIdx].name}
                className="w-32 h-32 object-contain mb-6 rounded-lg"
              />
              <h2 className="text-2xl mb-2 font-bold text-yellow-700">
                {products[selectedIdx].name}
              </h2>
              <p className="mb-4 text-gray-700">
                {products[selectedIdx].description}
              </p>
              <a
                href={products[selectedIdx].link}
                target="_blank"
                rel="noopener"
                className="inline-block mt-4 px-6 py-2 rounded bg-yellow-500 text-white hover:bg-yellow-700 font-semibold transition"
              >
                View Details
              </a>
              <button
                className="mt-6 py-2 px-6 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 font-medium"
                onClick={() => setSelectedIdx(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
