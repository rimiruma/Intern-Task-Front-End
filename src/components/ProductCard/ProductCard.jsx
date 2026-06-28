import { FaStar } from "react-icons/fa";

const ProductCard = ({ product, onViewDetails }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-56 bg-white">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain p-4 transition-transform duration-300 hover:scale-105"
        />

        <span className="absolute top-3 left-3 bg-gray-100 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3
          className="text-lg font-semibold text-gray-900 line-clamp-2 h-14"
          title={product.title}
        >
          {product.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center mt-2 mb-3">
          <FaStar className="text-yellow-400 text-sm" />
          <span className="ml-1 text-sm font-medium">
            {product.rating.rate}
          </span>
          <span className="ml-1 text-sm text-gray-500">
            ({product.rating.count})
          </span>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>

          <button
            onClick={() => onViewDetails(product)}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-600 cursor-pointer text-white font-semibold py-2.5 px-5 rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
