const express = require('express');
const db = require('../db');
const router = express.Router();

// Get menu
router.get('/', (req, res) => {
  db.query('SELECT * FROM menu', (err, result) => {
    res.json(result);
  });
});

// Add menu
router.post('/', (req, res) => {
  const { name, price } = req.body;
  db.query(
    'INSERT INTO menu (name, price) VALUES (?, ?)',
    [name, price],
    () => res.json({ message: 'Menu added' })
  );
});

module.exports = router;