import axios from 'axios';

const API_BASE_URL = 'https://fakestoreapi.com';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const fetchAllProducts = async () => {
  try {
    const response = await apiClient.get('/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
