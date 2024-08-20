'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Recipes', 'ingredients', {
      type: Sequelize.TEXT,
      allowNull: false,
      defaultValue: '',
    });
    await queryInterface.addColumn('Recipes', 'steps', {
      type: Sequelize.TEXT,
      allowNull: false,
      defaultValue: '',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Recipes', 'ingredients');
    await queryInterface.removeColumn('Recipes', 'steps');
  }
};
