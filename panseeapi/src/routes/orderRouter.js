const express = require('express');
const router = express.Router();
const { orderController } = require('../controllers/orderController');

router.post('/', orderController.createOrder);

router.get('/:id', orderController.getOrder);

router.get('/user', orderController.getAllOrdersByUser);

router.put('/:id/status', orderController.updateOrderStatus);

const orderRoute = router;

module.exports = { orderRoute };
