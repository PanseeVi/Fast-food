const { Product } = require('../models/productModel');

const createProduct = async (productData) => {
  return await Product.create(productData);
};

const getProductById = async (productId) => {
  const result = await Product.get(productId);
  if (!result) {
    throw new Error('Product not found');
  }
  return result;
};

const getAllProducts = async () => {
  return await Product.getAll();
};

const updateProduct = async (productId, updates) => {
  const result = await Product.update(productId, updates);
  if (!result) {
    throw new Error('Product not found');
  }
  return result;
};

const deleteProduct = async (productId) => {
  const result = await Product.destroy(productId);
  if (!result) {
    throw new Error('Product not found');
  }
  return result;
};
const productService = {
  createProduct,
  getProductById,
  getAllProducts,
  updateProduct,
  deleteProduct,
};

module.exports = { productService };
