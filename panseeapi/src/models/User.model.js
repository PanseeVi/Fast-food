import { ObjectId } from 'mongodb'
import { GET_DB } from '../config/mongodb'
import mongoose from 'mongoose'
import Joi from 'joi'
import { cartService } from '~/services/cartService'

const collectionName = 'user'
const userSchema = new mongoose.Schema({
  name: Joi.string().required(),
  email: Joi.string().email().required().lowercase(),
  password: Joi.string().required(),
  address: Joi.string(),
  phone: Joi.number(),
  role: Joi.string().default('user'),
  createdAt: Joi.date().default(Date.now),
  status: Joi.string().default('active'),
})

const createUser = async (userData) => {
  const db = GET_DB()
  const { email } = userData

  const existingUser = await db.collection(collectionName).findOne({ email })
  if (existingUser) {
    throw new Error('User already exists')
  }

  const result = await db.collection(collectionName).insertOne(userData)
  await cartService.createCart(result.insertedId)

  return result[0]
}

const findUserByEmail = async (email) => {
  const db = GET_DB()
  return await db.collection(collectionName).findOne({ email })
}

const findUserById = async (userId) => {
  const db = GET_DB()
  return await db
    .collection(collectionName)
    .findOne({ _id: new ObjectId(userId) })
}

const userModel = { createUser, findUserByEmail, findUserById }
module.exports = userModel
