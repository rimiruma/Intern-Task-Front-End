import { FaReact } from 'react-icons/fa';
import { SiVite } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-[var(--color-border-subtle)] py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <p className="text-gray-600 font-medium mb-3">
          &copy; 2026 ReactStore. All rights reserved.
        </p>
        <div className="flex items-center text-gray-500 text-sm space-x-2">
          <span>Built with</span>
          <span className="flex items-center text-[#61DAFB] font-semibold"><FaReact className="mr-1" /> React</span>
          <span>+</span>
          <span className="flex items-center text-[#646CFF] font-semibold"><SiVite className="mr-1" /> Vite</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
