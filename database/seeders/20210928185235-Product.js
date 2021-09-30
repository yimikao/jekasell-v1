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
    await queryInterface.bulkInsert('Products', [{
      name: 'iPhoneX',
      description: 'The new ultra-hd phone',
      price: 3000,
      quantity: 10,
      categoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        name: 'iPhone5s',
        description: 'The old ultra-hd phone',
        price: 500,
        quantity: 1,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: 'Yeezy Boost',
        description: 'Get yees latest release',
        price: 300,
        quantity: 10,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
          name: 'Nike Air Force 1',
          description: 'The new snow-white shoes',
          price: 380,
          quantity: 5,
          categoryId: 2,
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
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Products', null, {});
  }
};
