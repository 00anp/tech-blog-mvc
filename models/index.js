const User = require('./User');
const Post = require('./Post');
const Article = require('./Article');

Post.hasMany(Article, {
  foreignKey: 'post_id',
});

Article.belongsTo(Post, {
  foreignKey: 'post_id',
});

module.exports = { User, Post, Article };
