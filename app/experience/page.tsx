"use client";
import { motion } from "framer-motion"; // Ensure that framer-motion is properly installed

export default function Experience() {
  return (
    <section className="relative min-h-screen bg-gradient-to-r from-sky-200 to-indigo-300 text-white text-center px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.header
          className="mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold pt-12">
            Professional Experience
          </h1>
          <p className="text-lg sm:text-xl mt-4">
            Here are some of the key experiences that have helped shape my
            development journey.
          </p>
        </motion.header>

        <div className="space-y-12 pb-12">
          <motion.div
            className="bg-indigo-400 p-6 rounded-lg shadow-lg flex flex-col sm:flex-row justify-between items-center sm:items-start hover:bg-indigo-300 transition"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-center sm:text-left ">
              <h3 className="text-2xl sm:text-3xl font-semibold">
                Software Engineer Intern - Pabau
              </h3>
              <p className="text-white text-base sm:text-lg mt-2">
                November 2024 - February 2025
              </p>
            </div>
            <ul className="mt-4 space-y-2 text-lg sm:text-base w-full sm:w-2/3">
              <li>Collaborated with a team of 60+ developers.</li>
              <li>
                Gained expertise in TypeScript, Next.js, GraphQL, MySQL, Hasura,
                CSS, and modern development practices.
              </li>
              <li>
                Worked on optimizing performance, implementing new features, and
                ensuring scalability.
              </li>
              <li>
                Contributed to frontend and backend improvements while
                maintaining clean and efficient code.
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-indigo-400 p-6 rounded-lg shadow-lg flex flex-col sm:flex-row justify-between items-center sm:items-start hover:bg-indigo-300 transition"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl font-semibold">
                Software Engineer Intern - Starlabs
              </h3>
              <p className="text-white text-base sm:text-lg mt-2">
                September 2023 - December 2023
              </p>
            </div>
            <ul className="mt-4 space-y-2 text-lg sm:text-base w-full sm:w-2/3">
              <li>
                Developed a sophisticated e-commerce application using React.js,
                Node.js, and MySQL.
              </li>
              <li>
                Implemented secure authentication, authorization, and payment
                processing.
              </li>
              <li>
                Optimized database queries and backend performance for
                scalability.
              </li>
              <li>
                Gained hands-on experience in full-stack development, security
                protocols, and payment integration.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
