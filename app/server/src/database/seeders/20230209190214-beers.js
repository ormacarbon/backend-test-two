let data = require('../../db.json');
const { 
  v1: uuidv1,
} = require('uuid');

data = data.map((beer) => {
  if (beer.coordinates) {
    return ({id: uuidv1(), ...beer, coordinates: beer.coordinates.toString()})
  }
  return {id: uuidv1(), ...beer}
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