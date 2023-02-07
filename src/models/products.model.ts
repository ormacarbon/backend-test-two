import { Schema, model } from "mongoose";
import { IProduct } from "../types/products.types";

const ProductSchema = new Schema<IProduct>({
  id: {
    type: String,
    require: true
  },
  abv: Number,
  category: {
    type: String,
    require: true
  },
  city: {
    type: String,
    require: true
  },
  // coordinates: {
  //   type: Array<Number>,
  //   require: true
  // },
  country: {
    type: String,
    require: true
  },
  ibu: Number,
  name: {
    type: String,
    require: true
  },
  state: {
    type: String,
    require: true
  },
});

export const Product = model<IProduct>("Product", ProductSchema);


// export default class Game {
//   constructor(
//     public name: string,
//      public price: number, 
//      public category: string, 
//      public id?: ObjectId
//      ) { 

//   }
// }

