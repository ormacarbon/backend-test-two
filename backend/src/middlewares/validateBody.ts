import { NextFunction, Request, Response } from 'express';

const validateBody = (req: Request, res: Response, next: NextFunction) => {
	const { body } = req;

	const { abv, address, category, city, coordinates, country, description, ibu, name, state, website } = body;

	const aux = [address, category, city, country, description, name, state, website];
	const aux2 = [abv, ibu];

	const invalidCoordinates = !coordinates || !Array.isArray(coordinates) || coordinates.length !== 2 ||
    typeof coordinates[0] !== 'number' || typeof coordinates[1] !== 'number';

	if (
		aux.some(field => !field || typeof field !== 'string') ||
    aux2.some(field => !field || typeof field !== 'number') ||
    invalidCoordinates
	) return res.status(400).json({ message: 'Invalid body.' });

	next();
};

export default validateBody;