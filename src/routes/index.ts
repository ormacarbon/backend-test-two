import { Request, Response, Router } from 'express';
import Beer from '../database/models';

const router = Router();

router.get('/list/:length/:skip', async (req: Request, res: Response) => {
	const { length, skip } = req.params;

	let limit;
	Number(length) > 100 ? limit = 100 : limit = Number(length);

	const beers = await Beer.find({}, null, { limit, skip: Number(skip) });

	res.status(200).json(beers);
});

router.get('/filter?', async (req: Request, res: Response) => {
	const { name, country } = req.query;

	const nameQuery = name ? name.toString() : '';
	const countryQuery = country ? country.toString() : '';

	const results = await Beer.find({ name: new RegExp(nameQuery, 'i'), country: new RegExp(countryQuery, 'i') }, null, { limit: 100 });

	res.status(200).json(results);
});

router.post('/add', async (req: Request, res: Response) => {
	const { body } = req;
	// { abv, address, category, city, cordinates, country, ibu, name, state }
	const newBeer = await Beer.create(body);

	res.status(201).json(newBeer);
});

export default router;
