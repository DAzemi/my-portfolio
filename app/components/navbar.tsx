"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight hover:text-gray-300 transition"
        >
          Dren's Portfolio
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {["Home", "About Me", "Projects", "Contact", "Experience"].map((text, idx) => (
            <Link
              key={idx}
              href={text === "Home" ? "/" : `/${text.toLowerCase().replace(" ", "")}`}
              className="hover:text-gray-300 transition"
            >
              {text}
            </Link>
          ))}
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
          {["Home", "About Me", "Projects", "Contact", "Experience"].map((text, idx) => (
            <Link
              key={idx}
              href={text === "Home" ? "/" : `/${text.toLowerCase().replace(" ", "")}`}
              className="hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              {text}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
