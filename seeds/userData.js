const { User } = require('../models');

const userData = [
  {
    id: 1,
    username: 'ianfletcher314',
    email: 'ianfletcher314@gmail.com',
    password: 'test',
  },
  
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
