const { Post } = require('../models');

const postData = [
  {
    id: 1,
    post_title: 'Test Title',
    post_text: 'text text test test',
    user_id: 1,
  },
  
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
