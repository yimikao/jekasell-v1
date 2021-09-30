'use strict';

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
     await queryInterface.bulkInsert('OrderProducts', [{
          orderId: 1,
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
       },
       {
        orderId: 1,
        productId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
     },
     {
      orderId: 2,
      productId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
   }
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
     await queryInterface.bulkDelete('OrderProducts', null, {});
  }
};
