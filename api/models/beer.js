'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Beer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Beer.init(
    {
      abv: DataTypes.DOUBLE,
      address: DataTypes.STRING,
      category: DataTypes.STRING,
      city: DataTypes.STRING,
      coordinates: {
        type: DataTypes.TEXT,
        get: function() {
          return JSON.parse(this.getDataValue('coordinates'));
        },
        set: function(val) {
          return this.setDataValue('coordinates', JSON.stringify(val));
        }
      },
      country: DataTypes.STRING,
      description: DataTypes.STRING,
      ibu: DataTypes.INTEGER,
      name: DataTypes.STRING,
      state: DataTypes.STRING,
      website: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Beer'
    }
  )
  return Beer
}
