'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.addColumn('hunters', 'bountyId', { type: Sequelize.DataTypes.INTEGER});
    //  * Example:
    //  * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
    //  */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
