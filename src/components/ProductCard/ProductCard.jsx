import { FaStar } from 'react-icons/fa';

const ProductCard = ({ product, onViewDetails }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full border border-[var(--color-border-subtle)] transform hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative pt-[100%] bg-white p-4">
        <img 
          src={product.image} 
          alt={product.title} 
          className="absolute inset-0 w-full h-full object-contain p-6 hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-4 left-4 bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
          {product.category}
        </span>
      </div>

      {/* Content Container */}
      <div className="p-5 flex flex-col flex-grow border-t border-[var(--color-border-subtle)]">
        <h3 className="text-lg font-semibold text-[var(--color-text-dark)] line-clamp-2 mb-2" title={product.title}>
          {product.title}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center mb-4 space-x-1">
          <FaStar className="text-yellow-400 h-4 w-4" />
          <span className="text-sm font-medium text-gray-700 ml-1">{product.rating.rate}</span>
          <span className="text-sm text-gray-400">({product.rating.count} reviews)</span>
        </div>

        {/* Spacer to push price and button to bottom */}
        <div className="flex-grow"></div>
        
        {/* Price and Button */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold text-[var(--color-text-dark)]">
            ${product.price.toFixed(2)}
          </span>
          <button 
            onClick={() => onViewDetails(product)}
            className="bg-[var(--color-primary)] hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 shadow-sm"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
