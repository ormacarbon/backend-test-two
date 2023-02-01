import { NextFunction, Request, Response } from 'express';

const validateBody = (req: Request, res: Response, next: NextFunction) => {
	const { body } = req;

	const { abv, address, category, city, coordinates, country, ibu, name, state } = body;

	if (
		!abv || typeof abv !== 'number' ||
    !address || typeof address !== 'string' ||
    !category || typeof category !== 'string' ||
    !city || typeof city !== 'string' ||
    !coordinates || !Array.isArray(coordinates) || coordinates.length !== 2 || typeof coordinates[0] !== 'number' || typeof coordinates[1] !== 'number' ||
    !country || typeof country !== 'string' ||
    !ibu || typeof ibu !== 'number' ||
    !name || typeof name !== 'string' ||
    !state || typeof state !== 'string'
	) return res.status(400).json({ message: 'Invalid body.' });

	next();
};

export default validateBody;