const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Create comment
router.post('/:articleId', commentController.createComment);

// Delete comment
router.get('/:commentId', commentController.deleteComment);

module.exports = router;
