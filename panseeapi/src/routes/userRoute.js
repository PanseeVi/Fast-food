const express = require('express');
const router = express.Router();
const { userController } = require('../controllers/userController');

router.route('/').get(userController.getUSer);
router
  .route('/profile/:id')
  .put(userController.updateUser)
  .delete(userController.deleteUser);

const userRoute = router;

module.exports = { userRoute };
