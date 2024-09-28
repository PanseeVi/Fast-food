const { cartService } = require('../services/cartService')

const createCart = async (req, res) => {
  try {
    console.log(req.body)
    const { userId, items } = req.body

    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' })
    }
    const result = await cartService.createCart(userId, items)
    res.status(201).json(result)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getCart = async (req, res) => {
  try {
    const { userId } = req.params
    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' })
    }
    const cart = await cartService.getCart(userId)
    res.status(200).json(cart)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const updateCart = async (req, res) => {
  try {
    const { userId } = req.body

    const { items } = req.body
    console.log(items, userId)

    if (userId === null) {
      return res
        .status(400)
        .json({ error: 'User ID and cart data are required' })
    }
    const updatedCart = await cartService.updateCart(userId, { items })
    console.log('o controll ne')

    res.status(200).json(updatedCart)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const deleteCart = async (req, res) => {
  try {
    const { userId } = req.params
    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' })
    }
    const result = await cartService.deleteCart(userId)
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const cartController = {
  createCart,
  getCart,
  updateCart,
  deleteCart,
}
module.exports = { cartController }
