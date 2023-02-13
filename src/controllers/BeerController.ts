import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindBeersService } from "../services/FindBeersService";

class BeerController {

    async findBeers(req: Request, res: Response) {

        try {
            const findBeerService = container.resolve(FindBeersService);
            const beers = await findBeerService.execute();

            return res.status(200).json(beers);
        } catch (err) {
            throw new Error(err);
        }

    }

}

export { BeerController }
