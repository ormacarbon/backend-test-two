import mongoose from 'mongoose';
//how there were many products in the db.json I choice to put as required only id and abv. 
//but I did the validation throw error for name, ibu and country properties because I think that should be the basic
//information to register a new product. 
const beerSchema = new mongoose.Schema({
  abv: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
  },
  category: {
    type: String,
  },
  city: {
    type: String,
  },
  coordinates: { type: [Number, Number] },
  country: {
    type: String,
  },
  description: {
    type: String,
  },
  ibu: {
    type: Number,
  },
  name: {
    type: String,
  },
  state: {
    type: String,
  },
  website: {
    type: String,
  },
});

export default module.exports = mongoose.model("BeerProduct", beerSchema);
