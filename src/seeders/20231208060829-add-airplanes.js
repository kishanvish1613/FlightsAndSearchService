'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airplanes', [
      {
        ModelNumber: 'Boeing 737',
        capacity: 300,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ModelNumber: 'Airbus A320',
        capacity: 350,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ModelNumber: 'Boeing 777',
        capacity: 400,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ModelNumber: 'Boeing 747',
        capacity: 320,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ModelNumber: 'Airbus A330',
        capacity: 150,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
