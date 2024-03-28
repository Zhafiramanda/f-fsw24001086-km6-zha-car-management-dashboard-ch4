'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Cars', [
      {
        id: 1,
        name: "Toyota Camry",
        image: "toyota_camry.jpg",
        price: 25000.00,
        size: "Large",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: "Honda Civic",
        image: "honda_civic.jpg",
        price: 22000.00,
        size: "Medium",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: "Ford Mustang",
        image: "ford_mustang.jpg",
        price: 35000.00,
        size: "Large",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Cars', null, {});
  }
};
