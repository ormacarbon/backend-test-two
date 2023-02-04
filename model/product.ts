import { Schema,model } from "mongoose";
import { IProduct } from "../types/types";

const ProductSchema = new Schema<IProduct>({
        abv: {type:Number, required:true},
        category: {type:String, required:true},
        city: {type:String, required:true},
        country: {type:String, required:true},
        ibu:{type:Number, required:true},
        name:{type:String, required:true},
        state:{type:String, required:true},
        coordinates: {type:[Number], required:true}
})

export default model<IProduct>('products', ProductSchema)