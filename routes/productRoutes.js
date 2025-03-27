const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const { getAllProducts, getProductById } = require('../controllers/productController');

// Public route: Get all products
router.get('/', getAllProducts);

// Public route: Get product by ID
router.get('/:id', getProductById);

// TEMP route: Insert 3 sample products into MongoDB
router.post('/add-sample', async (req, res) => {
  try {
    const products = [
      {
        name: 'Basic White T-Shirt',
        price: 15.99,
        description: 'Soft cotton T-shirt in white',
        stock: 50
      },
      {
        name: 'Blue Denim Jeans',
        price: 45.00,
        description: 'Regular fit, mid-rise jeans',
        stock: 30
      },
      {
        name: 'Wireless Headphones',
        price: 89.99,
        description: 'Bluetooth over-ear headphones with mic',
        stock: 20
      }
    ];

    const inserted = await Product.insertMany(products);
    res.status(201).json({ message: '3 sample products added', products: inserted });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
