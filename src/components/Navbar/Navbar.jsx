import { useState } from 'react';
import { FiShoppingBag, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-[var(--color-border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center cursor-pointer group">
            <FiShoppingBag className="h-8 w-8 text-[var(--color-primary)] group-hover:scale-110 transition-transform duration-300" />
            <span className="ml-2 text-2xl font-bold text-[var(--color-text-dark)] tracking-tight">
              React<span className="text-[var(--color-primary)]">Store</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-gray-600 hover:text-[var(--color-primary)] font-medium transition-colors">Home</a>
            <a href="#" className="text-gray-600 hover:text-[var(--color-primary)] font-medium transition-colors">Products</a>
            <a href="#" className="text-gray-600 hover:text-[var(--color-primary)] font-medium transition-colors">About</a>
            <a href="#" className="text-gray-600 hover:text-[var(--color-primary)] font-medium transition-colors">Contact</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-[var(--color-primary)] focus:outline-none p-2"
            >
              {isMobileMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[var(--color-border-subtle)] absolute w-full shadow-lg pb-4">
          <div className="px-2 pt-2 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[var(--color-primary)] hover:bg-blue-50 transition-colors">Home</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[var(--color-primary)] hover:bg-blue-50 transition-colors">Products</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[var(--color-primary)] hover:bg-blue-50 transition-colors">About</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[var(--color-primary)] hover:bg-blue-50 transition-colors">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
