import product from "../model/product";
import {Request,Response} from 'express'

export const getProducts = async(req:Request,res:Response)=>{
    try {
        const products = await product.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: error})
    }
}