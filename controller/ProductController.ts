import {Request,Response} from 'express'
import product from "../model/product";
import { IProduct } from '../types/types';

export const createProduct =  async (req:Request<IProduct>,res:Response)=>{

    const {abv,category,city,country,ibu,name,state,coordinates} = req.body

    const ProductAlreadyExists = await product.findOne({name: req.body.name})

    if(ProductAlreadyExists) return res.status(400).json({message: 'Product arealdy exists'}) 

    const items  = new product({
        abv,
        category,
        city,
        country,
        ibu,
        name,
        state,
        coordinates
       })

    try {
        const savedItems = await items.save()
        res.status(201).json(savedItems)
    } catch (error) {
        res.status(500).json({message:error})
    }
}

export const getProducts = async(req:Request<IProduct>,res:Response)=>{
        try {
            const products = await product.findOne()
            res.status(200).json(products)
        } catch (error) {
            res.status(500).json({message: error})
        }
}

export const getProduct = async(req:Request<IProduct>,res:Response)=>{
    try {
        const {id} = req.params 
        const SingleProduct = await product.findById(id)
        res.status(200).json(SingleProduct)
    } catch (error) {
        res.status(500).json({message:error})
    }
}

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