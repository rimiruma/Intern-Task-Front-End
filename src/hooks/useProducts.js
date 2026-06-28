import { useState, useEffect, useCallback } from 'react';
import { fetchAllProducts } from '../services/productApi';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const loadProducts = useCallback(async () => {
    setIsLoading(true);
    setHasError(false);
    
    try {
      const data = await fetchAllProducts();
      setProducts(data);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return {
    products,
    isLoading,
    hasError,
    retry: loadProducts
  };
};
