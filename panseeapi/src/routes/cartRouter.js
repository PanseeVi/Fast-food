const express = require('express')
const router = express.Router()
const { cartController } = require('../controllers/cartController')

router.post('/', cartController.createCart)

router
  .route('/:userId')
  .get(cartController.getCart)
  .put(cartController.updateCart)
  .delete(cartController.deleteCart)

const cartRoute = router

module.exports = { cartRoute }
