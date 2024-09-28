import express from 'express'
import {
  registerUserController,
  loginUserController,
  getUserProfileController,
} from '../controllers/authController'
import authenticate from '../middlewares/authenticate'
const router = express.Router()

// Register
router.post('/register', registerUserController)

// Login
router.post('/login', loginUserController)

// Get profile (protected route)
router.get('/profile', authenticate, getUserProfileController)

const authRoutes = router
module.exports = { authRoutes }
