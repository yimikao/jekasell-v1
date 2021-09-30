'use strict';
const bcrypt = require('bcryptjs')


module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Users', [{
      firstName: 'John',
      lastName: 'Doe',
      password: await bcrypt.hashSync('johndoe', 10),
      phone: '08140213567',
      email: 'johndoe@yahoo.com',
      createdAt: new Date(),
      updatedAt: new Date(),


      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        password: await bcrypt.hashSync('janedoe', 10),
        phone: '07040213567',
        email: 'janedoe@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date(),
  
        }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Users', null, {});
  }
};
