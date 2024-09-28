import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import userModel from '../models/User.model'

const JWT_SECRET = process.env.JWT_SECRET

export const registerUser = async (userData) => {
  try {
    const { password } = userData
    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await userModel.createUser({
      ...userData,
      password: hashedPassword,
    })

    return user
  } catch (error) {
    throw new Error(`Đăng ký người dùng thất bại: ${error.message}`)
  }
}

export const authenticateUser = async (email, password) => {
  const user = await userModel.findUserByEmail(email)
  if (!user) {
    throw new Error('Invalid email or password')
  }

  const isPasswordValid = await bcrypt.compare(password, user.password)
  if (!isPasswordValid) {
    throw new Error('Invalid email or password')
  }

  const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, {
    expiresIn: '1h',
  })
  return { user, token }
}

export const getUserProfile = async (userId) => {
  return await userModel.findUserById(userId)
}
