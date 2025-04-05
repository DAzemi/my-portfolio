"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight hover:text-gray-300 transition">
          Dren's Portofolio
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="hover:text-gray-300 transition">Home</Link>
          <Link href="/about" className="hover:text-gray-300 transition">About Me</Link>
          <Link href="/projects" className="hover:text-gray-300 transition">Projects</Link>
          <Link href="/contact" className="hover:text-gray-300 transition">Contact</Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-gray-900 py-4 space-y-4 transition-all duration-300">
          <Link href="/" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>About Me</Link>
          <Link href="/projects" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/contact" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
