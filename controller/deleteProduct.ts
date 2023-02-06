import product from "../model/product";
import {Request,Response} from 'express'
import { IProduct } from "../types/types";

export const deleteProduct = async(req:Request<IProduct>,res:Response)=>{
    try {
        const {id} = req.params
        const SingleProduct = await product.findById(id)
        if(!SingleProduct) return res.status(404).json({message: 'Product do not exists'})
        const deletedProduct =  await product.findByIdAndDelete(id)
        res.status(200).json(deletedProduct)
    } catch (error) {
        res.status(500).json({message: error})
    }
}