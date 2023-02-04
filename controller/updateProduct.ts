import product from "../model/product";
import {Request,Response} from 'express'
import { IProduct } from "../types/types";

export const updateProduct = async(req:Request<IProduct>,res:Response)=>{
    try {
        const {id} = req.params

        const {abv,category,city,country,ibu,name,state,coordinates} = req.body

        const SingleProduct = await product.findById(id)

        if(!SingleProduct) return res.status(404).json({messsage: 'Product do not exists'})

        const updatedProduct = await product.findByIdAndUpdate({_id:id},{
            abv,
            category,
            city,
            country,
            ibu,
            name,
            state,
            coordinates
        })

        res.status(200).json(updatedProduct)

    } catch (error) {
        res.status(500).json({message:error})
    }
}