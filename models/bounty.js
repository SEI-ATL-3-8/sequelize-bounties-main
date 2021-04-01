'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bounty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     // models.bounty.belongsTo(models.hunter)
      models.bounty.hasMany(models.hunter)
    }
  };
  bounty.init({
    name: DataTypes.STRING,
    wantedFor: DataTypes.STRING,
    reward: DataTypes.INTEGER,
    captured: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'bounty',
  });
  return bounty;
};