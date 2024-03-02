const express = require('express');
const router = express.Router();
const Article = require('../models/article');
const Comment = require('../models/comment');

// Get all articles with their comments
router.get('/', async (req, res) => {
  try {
    const articles = await Article.findAll({ include: Comment });
    res.render('index', { articles });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
