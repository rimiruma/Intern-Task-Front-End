import { useState, useMemo } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import SearchBar from '../components/SearchBar/SearchBar';
import CategoryFilter from '../components/CategoryFilter/CategoryFilter';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import ProductModal from '../components/ProductModal/ProductModal';
import Loader from '../components/Loader/Loader';
import Footer from '../components/Footer/Footer';
import ErrorState from '../components/ErrorState/ErrorState';
import EmptyState from '../components/EmptyState/EmptyState';

import { useProducts } from '../hooks/useProducts';
import { filterProducts } from '../utils/filterProducts';

const Home = () => {
  const { products, isLoading, hasError, retry } = useProducts();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Extract unique categories from products
  const categories = useMemo(() => {
    if (!products) return [];
    const uniqueCategories = new Set(products.map(p => p.category));
    return Array.from(uniqueCategories);
  }, [products]);

  // Apply filters to get displayed products
  const displayedProducts = useMemo(() => {
    return filterProducts(products, searchQuery, selectedCategory);
  }, [products, searchQuery, selectedCategory]);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  // Determine if empty state should be shown
  const isEmpty = !isLoading && !hasError && products.length > 0 && displayedProducts.length === 0;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          
          {/* Controls Section */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <CategoryFilter 
              categories={categories}
              value={selectedCategory} 
              onChange={setSelectedCategory} 
            />
          </div>
          
          {/* Main Content Area */}
          <div className="min-h-[400px]">
            {isLoading ? (
              <Loader />
            ) : hasError ? (
              <ErrorState onRetry={retry} />
            ) : isEmpty ? (
              <EmptyState />
            ) : (
              <ProductGrid 
                products={displayedProducts} 
                onViewDetails={openModal} 
              />
            )}
          </div>
          
        </div>
      </main>
      <Footer />

      {/* Modal Overlay */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
};

export default Home;
