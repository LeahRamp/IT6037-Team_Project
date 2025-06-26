const Art = require('../models/Art');

// Create
exports.createArticle = async (req, res) => {
  try {
    const article = new Art(req.body);
    await article.save();
    res.json(article);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create article' });
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
