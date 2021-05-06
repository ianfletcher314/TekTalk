const { Comment } = require('../models');

const commentData = [
  {
    id: 1,
    comment_text: 'Test Title',
    post_id: 1,
  },
  {
    id: 2,
    comment_text: 'Test Title2',
    post_id: 2,
  },
  
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
