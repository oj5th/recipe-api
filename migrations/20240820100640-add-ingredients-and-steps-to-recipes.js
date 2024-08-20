'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Recipes', 'ingredients', {
      type: Sequelize.TEXT,
      allowNull: true,
    });
    await queryInterface.addColumn('Recipes', 'steps', {
      type: Sequelize.TEXT,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Recipes', 'ingredients');
    await queryInterface.removeColumn('Recipes', 'steps');
  }
};
