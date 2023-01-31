import { model, Schema } from 'mongoose';

interface IBeer {
  abv: number,
  address: string,
  category: string,
  city: string,
  coordinates: number[],
  country: string,
  description: string,
  ibu: number,
  name: string,
  state: string,
  website: string
}

const beerSchema = new Schema<IBeer>({
	abv: { type: Number },
	address: { type: String },
	category: { type: String },
	city: { type: String },
	coordinates: { type: [Number] },
	country: { type: String },
	description: { type: String },
	ibu: { type: Number },
	name: { type: String },
	state: { type: String },
	website: { type: String }
});

const Beer = model<IBeer>('Beer', beerSchema);

export default Beer;
