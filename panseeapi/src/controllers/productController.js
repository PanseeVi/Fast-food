const { productService } = require('../services/productService');

const createProduct = async (req, res) => {
  try {
    console.log(req.body);
    const product = await productService.createProduct(req.body);
    res.status(201).json({ message: 'Product created successfully', product });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const product = await productService.getProductById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await productService.updateProduct(req.params.id, req.body);
    res.status(200).json({ message: 'Product updated successfully', product });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await productService.deleteProduct(req.params.id);
    res.status(200).json({ message: 'Product deleted successfully', product });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const productController = {
  createProduct,
  getProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
};
