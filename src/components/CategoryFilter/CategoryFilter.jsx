import { FiFilter, FiChevronDown } from 'react-icons/fi';

const CategoryFilter = () => {
  return (
    <div className="relative w-full md:w-64">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <FiFilter className="h-4 w-4 text-gray-500" />
      </div>
      <select
        className="block w-full pl-10 pr-10 py-2.5 text-base border border-[var(--color-border-subtle)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] sm:text-sm bg-white appearance-none cursor-pointer shadow-sm hover:shadow transition-all duration-300"
        defaultValue=""
      >
        <option value="" disabled hidden>Filter by Category</option>
        <option value="all">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
        <FiChevronDown className="h-4 w-4 text-gray-500" />
      </div>
    </div>
  );
};

export default CategoryFilter;
