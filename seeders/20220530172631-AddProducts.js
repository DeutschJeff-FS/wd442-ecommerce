"use strict";

const description = `Scamper cuddle no cuddle cuddle love scratch scratch friends are not food. Meow meow mama slap owner's face at 5am until human fills food dish snuggles up to shoulders or knees and purrs you to sleep sit as close as possible to warm fire without sitting on cold floor for if it smells like fish eat as much as you wish.`;

const [createdAt, updatedAt] = [new Date(), new Date()];

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return await queryInterface.bulkInsert("Products", [
      {
        id: 1,
        title: "Green Tea",
        slug: "green-tea",
        price: 15.25,
        is_published: true,
        description,
        createdAt,
        updatedAt,
      },
      {
        id: 2,
        title: "Herbal Tea",
        slug: "herbal-tea",
        price: 12.25,
        is_published: true,
        description,
        createdAt,
        updatedAt,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete("Products", null, {});
  },
};
