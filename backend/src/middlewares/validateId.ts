import { NextFunction, Request, Response } from 'express';

import { isValidObjectId } from 'mongoose';

import Beer from '../database/models/Beer';

const validateId = async (req: Request, res: Response, next: NextFunction) => {
	const { id } = req.params;

	if (!isValidObjectId(id)) return res.status(400).json({ message: 'Invalid Id' });

	const beer = await Beer.findById(id);

	if (!beer) return res.status(404).json({ message: 'Id not found.' });

	next();
};

export default validateId;
