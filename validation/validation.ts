import  Joi,{ObjectSchema} from 'joi'
import {Request,Response,NextFunction} from 'express'
import { IProduct } from '../types/types'


export const Validation = (schema : ObjectSchema )=>{
    return async(req:Request<IProduct>,res:Response,next:NextFunction)=>{
        try {
            await schema.validateAsync(req.body)
            next()
        } catch (error) {
            return res.status(400).json({message:error})
        }
    }
}


export const Schemas = {
    data: Joi.object({
        abv: Joi.number().min(1).required() ,
        address: Joi.string().min(5),
        category: Joi.string().min(3),
        city: Joi.string().min(5).required(),
        coordinates: Joi.number().min(5),
        country: Joi.string().min(5).required(),
        description: Joi.string().min(5),
        ibu: Joi.number().min(3).required(),
        name: Joi.string().min(4).required(),
        state: Joi.string().min(5),
        website: Joi.string().min(6),
    })
}

