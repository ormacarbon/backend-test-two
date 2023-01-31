import mongoose from 'mongoose';
import 'dotenv/config';

const MONGO_PORT = process.env.MONGO_PORT || 27017;

export default function connect() {
	mongoose.set('strictQuery', false);

	mongoose.connect(`mongodb://mongo:${MONGO_PORT}`, { user: 'root', pass: 'example' });
	const db = mongoose.connection;

	db.once('open', () => console.log('Connected to MongoDB.'));
	db.on('error', (err) => console.log(err));
}
