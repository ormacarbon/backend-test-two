import {Request,Response,NextFunction} from "express";
import  { z } from "zod";
import { ApplicationError } from "../error/ApplicationError";

const beerSchema = z.object({
    abv: z.number(),
    address:z.string().min(1),
    category:z.string().min(1),
    city:z.string().min(1),
    coordinates: z.array(z.number()).length(2).nonempty({message: "Can't be empty!",}),
    country:z.string().min(1),
    description:z.string().nullable(),
    ibu:z.number(),
    name:z.string().min(1),
    state:z.string().min(1),
    website:z.string().min(1)
});


export function validateBeerSchema(req:Request,res:Response,next:NextFunction){
    
    if(!req.body) throw new ApplicationError("Insert beer specification",400);

    try{
        beerSchema.parse(req.body);
        next();
    }catch(err){
        return res.status(400).json({error:err})
    }
}

