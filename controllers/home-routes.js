const router = require('express').Router();
const { Post, Article } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all  for homepage
router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      include: [
        {
          model: Article,
          attributes: ['title', 'description'],
        },
      ],
    });

    const posts = dbPostData.map((post) =>
      post.get({ plain: true })
    );

    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one post
// Use the custom middleware before allowing the user to access the post
router.get('/post/:id', withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: Article,
          attributes: [
            'id',
            'title',
            'description',
          ],
        },
      ],
    });

    const post = dbPostData.get({ plain: true });
    res.render('post', { post, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one article
// Use the custom middleware before allowing the user to access the article
router.get('/article/:id', withAuth, async (req, res) => {
  try {
    const dbArticleData = await Article.findByPk(req.params.id);

    const article = dbArticleData.get({ plain: true });

    res.render('article', { article, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
