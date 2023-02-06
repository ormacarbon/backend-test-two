import product from "../model/product";
import {Request,Response} from 'express'
import { IProduct } from "../types/types";

export const updateProduct = async(req:Request<IProduct>,res:Response)=>{
    try {
        const {id} = req.params

        const { abv, category, city, country, ibu, name, state, coordinates,website,description,address } = req.body;

        const SingleProduct = await product.findById(id)

        if(!SingleProduct) return res.status(404).json({messsage: 'Product do not exists'})

        const updatedProduct = await product.findByIdAndUpdate({_id:id},{
            abv,
            address,
            category,
            city,
            coordinates,
            country,
            description,
            ibu,
            name,
            state,
            website,
        })

        res.status(200).json(updatedProduct)

    } catch (error) {
        res.status(500).json({message:error})
    }
}