import { inject, injectable } from "tsyringe";
import { ApplicationError } from "../error/ApplicationError";
import { IBeerRepository } from "../repositories/IBeerRepository";



@injectable()
class FindBeersService{

    constructor(@inject("BeerRepository")
                private beerRepository: IBeerRepository){}

    async execute(){

        try{
           
            const beers = await this.beerRepository.find();
            return beers;
            
        } catch (err) {

            console.log(err)
            throw new ApplicationError("Something wrong happened!", 500)
        }
       
    }
}


export {FindBeersService}