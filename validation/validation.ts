import  Joi from 'joi'
import { IProduct } from '../types/types'

export const validateProduct = (product: IProduct)=>{
    const productSchema = Joi.object<IProduct>({
        abv: Joi.number().min(3).required() ,
        category: Joi.string().min(3).required(),
        city: Joi.string().min(5).required(),
        coordinates: Joi.array().min(5).required(),
        country: Joi.string().min(5).required(),
        ibu: Joi.number().min(3).required(),
        name: Joi.string().min(4).required(),
        state: Joi.string().min(5).required()
    })

    return productSchema.validate(product)
}