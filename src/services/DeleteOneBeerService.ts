import { inject, injectable } from "tsyringe"
import { ApplicationError } from "../error/ApplicationError";
import { IBeerRepository } from "../repositories/IBeerRepository";


@injectable()
class DeleteOneBeerService {

    constructor(@inject("BeerRepository") private beerRepository: IBeerRepository) { }

    async execute(id: string) {

        try {
            
            const beer = await this.beerRepository.findOne(id);
            if (!beer) throw new ApplicationError("Beer not found!", 400)
            await this.beerRepository.deleteOne(id);

        } catch (err) {

            console.log(err)
            throw new ApplicationError("Beer not found!", 400)

        }


    }

}


export { DeleteOneBeerService }