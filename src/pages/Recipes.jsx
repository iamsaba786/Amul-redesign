import React from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

const recipes = [
  {
    name: "Butter Paneer",
    image:
      "https://imgs.search.brave.com/vQgATQ9No4ziG6LCnXzXF1qqwq8TkWPcblRlEpecrQs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE0LzMyLzM5Lzkz/LzM2MF9GXzE0MzIz/OTkzODJfNGRQaVVu/S0dBWWlEQmVWSVRa/RndTMzhKR0JNSWZt/RDIuanBn",
    description: "Rich, creamy, and packed with flavor using Amul Butter.",
  },
  {
    name: "Amul Cheese Pizza",
    image:
      "https://i.pinimg.com/1200x/29/15/4d/29154d010462e3d719a6b58a48edb442.jpg",
    description: "A crispy homemade pizza loaded with Amul cheese.",
  },
  {
    name: "Amul Kool Shake",
    image:
      "https://i.pinimg.com/1200x/b6/a1/4f/b6a14f0e7ba686f04262b62c6536facd.jpg",
    description: "Perfectly chilled shakes made with Amul Kool.",
  },
  {
    name: "Amul Ice Cream Sundae",
    image:
      "https://i.pinimg.com/736x/aa/bb/20/aabb2010221a49657f19d8fe73849f20.jpg",
    description:
      "A classic, creamy sundae made with Amul Ice Cream topped with nuts and syrup.",
  },
  {
    name: "Amul Cheese Dosa",
    image:
      "https://i.pinimg.com/1200x/39/d3/3c/39d33c41573f1b8a4aec924599b8a6e3.jpg",
    description:
      "Crispy South Indian dosa generously filled with melted Amul Cheese.",
  },
  {
    name: "Amul Cookies",
    image:
      "https://i.pinimg.com/736x/6e/ea/4e/6eea4e1383327f4fb90838af22977fa2.jpg",
    description:
      "Light and crumbly cookies made with Amul Butter, perfect for tea-time.",
  },
  {
    name: "Cheese Garlic Bread",
    image:
      "https://i.pinimg.com/1200x/48/3e/52/483e526622deffd7aad6c407c2fb9fee.jpg",
    description: "Hot and buttery garlic bread, loaded with gooey Amul cheese.",
  },
  {
    name: "Amul Makhani Dal",
    image:
      "https://i.pinimg.com/736x/11/fa/e7/11fae74d7ce2956d8f24023cc6a95835.jpg",
    description:
      "Classic North Indian dal, creamy and flavor-packed with Amul Makhani.",
  },
  {
    name: "Amul Milk Chocolate Brownies",
    image:
      "https://i.pinimg.com/736x/18/39/b5/1839b51798c581c9219f3d7ccd62cbda.jpg",
    description:
      "Fudgy brownies made with sweet Amul Milk Chocolate—perfect for chocolate lovers.",
  },
  {
    name: "Amul Dark Chocolate Truffles",
    image:
      "https://i.pinimg.com/736x/85/a3/cf/85a3cf74212f33963472fc3b9feebcd8.jpg",
    description:
      "Decadent, melt-in-mouth truffles crafted with luxurious Amul Premium Dark Chocolate.",
  },
  {
    name: "Amul Food Factory",
    image:
      "https://i.pinimg.com/1200x/13/18/a4/1318a41eee0a160147a8d65dabd29ecd.jpg",
    description:
      "Amul is a dairy cooperative established on 14 December 1946 in Anand, Gujarat, India, to protect small dairy farmers from exploitation by private traders and middlemen  It was founded by Tribhuvandas Patel and later led by Verghese Kurien, who played a pivotal role in developing the cooperative model known as the Anand Pattern.",
  },
  {
    name: "Amul Lassi",
    image:
      "https://i.pinimg.com/1200x/23/b9/ef/23b9efe4c6777baece8343efce239cee.jpg",
    description:
      "Amul Lassi is a ready-to-drink, milk-based beverage produced by Amul, India’s largest dairy cooperative. Marketed as Amul Kool Lassi.",
  },
];

export default function Recipes() {
  const { id } = useParams();

  // If an id is in the URL, show recipe details
  if (id !== undefined) {
    const recipe = recipes[id];
    if (!recipe) {
      return (
        <div className="p-12 text-center text-xl text-red-700">
          Recipe not found.
        </div>
      );
    }
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-50 px-4">
        <motion.img
          src={recipe.image}
          alt={recipe.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-xl rounded-xl shadow-lg"
        />
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold mt-8 text-yellow-900"
        >
          {recipe.name}
        </motion.h2>
        <p className="mt-4 text-lg text-yellow-800">{recipe.description}</p>
        <Link
          to="/recipes"
          className="mt-10 px-6 py-3 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
        >
          Back to Recipes
        </Link>
      </div>
    );
  }

  // Otherwise, show the grid of recipes
  return (
    <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-center pt-12 pb-4 text-yellow-900"
      >
        Amul Recipes
      </motion.h1>
      <motion.div
        className="grid md:grid-cols-3 gap-8 px-4 md:px-24 py-10"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
          hidden: {},
        }}
      >
        {recipes.map((recipe, idx) => (
          <motion.div
            key={idx}
            whileHover={{
              scale: 1.035,
              boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-xl bg-white overflow-hidden shadow-lg cursor-pointer"
          >
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-yellow-900">
                {recipe.name}
              </h2>
              <p className="mt-2 text-yellow-800">{recipe.description}</p>
              <Link
                to={`/recipes/${idx}`}
                className="mt-4 inline-block transition px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
              >
                View Recipe
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
