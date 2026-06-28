
const Loader = () => {
  // Create an array of 8 empty items to show 8 skeletons
  const skeletons = Array(8).fill(0);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {skeletons.map((_, index) => (
        <div key={index} className="bg-white rounded-2xl p-4 shadow-sm border border-[var(--color-border-subtle)] animate-pulse flex flex-col h-full">
          {/* Image Skeleton */}
          <div className="w-full aspect-square bg-gray-200 rounded-xl mb-4"></div>
          
          {/* Title Skeleton */}
          <div className="h-5 bg-gray-200 rounded-md w-3/4 mb-2"></div>
          <div className="h-5 bg-gray-200 rounded-md w-1/2 mb-4"></div>
          
          {/* Rating Skeleton */}
          <div className="flex items-center space-x-2 mb-6">
            <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
            <div className="h-4 bg-gray-200 rounded-md w-12"></div>
          </div>
          
          <div className="flex-grow"></div>

          {/* Price and Button Skeleton */}
          <div className="flex justify-between items-center mt-auto pt-4 border-t border-[var(--color-border-subtle)]">
            <div className="h-8 bg-gray-200 rounded-md w-16"></div>
            <div className="h-10 bg-gray-200 rounded-lg w-28"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loader;
