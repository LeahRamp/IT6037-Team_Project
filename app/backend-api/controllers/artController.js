const Art = require('../models/Art');

// Create
exports.createArticle = async (req, res) => {
  try {
    const art = new Art(req.body);
    await art.save();
    res.status(201).json(art);
  } catch (err) {
    console.error(err); // Log this to see details
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

// Read all
exports.getAllArticles = async (req, res) => {
  try {
    const articles = await Art.find();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch articles' });
  }
};

// Update
exports.updateArticle = async (req, res) => {
  try {
    const article = await Art.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(article);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update article' });
  }
};

// Delete
exports.deleteArticle = async (req, res) => {
  try {
    await Art.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete article' });
  }
};
