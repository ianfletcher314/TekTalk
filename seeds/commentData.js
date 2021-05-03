const { Comment } = require('../models');

const commentData = [
  {
    id: 1,
    comment_title: 'Test Title',
    post_id: 1,
  },
  
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
