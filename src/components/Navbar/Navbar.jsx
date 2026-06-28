import { useState } from "react";
import {
  FiShoppingBag,
  FiMenu,
  FiX,
  FiHome,
  FiGrid,
  FiInfo,
  FiPhone,
} from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", icon: <FiHome />, href: "#" },
    { name: "Products", icon: <FiGrid />, href: "#" },
    { name: "About", icon: <FiInfo />, href: "#" },
    { name: "Contact", icon: <FiPhone />, href: "#" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <FiShoppingBag className="text-white text-xl" />
            </div>

            <div>
              <h1 className="text-2xl font-extrabold tracking-wide">
                <span className="text-gray-900">Shop</span>
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Store
                </span>
              </h1>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative flex items-center gap-2 text-gray-700 font-medium hover:text-blue-600 transition"
              >
                {link.icon}
                {link.name}

                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-gray-700"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
              >
                {link.icon}
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;