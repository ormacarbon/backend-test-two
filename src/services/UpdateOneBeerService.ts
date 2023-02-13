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
class UpdateOneBeerService {

    constructor(@inject("BeerRepository")
    private beerRepository: IBeerRepository) { }

    async execute(id: string, { abv, address, category, city, coordinates, country, description, ibu, name, state, website }: IRequest) {

        try {
           
            const beer = await this.beerRepository.updateOne(id, { abv, address, category, city, coordinates, country, description, ibu, name, state, website });
            return beer;
            
        } catch(err) {

            console.log(err);
            throw new ApplicationError("Beer not found!", 400)

        }

    }
}

export { UpdateOneBeerService }