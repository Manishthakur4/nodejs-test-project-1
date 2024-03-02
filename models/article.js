const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Comment = require('./comment');

const Article = sequelize.define('Article', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

// Establish the association
Article.hasMany(Comment, {
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

module.exports = Article;
