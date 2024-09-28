import { cartModel } from '../models/cartModel'

const createCart = async (userId) => {
  console.log('Creating cart for user:', userId)

  const newCart = {
    userId,
    items: [],
    totalPrice: 0,
  }

  const result = await cartModel.create(newCart)
  if (!result) {
    throw new Error('Failed to create cart')
  }

  console.log('Cart created successfully:', result)
  return result
}

const getCart = async (userId) => {
  const result = await cartModel.get(userId)
  if (!result) {
    throw new Error('Cart not found')
  }
  return result
}

const updateCart = async (userId, cartData) => {
  const result = await cartModel.update(userId, cartData)
  console.log('ddang o sv')

  if (!result) {
    throw new Error('Cart not found')
  }
  return result
}

const deleteCart = async (userId) => {
  const result = await cartModel.destroy(userId)
  if (result.deletedCount === 0) {
    throw new Error('Cart not found')
  }
  return { message: 'Cart deleted successfully' }
}

const cartService = { createCart, getCart, updateCart, deleteCart }
module.exports = { cartService }
