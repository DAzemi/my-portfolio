"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full top-0 z-10 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* Logo or Title */}
        <Link href="/" className="text-xl font-bold">
          MyPortfolio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/about" className="hover:text-gray-400">About Me</Link>
          <Link href="/projects" className="hover:text-gray-400">Projects</Link>
          <Link href="/contact" className="hover:text-gray-400">Contact Me</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 bg-gray-900 text-center py-4">
          <Link href="/" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>About Me</Link>
          <Link href="/projects" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/contact" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Contact Me</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
