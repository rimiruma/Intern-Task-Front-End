import { FiSearch } from 'react-icons/fi';

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <div className="bg-gray-100 text-gray-400 rounded-full p-5 mb-4">
        <FiSearch className="h-10 w-10" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">No Products Found</h3>
      <p className="text-gray-500 max-w-sm">
        We couldn't find anything matching your current search or filter criteria. Try adjusting them.
      </p>
    </div>
  );
};

export default EmptyState;
