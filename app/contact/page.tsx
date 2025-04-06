'use client';

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-black opacity-20"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-xl text-center pt-24 pb-12"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Get in Touch</h1>
        <p className="text-lg sm:text-xl mb-8">
          Reach out to me through any of the following platforms:
        </p>

        <div className="space-y-5">
          <motion.a
            href="https://github.com/DAzemi"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            GitHub
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/dren-azemi-a51b71290/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            LinkedIn
          </motion.a>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-md transition"
          >
            Email Me: <span className="font-medium">dren.azemi444@gmail.com</span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-md transition"
          >
            Call Me: <span className="font-medium">046115253</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
