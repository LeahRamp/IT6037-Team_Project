const express = require('express');
const router = express.Router();
const Mathematics = require('../models/Mathematics');
 
// Create
router.post('/', async (req, res) => {
  try {
    const article = new Mathematics(req.body);
    await article.save();
    res.json(article);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create article' });
  }
});
 
// Read all
router.get('/', async (req, res) => {
  try {
    const articles = await Mathematics.find();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch articles' });
  }
});
 
// Update
router.put('/:id', async (req, res) => {
  try {
    const article = await Mathematics.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(article);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update article' });
  }
});
 
// Delete
router.delete('/:id', async (req, res) => {
  try {
    await Mathematics.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete article' });
  }
});
 
module.exports = router;