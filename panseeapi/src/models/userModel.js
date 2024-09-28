import { OBJECT_ID_RULE_MESSAGE, OBJECT_ID_RULE } from '~/utils/validators'
const { ObjectId } = require('mongodb')
const { GET_DB } = require('../config/mongodb')
const mongoose = require('mongoose')
const Joi = require('joi')

const collectionName = 'user'
const userSchema = new mongoose.Schema({
  name: Joi.string().required(),
  email: Joi.string().email().required().lowercase(),
  password: Joi.string().required(),
  address: Joi.string(),
  phone: Joi.string(),
  role: Joi.string().default('user'),
  createdAt: Joi.date().default(Date.now),
  status: Joi.string().default('active'),
})

const getAllUSer = async () => {
  return await GET_DB().collection(collectionName).find({}).toArray()
}

const getUserById = async (id) => {
  return await GET_DB()
    .collection(collectionName)
    .findOne({ _id: new ObjectId(id) })
}

const updateUser = async (id, userData) => {
  return await GET_DB()
    .collection(collectionName)
    .updateOne({ _id: new ObjectId(id) }, { $set: userData })
}
const deleteUser = async (id, userData) => {
  return await GET_DB().collection(collectionName).deleteOne()
}

export const User = {
  collectionName,
  userSchema,
  getUserById,
  updateUser,
  getAllUSer,
}
