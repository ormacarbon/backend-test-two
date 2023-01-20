import { Schema, model } from "mongoose";

const ProductSchema: Schema = new Schema({
  id: String,
  abv: Number,
  category: String,
  city: String,
  coordinates: Array<Number>,
  country: String,
  ibu: Number,
  name: String,
  state: String,
});

export const ProductModel = model("Product", ProductSchema);

