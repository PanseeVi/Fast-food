const { orderService } = require('../services/orderService');

const createOrder = async (req, res) => {
  try {
    const order = await orderService.createOrder(req.user.id, req.body);
    res.status(201).json({ message: 'Order created successfully', order });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getOrder = async (req, res) => {
  try {
    const order = await orderService.getOrderById(req.params.id);
    res.status(200).json(order);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getAllOrdersByUser = async (req, res) => {
  try {
    const orders = await orderService.getAllOrdersByUser(req.user.id);
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    const order = await orderService.updateOrderStatus(
      req.params.id,
      req.body.status
    );
    res
      .status(200)
      .json({ message: 'Order status updated successfully', order });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const orderController = {
  createOrder,
  getOrder,
  getAllOrdersByUser,
  updateOrderStatus,
};

module.exports = { orderController };
