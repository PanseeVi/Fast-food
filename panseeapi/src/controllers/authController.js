import {
  registerUser,
  authenticateUser,
  getUserProfile,
} from '../services/authService'

export const registerUserController = async (req, res) => {
  try {
    const user = await registerUser(req.body)
    res
      .status(201)
      .json({ success: true, message: 'User registered successfully', user })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export const loginUserController = async (req, res) => {
  try {
    const { email, password } = req.body
    const { user, token } = await authenticateUser(email, password)
    res.status(200).json({ message: 'Login successful', user, token })
  } catch (error) {
    res.status(401).json({ message: error.message })
  }
}

export const getUserProfileController = async (req, res) => {
  try {
    const user = await getUserProfile(req.user.id)
    res.status(200).json(user)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}
