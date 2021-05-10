const router = require('express').Router();
const { Post, User, Comment } = require('../models');
// console.log("routerworking")
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
        // console.log(post)

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
          // console.log(comment)
    
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
// route to view individual post
router.get('/post/:id', async (req, res)=> {
  console.log(req.params.id, "id")
  try {
    const postsData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User, 
          attributes: ['username']
        },
        {
          model: Comment,
          attributes: ['comment_text']
        }
      ]
    });

    const post = postsData.get({ plain: true });

    res.render('PostMain', {
      ...post,
      // ...comment // logged_in: req.session.logged_in 
    })
  } catch (err) {
    res.status(500).json(err)
    console.log("big ooops")
  }
  console.log(postsData)
});
// route to view single comment
router.get('/comment/:id', async (req, res)=> {
  console.log(req.params.id, "id")
  try {
    const commentData = await Comment.findByPk(req.params.id, {
      // include: [
      //   {
      //     model: User, 
      //     attributes: ['username']
      //   },
      // ]
    });

    const comment = commentData.get({ plain: true });

    res.render('CommentMain', {
      ...comment,
      // ...comment // logged_in: req.session.logged_in 
    })
  } catch (err) {
    res.status(500).json(err)
    console.log("big ooops")
  }
  console.log(postsData)
});

router.get('/dashboard', (req,res) => {

  res.render('dashboard')
})
// route for submit new post button
router.post('/submit/post',async (req, res) => {
    console.log("in router.post")
    try {
      const dbUserData = await Post.create({
        post_title: req.body.title,
        post_text: req.body.text,
        user_id: req.body.user_id,
        
      });
      console.log(dbUserData,"this is dbUserData")

      if (dbUserData.ok) {
          document.location.replace('/')
      }
  
      // req.session.save(() => {
      //   req.session.loggedIn = true;
  
      //   res.status(200).json(dbUserData);
      // });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

// route for submit new comment button
// router.put('/submit/comment/:id', (req,res) => {

//   res.render('CommentMain', {
//     ...comment,
//     // ...comment // logged_in: req.session.logged_in 
//   })
// })

// routes to basic home pages
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
router.get('/logout', (req,res) => {

  res.render('logout')
})
router.get('/created', (req,res) => {

  res.render('created')
})

// route to create new user
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
