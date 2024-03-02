const express = require('express');
const router = express.Router();
const Article = require('../models/article');
const Comment = require('../models/comment');

router.post('/', async (req, res) => {
  try {
    const article = await Article.create(req.body);
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



module.exports = router;
