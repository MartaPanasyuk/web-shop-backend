"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "reviews",
      [
        {
          name: "Leo Messi",
          description: "nice backpack",
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dan Abramov",
          description: "I like it!",
          productId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pickachu",
          description:
            "I'm not sure, too expensive and quality is not so goog as I expect",
          productId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bulbasaur",
          description: "the quality is horrible, I need my money back",
          productId: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("reviews", null, {});
  },
};
