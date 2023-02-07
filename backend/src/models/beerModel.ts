import mongoose from "mongoose";

const beerSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
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
  coordinates:{ type: [Number, Number]},
  country: {
    type: String,
  },
  description: {
    type: String,
  },
  ibu: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  state: {
    type: String,
  },
  website: {
    type: String,
  },
});

export default module.exports = mongoose.model("Beer", beerSchema);
