import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#FFFDF7] to-[#FFF3D6] overflow-hidden px-6 py-20"
    >
      {/* Milk Drops Background */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="milk-drop"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${5 + Math.random() * 3}s`, // slower and smoother
            animationDelay: `${Math.random() * 4}s`,
          }}
        ></div>
      ))}

      {/* Optional: Splashes on bottom */}
      <div className="absolute bottom-0 w-full h-20 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="splash"
            style={{
              left: `${20 + i * 25}%`,
              animationDelay: `${i * 0.8}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Background Glow */}
      <div className="absolute w-80 h-80 bg-yellow-200 rounded-full blur-3xl opacity-30 top-10 left-10 animate-glow"></div>
      <div className="absolute w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-30 bottom-10 right-10 animate-glow-delayed"></div>

      {/* Logo Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 mb-12"
      >
        <img
          src="https://imgs.search.brave.com/uhV8A0HRKBl_jegBKwJAbyJdceMTNjGcdOSAV_t8pVY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jcnlz/dGFscG5nLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNS8w/OS9BbXVsLWxvZ28u/cG5n"
          alt="Amul Logo"
          className="w-64 md:w-80 drop-shadow-2xl mx-auto"
        />
      </motion.div>

      {/* Brand Story */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl text-center relative z-10 space-y-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#E60000]">
          About Amul
        </h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          Founded in 1946, Amul has been India’s most trusted dairy brand for
          generations. From humble beginnings to becoming a global icon, Amul
          represents purity, innovation, and the spirit of self-reliance.{" "}
          <span className="font-semibold text-[#B58000]">
            Every drop of milk tells a story of Indian farmers and their
            resilience.
          </span>
        </p>
      </motion.div>

      {/* Highlight Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 relative z-10">
        {[
          { number: "100+", label: "Products" },
          { number: "10M+", label: "Farmers Connected" },
          { number: "75+", label: "Years of Trust" },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-yellow-100"
          >
            <h3 className="text-3xl font-bold text-[#E60000]">{item.number}</h3>
            <p className="text-gray-700 font-medium mt-2">{item.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Bottom Decorative Image */}
      <motion.img
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        src="https://i.pinimg.com/1200x/87/88/4e/87884e8478db05e235122fd6e25c88c0.jpg"
        alt="Milk Splash"
        className="absolute bottom-0 w-full opacity-70"
      />
    </section>
  );
}
