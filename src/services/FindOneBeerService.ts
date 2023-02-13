import { inject, injectable } from "tsyringe";
import { ApplicationError } from "../error/ApplicationError";
import { IBeerRepository } from "../repositories/IBeerRepository";

@injectable()
class FindOneBeerService {

    constructor(@inject("BeerRepository")
    private beerRepository: IBeerRepository) { }

    async execute(id: string) {

        try {
            
            const beer = await this.beerRepository.findOne(id);
            return beer;
            
        } catch (err) {

            console.log(err)
            throw new ApplicationError("Beer not found!", 400)
        }

    }
}


export { FindOneBeerService }