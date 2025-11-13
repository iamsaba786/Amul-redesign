import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) => {
    // Here, you would send data to your server or show a success message.
    // For demo, just log to the console.
    console.log(data);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100 flex items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full bg-white bg-opacity-80 rounded-2xl shadow-2xl p-10 backdrop-blur-md"
      >
        <h2 className="text-3xl font-bold text-yellow-900 text-center mb-8">
          Contact Us
        </h2>
        {isSubmitSuccessful ? (
          <div className="text-center text-green-700 font-semibold mb-8">
            Thank you for your message! 💛
          </div>
        ) : (
          <form
            className="space-y-6"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div className="flex flex-col">
              <label className="mb-2 text-lg text-yellow-700 font-semibold">
                Name
              </label>
              <input
                {...register("name", { required: "Name is required." })}
                type="text"
                placeholder="Your Name"
                className="bg-yellow-50 border-none rounded-lg py-3 px-4 text-yellow-900 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
              {errors.name && (
                <span className="text-red-600 text-sm mt-1">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-lg text-yellow-700 font-semibold">
                Email
              </label>
              <input
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "Invalid email address.",
                  },
                })}
                type="email"
                placeholder="you@email.com"
                className="bg-yellow-50 border-none rounded-lg py-3 px-4 text-yellow-900 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
              {errors.email && (
                <span className="text-red-600 text-sm mt-1">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-lg text-yellow-700 font-semibold">
                Message
              </label>
              <textarea
                rows="5"
                {...register("message", { required: "Message is required." })}
                placeholder="Type your message here..."
                className="bg-yellow-50 border-none rounded-lg py-3 px-4 text-yellow-900 focus:outline-none focus:ring-2 focus:ring-yellow-300 resize-none"
              />
              {errors.message && (
                <span className="text-red-600 text-sm mt-1">
                  {errors.message.message}
                </span>
              )}
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              className="bg-yellow-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition hover:bg-yellow-600 flex items-center justify-center mx-auto"
            >
              Send Message
            </motion.button>
          </form>
        )}
        <div className="mt-10 text-center text-yellow-900">
          <p>Or reach us on:</p>
          <p className="mt-1">
            <a
              href="mailto:amulcare@amul.com"
              className="underline text-yellow-700"
            >
              amulcare@amul.com
            </a>
          </p>
          <p>
            Customer Care: <span className="font-semibold">1800 258 3333</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
