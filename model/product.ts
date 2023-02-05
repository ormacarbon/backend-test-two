import { Schema,model } from "mongoose";
import { IProduct } from "../types/types";

const ProductSchema = new Schema<IProduct>({
        abv: Number,
        category: String,
        city: String,
        country: String,
        ibu:Number,
        name:String,
        state:String,
        coordinates: [Number],
        website: String
})

export default model<IProduct>('products', ProductSchema)