const express = require('express');
const router = express.Router();
const artController = require('../controllers/artController');

router.post('/', artController.createArticle);
router.get('/', artController.getAllArticles);
router.put('/:id', artController.updateArticle);
router.delete('/:id', artController.deleteArticle);

module.exports = router;
