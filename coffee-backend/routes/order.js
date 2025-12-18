const express = require('express');
const db = require('../db');
const router = express.Router();

// Create order
router.post('/', (req, res) => {
  const { total_price, status } = req.body;
  db.query(
    'INSERT INTO orders (total_price, status) VALUES (?, ?)',
    [total_price, status],
    () => res.json({ message: 'Order created' })
  );
});

// Get orders
router.get('/', (req, res) => {
  db.query('SELECT * FROM orders', (err, result) => {
    res.json(result);
  });
});

module.exports = router;