const { body, validationResult } = require('express-validator');

const validateOrder = [
  body('products').isArray().withMessage('Products must be an array'),
  body('products.*.product').isMongoId().withMessage('Invalid product ID'),
  body('products.*.quantity')
    .isInt({ min: 1 })
    .withMessage('Quantity must be a positive integer'),
  body('totalAmount')
    .isFloat({ min: 0 })
    .withMessage('Total amount must be a positive number'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateOrder };
