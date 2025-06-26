import axios from 'axios';

const API_URL = 'http://localhost:5000/api/products';

const getAllProducts = async () => {
  return await axios.get(API_URL);
};

const getProductById = async (id) => {
  return await axios.get(`${API_URL}/${id}`);
};

const createProduct = async (productData) => {
  return await axios.post(API_URL, productData);
};

const updateProduct = async (id, productData) => {
  return await axios.put(`${API_URL}/${id}`, productData);
};

const deleteProduct = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};

export default {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};