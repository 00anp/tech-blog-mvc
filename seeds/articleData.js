const { Article } = require('../models');

const articleData = [
  {
    title: 'Article Test 1',
    post_id: 1,
    description:
      'Description test',
  },
  {
    title: 'Article Test 2',
    post_id: 2,
    description: 'Description test',
  },
  {
    title: 'Article Test 3',
    post_id: 3,
    description: 'Description test',
  },
  {
    title: 'Article Test 4',
    post_id: 4,
    description: 'Description test',
  },
];

const seedArticles = () => Article.bulkCreate(articleData);

module.exports = seedArticles;
