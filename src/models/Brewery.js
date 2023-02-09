const { Model, Sequelize } = require('sequelize');

export default class Brewery extends Model {
  static init(sequelize) {
    super.init({
      abv: {
        type: Sequelize.STRING,
        defaultValue: '',
      },

      address: {
        type: Sequelize.STRING,
        defaultValue: '',
      },

      category: {
        type: Sequelize.STRING,
        defaultValue: '',
      },

      city: {
        type: Sequelize.STRING,
        defaultValue: '',
      },

      coordinates0: {
        type: Sequelize.STRING,
        defaultValue: '',
      },

      coordinates1: {
        type: Sequelize.STRING,
        defaultValue: '',
      },

      country: {
        type: Sequelize.STRING,
        defaultValue: '',
      },

      description: {
        type: Sequelize.STRING,
        defaultValue: '',
      },

      ibu: {
        type: Sequelize.STRING,
        defaultValue: '',
      },

      name: {
        type: Sequelize.STRING,
        defaultValue: '',
      },

      state: {
        type: Sequelize.STRING,
        defaultValue: '',
      },

      website: {
        type: Sequelize.STRING,
        defaultValue: '',
      },

    }, {
      sequelize,
    });

    return this;
  }
}
