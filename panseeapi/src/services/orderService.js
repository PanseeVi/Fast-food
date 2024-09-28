const Order = require('../models/orderModel');
const Product = require('../models/productModel');

const createOrder = async (userId, orderData) => {
  const { products } = orderData;

  // Check product availability
  for (const item of products) {
    const product = await Product.findById(item.product);
    if (!product || product.quantity < item.quantity) {
      throw new Error(`Product ${product.name} is out of stock`);
    }
  }

  // Create order
  const order = new Order({ user: userId, ...orderData });
  await order.save();

  // Update product quantities
  for (const item of products) {
    await Product.findByIdAndUpdate(item.product, {
      $inc: { quantity: -item.quantity },
    });
  }

  return order;
};

const getOrderById = async (orderId) => {
  const order = await Order.findById(orderId)
    .populate('user')
    .populate('products.product');
  if (!order) {
    throw new Error('Order not found');
  }
  return order;
};

const getAllOrdersByUser = async (userId) => {
  return await Order.find({ user: userId }).populate('products.product');
};

const updateOrderStatus = async (orderId, status) => {
  const order = await Order.findByIdAndUpdate(
    orderId,
    { status },
    { new: true }
  );
  if (!order) {
    throw new Error('Order not found');
  }
  return order;
};

const orderService = {
  createOrder,
  getOrderById,
  getAllOrdersByUser,
  updateOrderStatus,
};

module.exports = { orderService };
