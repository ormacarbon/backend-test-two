import { NextFunction, Request, Response, Router } from 'express';
import Beer from '../database/models';
import validateBody from '../middlewares/validateBody';
import validateId from '../middlewares/validateId';

const router = Router();

router.get('/list/:length/:skip', async (req: Request, res: Response, next: NextFunction) => {
	const { length, skip } = req.params;

	let limit;
	Number(length) > 100 ? limit = 100 : limit = Number(length);

	try {
		const beers = await Beer.find({}, null, { limit, skip: Number(skip) });

		res.status(200).json(beers);
	} catch (err) {
		next(err);
	}
});

router.get('/filter?', async (req: Request, res: Response, next: NextFunction) => {
	const { name, country } = req.query;

	const nameQuery = name ? name.toString() : '';
	const countryQuery = country ? country.toString() : '';

	try {
		const results = await Beer.find({ name: new RegExp(nameQuery, 'i'), country: new RegExp(countryQuery, 'i') }, null, { limit: 100 });

		res.status(200).json(results);
	} catch (err) {
		next(err);
	}
});

router.post('/add', validateBody, async (req: Request, res: Response, next: NextFunction) => {
	const { body } = req;

	try {
		const newBeer = await Beer.create(body);

		res.status(201).json(newBeer);
	} catch (err) {
		next(err);
	}
});

router.put('/update/:id', validateId, validateBody, async (req: Request, res: Response, next: NextFunction) => {
	const { id } = req.params;
	const { body } = req;

	try {
		await Beer.findByIdAndUpdate(id, body);

		res.status(200).json({ message: 'Beer successfully updated.' });
	} catch (err) {
		next(err);
	}
});

router.delete('/delete/:id', validateId, async (req: Request, res: Response, next: NextFunction) => {
	const { id } = req.params;

	try {
		await Beer.findByIdAndDelete(id);

		res.status(200).json({ message: 'Beer successfully deleted.' });
	} catch (err) {
		next(err);
	}
});

export default router;
