import { useState } from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-xl font-bold text-blue-600">LOGO</div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600 transition">About</Link>
            <Link to="/services" className="text-gray-600 hover:text-blue-600 transition">Services</Link>
            <Link to="/projects" className="text-gray-600 hover:text-blue-600 transition">Projects</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Links */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2 pb-4">
            <Link to="/" className="block text-gray-600 hover:text-blue-600 transition">Home</Link>
            <Link to="/about" className="block text-gray-600 hover:text-blue-600 transition">About</Link>
            <Link to="/services" className="block text-gray-600 hover:text-blue-600 transition">Services</Link>
            <Link to="/projects" className="block text-gray-600 hover:text-blue-600 transition">Portfolio</Link>
            <Link to="/contact" className="block text-gray-600 hover:text-blue-600 transition">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
