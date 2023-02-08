const config = require('./db.json');

module.exports = {
    up(db, callback) {
      return db.collection('beers').insertMany(config, {$set: {blacklisted: true}}, callback);
    },
  
    down(db, _callback) {
      return db.dropDatabase();
    }
  };