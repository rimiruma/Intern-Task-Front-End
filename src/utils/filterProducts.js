export const filterProducts = (products, searchQuery, selectedCategory) => {
  if (!products) return [];

  return products.filter((product) => {
    // Search match (case-insensitive)
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Category match
    const matchesCategory = selectedCategory === 'all' || selectedCategory === '' || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });
};
