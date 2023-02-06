import product from "../model/product";
import {Request,Response} from 'express'
import { IProduct } from "../types/types";


export const getProduct = async(req:Request<IProduct>,res:Response)=>{
    try {
        const {id} = req.params 
        const SingleProduct = await product.findById(id)
        res.status(200).json(SingleProduct)
    } catch (error) {
        res.status(500).json({message:error})
    }
}