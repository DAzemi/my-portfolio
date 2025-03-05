import Link from "next/link";
const Navbar = () => {
    return (
      <nav className="bg-gray-900 text-white p-4 flex justify-center gap-6 shadow-lg fixed w-full top-0 z-10">
        <Link href="/" className="hover:text-gray-400">Home</Link>
        <Link href="/about" className="hover:text-gray-400">About Me</Link>
        <Link href="/projects" className="hover:text-gray-400">Projects</Link>
        <Link href="/contact" className="hover:text-gray-400">Contact Me</Link>
      </nav>
    );
  };
  export default Navbar;