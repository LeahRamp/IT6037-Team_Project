const express = require('express');
const router = express.Router();
const Art = require('../models/Art');

// Create
router.post('/', async (req, res) => {
const article = new Art(req.body);
await article.save();
res.json(article);
});

// Read all
router.get('/', async (req, res) => {
const articles = await Art.find();
res.json(articles);
});

// Update
router.put('/:id', async (req, res) => {
const article = await Art.findByIdAndUpdate(req.params.id, req.body, { new: true });
res.json(article);
});

// Delete
router.delete('/:id', async (req, res) => {
await Art.findByIdAndDelete(req.params.id);
res.json({ message: 'Deleted successfully' });
});

module.exports = router;