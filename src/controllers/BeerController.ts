import { Request, Response } from "express";
import { container } from "tsyringe";
import { ApplicationError } from "../error/ApplicationError";
import { CreateBeerService } from "../services/CreateBeerService";
import { DeleteOneBeerService } from "../services/DeleteOneBeerService";
import { FindBeersService } from "../services/FindBeersService";
import { FindOneBeerService } from "../services/FindOneBeerService";
import { getPaginatedData } from "../utils/pagination";

class BeerController {

    async findBeers(req: Request, res: Response) {

        try {
            const findBeerService = container.resolve(FindBeersService);
            const beers = await findBeerService.execute();

            const pages = getPaginatedData(req.query.page,req.query.pageSize,beers);

            return res.status(200).json(pages);
        } catch (err) {
            throw new ApplicationError(err, 400);
        }

    }

    async findOneBeer(req: Request, res: Response) {

        try {
            const findOneBeerService = container.resolve(FindOneBeerService);
            const beer = await findOneBeerService.execute(req.params.id);
            return res.status(200).json(beer);
        } catch (err) {
            throw new ApplicationError(err, 400);
        }

    }


    async insertOneBeer(req: Request, res: Response) {

        try {
            const createBeerService = container.resolve(CreateBeerService);
            await createBeerService.execute(req.body);

            return res.status(201).json({ message: "Operation succefully!" });

        } catch (err) {
            throw new ApplicationError(err, 400);
        }
    }


    async deleteOneBeer(req: Request, res: Response) {

        try {
            const deleteOneBeerService = container.resolve(DeleteOneBeerService);
            await deleteOneBeerService.execute(req.params.id);

            return res.status(200).json({ message: "Operation succefully!" });
        } catch (err) {
            throw new ApplicationError(err, 400);
        }
    }

}

export { BeerController }
