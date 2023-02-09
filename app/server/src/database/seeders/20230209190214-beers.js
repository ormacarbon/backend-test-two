let data = require('../../db.json');

data = data.map((beer) => {
  if (beer.coordinates) {
    return ({...beer, coordinates: beer.coordinates.toString()})
  }
  return beer
})

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'beers',
      data
      , {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('beers', null, {});
  },
};