const { Post } = require('../models');

const postData = [
  {
    name: 'postTest1',
  },
  {
    name: 'postTest2',
  },
  {
    name: 'postTest3',
  },
  {
    name: 'postTest4',
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
