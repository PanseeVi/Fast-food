const { GET_DB } = require('../config/mongodb')
const { Schema } = require('mongoose')
const { ObjectId } = require('mongodb')
const collectionName = 'product'
const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String },
  imageUrl: { type: String },
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
  createdAt: { type: Date, default: Date.now },
})

const create = async (productData) => {
  return await GET_DB().collection(collectionName).insertOne(productData)
}

const get = async (productId) => {
  return await GET_DB()
    .collection(collectionName)
    .findOne({ _id: new ObjectId(productId) })
}

const getAll = async () => {
  return await GET_DB().collection(collectionName).find({}).toArray()
}

const update = async (productId, updates) => {
  return await GET_DB()
    .collection(collectionName)
    .updateOne({ _id: new ObjectId(productId) }, { $set: updates })
}

const destroy = async (productId) => {
  console.log(productId)
  return await GET_DB()
    .collection(collectionName)
    .deleteOne({ _id: new ObjectId(productId) })
}

export const Product = {
  collectionName,
  productSchema,
  create,
  get,
  getAll,
  update,
  destroy,
}

module.exports = { Product }
