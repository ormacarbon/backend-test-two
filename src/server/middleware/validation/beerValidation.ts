//  Dependencies
import * as yup from "yup"
//  Types
import { Request, Response, NextFunction } from "express"

export const beerValidation = {
    beer: async (req: Request, res: Response, next: NextFunction ) => {
      
        const beerValidationSchema = yup.object().shape({
            name: yup.string().required().min(3),
            abv: yup.string().required(),
            ibu: yup.string().required().min(3),
            city: yup.string().required().min(3),
            country: yup.string().required().min(3)
        })

        await beerValidationSchema.validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch((err: yup.ValidationError) => {
            const errors:string[] = []
            err.inner.forEach(error => {
                if(!error.path) return   
                errors.push(error.message)  
            })   
            res.status(400).send(errors)    
        })
    }
}