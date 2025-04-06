"use client"
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center px-4 sm:px-6">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      <div className="relative z-10 max-w-2xl w-full">
        {/* Profile Image */}
        <Image
          src="/me.jpg"
          alt="Profile Picture"
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto shadow-lg border-4 border-white transition-transform duration-300 hover:scale-105"
          width={160}
          height={160}
        />

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl font-extrabold mt-6 drop-shadow-lg">
          Hi, I'm Dren Azemi
        </h1>

        {/* Typing Effect */}
        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            2000,
            "React & Node.js Specialist",
            2000,
            "Modern Web App Builder",
            2000,
          ]}
          wrapper="p"
          speed={50}
          repeat={Infinity}
          className="text-lg sm:text-xl mt-3 font-medium text-white/90"
        />

        {/* CTA */}
        <div className="mt-6">
          <a
            href="/projects"
            className="inline-block px-6 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-gray-200 transition"
          >
            View My Projects
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-6 text-2xl">
          <a
            href="https://github.com/DAzemi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/dren-azemi-a51b71290/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-gray-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}
