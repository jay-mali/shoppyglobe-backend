const express = require('express');
const { addToCart, updateCartItem, removeFromCart } = require('../controllers/cartController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// All cart routes are protected
router.post('/', authMiddleware, addToCart);
router.put('/:productId', authMiddleware, updateCartItem);
router.delete('/:productId', authMiddleware, removeFromCart);

module.exports = router;
