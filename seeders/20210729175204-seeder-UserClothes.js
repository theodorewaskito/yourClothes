'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserClothes', [
      {
        UserId: 1,
        ClothesId: 5,
        status: "pending",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 2,
        ClothesId: 2,
        status: "pending",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserClothes', null, {});
  }
};
