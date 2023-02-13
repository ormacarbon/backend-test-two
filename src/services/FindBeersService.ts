import { inject, injectable } from "tsyringe";
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
            throw new Error("Something wrong happened!")
        }
       
    }
}


export {FindBeersService}