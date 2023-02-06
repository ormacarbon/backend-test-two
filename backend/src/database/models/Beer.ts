import { model, Schema } from 'mongoose';
import { IBeer } from '../../interfaces/IBeer';

const beerSchema = new Schema<IBeer>({
	abv: Number,
	address: String,
	category: String,
	city: String,
	coordinates: [Number],
	country: String,
	description: String,
	ibu: Number,
	name: String,
	state: String,
	website: String
});

const Beer = model<IBeer>('Beer', beerSchema);

export default Beer;
