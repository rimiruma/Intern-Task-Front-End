import { FiAlertCircle, FiRefreshCw } from 'react-icons/fi';

const ErrorState = ({ onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <div className="bg-red-50 text-red-500 rounded-full p-4 mb-4">
        <FiAlertCircle className="h-12 w-12" />
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h3>
      <p className="text-gray-500 mb-8 max-w-md">
        We couldn't load the products at this time. Please check your internet connection and try again.
      </p>
      <button 
        onClick={onRetry}
        className="flex items-center space-x-2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900 font-semibold py-2.5 px-6 rounded-lg shadow-sm transition-all duration-200"
      >
        <FiRefreshCw className="h-5 w-5" />
        <span>Retry</span>
      </button>
    </div>
  );
};

export default ErrorState;
