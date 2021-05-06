const router = require('express').Router();
const { Post, User, Comment } = require('../models');
// check 19 ins_middleware for get querries like this!!

// GET all posts for homepage
// router.get('/', async (req, res) => {
//   try {
//     const dbPostData = await Post.findAll({
//       include: [
//         {
//           model: Post,
//           attributes: ['id','post_title', 'post_text','user_id','created_at','updated_at'],
//         },
//       ],
//     });

//     const posts = dbPostData.map((post) =>
//       post.get({ plain: true })
//     );

//     res.render('home', {
//       posts,
//     //   loggedIn: req.session.loggedIn,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });
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
    
        res.render('home', {
             post
        //   loggedIn: req.session.loggedIn,
        });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
})
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


module.exports = router;
