import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindBeersService } from "../services/FindBeersService";
import { getPaginatedData } from "../utils/pagination";

class BeerController {

    async findBeers(req: Request, res: Response) {

        try {
            const findBeerService = container.resolve(FindBeersService);
            const beers = await findBeerService.execute();

            const pages = getPaginatedData(req.query.page,req.query.pageSize,beers);

            return res.status(200).json(pages);
        } catch (err) {
            throw new Error(err);
        }

    }

}

export { BeerController }
