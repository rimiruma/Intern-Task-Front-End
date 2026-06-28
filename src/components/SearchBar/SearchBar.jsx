import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
  return (
    <div className="relative w-full md:w-96">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <FiSearch className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        className="block w-full pl-10 pr-3 py-2.5 border border-[var(--color-border-subtle)] rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] sm:text-sm transition-all duration-300 shadow-sm hover:shadow"
        placeholder="Search for products..."
      />
    </div>
  );
};

export default SearchBar;
