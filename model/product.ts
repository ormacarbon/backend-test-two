import { Schema,model } from "mongoose";
import { IProduct } from "../types/types";

const ProductSchema = new Schema<IProduct>({
        abv: Number,
        address:String,
        category: String,
        city: String,
        coordinates: [Number],
        country: String,
        description: String,
        ibu:Number,
        name:String,
        state:String,
        website: String,


})

export default model<IProduct>('products', ProductSchema)