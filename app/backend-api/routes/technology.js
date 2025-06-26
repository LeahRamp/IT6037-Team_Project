const express = require('express');
const router = express.Router();
const techController = require('../controllers/technologyController');

router.post('/', techController.createArticle);
router.get('/', techController.getAllArticles);
router.put('/:id', techController.updateArticle);
router.delete('/:id', techController.deleteArticle);

module.exports = router;
