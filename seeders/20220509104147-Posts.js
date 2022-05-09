"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */

    const date = new Date();

    await queryInterface.bulkInsert("Posts", [
      {
        id: 1,
        userId: 1,
        content: "Premier Post de Admin",
        /* imageURL: null, */
        createdAt: date,
        updatedAt: date,
      },
      {
        id: 2,
        userId: 2,
        content: "Premier Post de test1",
        /* imageURL: null, */
        createdAt: date,
        updatedAt: date,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete("Posts", null);
  },
};
