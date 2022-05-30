'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("livros", "autorId", {
      allowNull:false,
      type: Sequelize.INTEGER,
      references:{
        model: "autors",
        key: "id"
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("livros", "autorId");
  }
};
