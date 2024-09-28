const { userService } = require('../services/userService')
const { cartService } = require('../services/cartService')
const { authenticate } = require('~/middlewares/authenticate')

const getUSer = async (req, res) => {
  try {
    const data = await userService.getAllUSer()
    res.status(200).json(data)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}
const updateUser = async (req, res) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body)
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

const deleteUser = async (req, res) => {
  try {
    await userService.deleteUser(req.params.id)
    res.status(200).json({ message: 'User deleted successfully' })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

const userController = {
  updateUser,
  deleteUser,
  getUSer,
}

module.exports = { userController }
