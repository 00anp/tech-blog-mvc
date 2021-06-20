const sequelize = require('../config/connection');
const seedPosts = require('./postData');
const seedArticles = require('./articleData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedPosts();

  await seedArticles();

  process.exit(0);
};

seedAll();
