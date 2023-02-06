import fs from 'fs';
import path from 'path';

import Beer from '../models/Beer';

const databaseData = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../../db.json')).toString());

export default async function populate() {
	try {
		const beers = await Beer.find({}, null, { limit: 1 });

		if (beers.length === 0) {
			await Beer.create(databaseData);

			console.log('Database populated successfully.');
		} else console.log('Database was already populated.');
	} catch (err) {
		console.log(err);
	}
}
