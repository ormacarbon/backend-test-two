const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BeerSchema = new Schema({

  id: ObjectId,
  abv: Number,
  address: String,
  category: String,
  city: String,
  coordinates: [Number, Number],
  country: String,
  description: String,
  ibu: Number,
  name: String,
  state: String,
  website: String,
});

const BeerModel = mongoose.model('beers', BeerSchema);

module.exports = BeerModel;