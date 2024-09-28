const { body, validationResult } = require('express-validator');

const validateProduct = [
  body('name').notEmpty().withMessage('Product name is required'),
  body('description').notEmpty().withMessage('Product description is required'),
  body('price')
    .isFloat({ min: 0 })
    .withMessage('Price must be a positive number'),
  body('quantity')
    .isInt({ min: 0 })
    .withMessage('Quantity must be a non-negative integer'),
  body('category')
    .optional()
    .isString()
    .withMessage('Category must be a string'),
  body('imageUrl')
    .optional()
    .isURL()
    .withMessage('Invalid URL format for image'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateProduct };
