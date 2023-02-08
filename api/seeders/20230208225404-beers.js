'use strict';
const { Beer } = require('../models');
const beers = require('../../db.json');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    for (let beer of beers) {
      await Beer.create(beer);
    }
  },

  async down (queryInterface, Sequelize) {
    await Beer.destroy({ where: {} });
  }
};
