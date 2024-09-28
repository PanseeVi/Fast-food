const mongoose = require('mongoose')
const { ObjectId } = require('mongodb')
const { GET_DB } = require('../config/mongodb')

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId },
    },
  ],
  totalPrice: {
    type: Number,
    required: true,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const Cart = mongoose.model('Cart', cartSchema)

const create = async (cartData) => {
  return await GET_DB().collection('carts').insertOne(cartData)
}

const get = async (userId) => {
  return await GET_DB()
    .collection('carts')
    .findOne({ userId: new ObjectId(userId) })
}

const update = async (userId, cartData) => {
  const existingCart = await GET_DB()
    .collection('carts')
    .findOne({ userId: new ObjectId(userId) })

  if (!existingCart) {
    return await create({ userId: new ObjectId(userId), ...cartData })
  }

  return await GET_DB()
    .collection('carts')
    .updateOne(
      { userId: new ObjectId(userId) },
      {
        $push: {
          items: { productId: cartData.items },
        },
      }
    )
}

const destroy = async (userId) => {
  return await GET_DB()
    .collection('carts')
    .deleteOne({ userId: new ObjectId(userId) })
}

const cartModel = {
  create,
  get,
  update,
  destroy,
}

module.exports = { cartModel }
