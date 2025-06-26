const express = require('express');
const router = express.Router();
const mathController = require('../controllers/mathematicsController');

router.post('/', mathController.createArticle);
router.get('/', mathController.getAllArticles);
router.put('/:id', mathController.updateArticle);
router.delete('/:id', mathController.deleteArticle);

module.exports = router;
