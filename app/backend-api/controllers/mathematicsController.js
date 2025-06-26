const Mathematics = require('../models/Mathematics');

//create
exports.createArticle = async (req, res) => {
  try {
    const article = new Mathematics(req.body);
    await article.save();
    res.json(article);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create article' });
  }
};

//read
exports.getAllArticles = async (req, res) => {
  try {
    const articles = await Mathematics.find();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch articles' });
  }
};

//update
exports.updateArticle = async (req, res) => {
  try {
    const article = await Mathematics.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(article);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update article' });
  }
};

//delete
exports.deleteArticle = async (req, res) => {
  try {
    await Mathematics.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete article' });
  }
};
