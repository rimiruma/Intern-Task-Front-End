import { useEffect } from 'react';
import { FiX } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';

const ProductModal = ({ product, onClose }) => {
  // Prevent scrolling when modal is open and handle Escape key
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row transform transition-all animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white p-2 rounded-full shadow-md text-gray-500 hover:text-red-500 hover:bg-red-50 transition-colors"
        >
          <FiX className="h-6 w-6" />
        </button>

        {/* Image Section */}
        <div className="w-full md:w-1/2 bg-white p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-[var(--color-border-subtle)] min-h-[300px]">
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-full object-contain max-h-[400px]"
          />
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col">
          <div className="uppercase tracking-wide text-sm text-[var(--color-primary)] font-bold mb-2">
            {product.category}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-dark)] mb-4">
            {product.title}
          </h2>
          
          <div className="flex items-center mb-6 space-x-2">
            <div className="flex text-yellow-400">
              <FaStar className="h-5 w-5" />
            </div>
            <span className="font-bold text-gray-700">{product.rating.rate}</span>
            <span className="text-gray-500">({product.rating.count} reviews)</span>
          </div>

          <div className="text-3xl font-extrabold text-[var(--color-text-dark)] mb-6">
            ${product.price.toFixed(2)}
          </div>

          <div className="prose prose-sm sm:prose-base text-gray-600 mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
            <p className="leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="mt-auto pt-6 border-t border-[var(--color-border-subtle)] flex gap-4">
            <button className="flex-1 bg-[var(--color-primary)] hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
