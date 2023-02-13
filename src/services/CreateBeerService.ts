import { inject, injectable } from "tsyringe";
import { ApplicationError } from "../error/ApplicationError";
import { IBeerRepository } from "../repositories/IBeerRepository";

interface IRequest {
    abv: number;
    address: string;
    category: string;
    city: string;
    coordinates: number[];
    country: string;
    description?: string;
    ibu: number;
    name: string;
    state: string;
    website: string;
}


@injectable()
class CreateBeerService {

    constructor(@inject("BeerRepository")
    private beerRepository: IBeerRepository) { }

    async execute({ abv, address, category, city, coordinates, country, description, ibu, name, state, website }: IRequest) {

        try {
           
            await this.beerRepository.insertOne({ abv, address, category, city, coordinates, country, description, ibu, name, state, website });
            
        } catch (err) {
            
            console.log(err)
            throw new ApplicationError("Something wrong happened!", 400)
        }

    }
}


export { CreateBeerService }