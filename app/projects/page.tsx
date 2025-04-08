"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-sky-200 to-indigo-300 text-gray-900 text-white text-center px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative z-10 max-w-6xl w-full pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            My Projects
          </h1>
          <p className="text-lg sm:text-xl opacity-90">
            Explore some of the projects I’ve worked on and check out my GitHub
            for more.
          </p>
          <a
            href="https://github.com/DAzemi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 py-3 px-6 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition"
          >
            Visit My GitHub
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8"
        >
          {[...Array(4)].map((_, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden rounded-xl shadow-lg bg-white text-black"
            >
              <Image
                src={`/project-${index + 1}.jpeg`}
                alt={`Project ${index + 1}`}
                className="w-full h-auto aspect-video object-cover"
                width={400}
                height={300}
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-white font-bold text-lg">
                  Project {index + 1}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
