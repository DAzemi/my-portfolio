"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-12 text-center">
      <div className="absolute inset-0 bg-black opacity-25"></div>
      
      <div className="relative z-10 max-w-4xl w-full">
        <motion.header
          className="mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl font-extrabold mb-2 mt-12">About Me</h1>
          <p className="text-lg opacity-90">Learn more about my journey and skills</p>
        </motion.header>

        <motion.div
          className="flex flex-col md:flex-row items-center md:items-start md:space-x-10 text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src="/me.jpg"
            alt="Dren Azemi"
            className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-white shadow-lg mb-6 md:mb-0"
            width={192}
            height={192}
          />

          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Hi, I'm Dren Azemi</h2>
            <p className="text-lg leading-relaxed">
              I'm a recent graduate in Computer Science and Engineering with a strong passion
              for web development and modern technologies. My expertise includes building fast,
              scalable, and secure applications using technologies like React, Next.js, Node.js,
              and MySQL.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">Skills</h3>
          <ul className="space-y-2 text-lg pl-5 list-disc">
            <li>🌐 Web Development: React, Next.js, Tailwind CSS</li>
            <li>🗃️ Backend: Node.js, Express, GraphQL, MySQL</li>
            <li>🔐 Security: JWT, OAuth, Authentication best practices</li>
          </ul>
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <a
            href="/contact"
            className="inline-block py-3 px-6 text-white bg-indigo-600 rounded-lg text-lg sm:text-xl hover:bg-indigo-700 transition duration-300"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
