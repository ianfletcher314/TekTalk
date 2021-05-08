const router = require('express').Router();
const { Post, User, Comment } = require('../models');
console.log("routerworking")
router.get('/', async (req,res) => {
    try {
        const dbPostData = await Post.findAll({
          include: [
            {
              model: User,
              attributes: ['username'],
            },
          ],
        });
        
        const post = dbPostData.map((post) =>
        post.get({ plain: true }),
        );
        console.log(post)

        const dbCommentData = await Comment.findAll({
            include: [
              {
                model: Post,
                attributes: ['id'],
              },
            ],
          });
          
          const comment = dbCommentData.map((comment) =>
          comment.get({ plain: true }),
          );
          console.log(comment)
    
        res.render('home', {
             post,
             comment
        //   loggedIn: req.session.loggedIn,
        });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
})
// router.get('/post/:id')
router.get('/dashboard', (req,res) => {

  res.render('dashboard')
})
router.get('/comment', (req,res) => {

  res.render('comment')
})
router.get('/newpost', (req,res) => {

  res.render('newpost')
})
router.get('/home', (req,res) => {

  res.render('home')
})
router.get('/login', (req,res) => {

    res.render('login')
})
router.get('/signup', (req,res) => {

    res.render('signup')
})
router.get('/created', (req,res) => {

    res.render('created')
})

router.post('/create-user', async (req, res) => {
    console.log("in router.post")
    try {
      const dbUserData = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        
      });
      console.log(dbUserData)

      if (dbUserData.ok) {
          document.location.replace('/')
      }
  
      req.session.save(() => {
        req.session.loggedIn = true;
  
        res.status(200).json(dbUserData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});


module.exports = router;
