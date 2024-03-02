const Comment = require('../models/comment');
const Article = require('../models/article');

// Create comment
exports.createComment = async (req, res) => {
  const { articleId } = req.params;

  try {
    const article = await Article.findByPk(articleId);

    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }

    const comment = await Comment.create({
      text: req.body.text,
      ArticleId: article.id,
    });

    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete comment
exports.deleteComment = async (req, res) => {
  const { commentId } = req.params;

  try {
    const comment = await Comment.findByPk(commentId);

    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }

    await comment.destroy();
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
