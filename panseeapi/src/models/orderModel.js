const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { GET_DB } = require('../config/mongodb')

const collectionName = 'order'

const orderSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  products: [
    {
      product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
      quantity: { type: Number, required: true },
    },
  ],
  totalAmount: { type: Number, required: true },
  status: {
    type: String,
    enum: ['pending', 'shipped', 'delivered', 'cancelled'],
    default: 'pending',
  },
  createdAt: { type: Date, default: Date.now },
})

const createNewOrder = async (orderData) => {
  return await GET_DB().collection(collectionName).insertOne(orderData)
}

const getOrderById = async (id) => {
  return await GET_DB().collection(collectionName).findOne({ _id: id })
}

const updateOrder = async (id, orderData) => {
  return await GET_DB()
    .collection(collectionName)
    .updateOne({ _id: id }, orderData)
}

const deleteOrder = async (id) => {
  return await GET_DB().collection(collectionName).deleteOne({ _id: id })
}

const orderModel = {
  createNewOrder,
  getOrderById,
  updateOrder,
  deleteOrder,
}

module.exports = { orderModel }
