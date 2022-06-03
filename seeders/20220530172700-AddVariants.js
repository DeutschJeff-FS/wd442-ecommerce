"use strict";

const description = `Stare at guinea pigs run around the house at 4 in the morning. Is good you understand your place in my world find something else more interesting, for munch, munch, chomp, chomp but hopped up on catnip. You call this cat food sleep nap please stop looking at your phone and pet me for lick butt mew.`;

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
    return await queryInterface.bulkInsert("Variants", [
      {
        id: 1,
        title: "Sencha Leaf",
        slug: "sencha",
        description,
        price: 15.25,
        productId: 1,
        inventory: 9,
        createdAt,
        updatedAt,
      },
      {
        id: 2,
        title: "Matcha Powder",
        slug: "matcha",
        description,
        price: 18.25,
        productId: 1,
        inventory: 5,
        createdAt,
        updatedAt,
      },
      {
        id: 3,
        title: "Peppermint Tea",
        slug: "peppermint",
        description,
        price: 12.25,
        productId: 2,
        inventory: 7,
        createdAt,
        updatedAt,
      },
      {
        id: 4,
        title: "Rooibos Tea",
        slug: "rooibos",
        description,
        price: 13.25,
        productId: 2,
        inventory: 4,
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
    return await queryInterface.bulkDelete("Variants", null, {});
  },
};
