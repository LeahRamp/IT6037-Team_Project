const express = require('express');
const router = express.Router();
const Technology = require('../models/Technology');

// Create
router.post('/', async (req, res) => {
  try {
    const article = new Technology(req.body);
    await article.save();
    res.json(article);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create article' });
  }
});

// Read all
router.get('/', async (req, res) => {
  try {
    const articles = await Technology.find();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch articles' });
  }
});

// Update
router.put('/:id', async (req, res) => {
  try {
    const article = await Technology.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(article);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update article' });
  }
});

// Delete
router.delete('/:id', async (req, res) => {
  try {
    await Technology.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete article' });
  }
});

module.exports = router;
