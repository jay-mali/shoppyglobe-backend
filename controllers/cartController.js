const Cart = require('../models/Cart');
const Product = require('../models/Product');

// POST /cart – Add product to cart
const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  const userId = req.user;

  try {
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({
        userId,
        items: [{ productId, quantity }]
      });
    } else {
      const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);

      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity;
      } else {
        cart.items.push({ productId, quantity });
      }
    }

    await cart.save();
    res.status(200).json(cart);

  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

// PUT /cart/:productId – Update quantity
const updateCartItem = async (req, res) => {
  const { productId } = req.params;
  const { quantity } = req.body;
  const userId = req.user;

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    const item = cart.items.find(item => item.productId.toString() === productId);
    if (!item) return res.status(404).json({ message: 'Item not in cart' });

    item.quantity = quantity;
    await cart.save();

    res.status(200).json(cart);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

// DELETE /cart/:productId – Remove product from cart
const removeFromCart = async (req, res) => {
  const { productId } = req.params;
  const userId = req.user;

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    cart.items = cart.items.filter(item => item.productId.toString() !== productId);
    await cart.save();

    res.status(200).json(cart);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

module.exports = { addToCart, updateCartItem, removeFromCart };
