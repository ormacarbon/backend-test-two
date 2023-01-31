import express from 'express';
import 'dotenv/config';
import connectToDatabase from './database/connect';
import populateDatabase from './database/populate';
import router from './routes';

const API_PORT = process.env.API_PORT || 3001;

populateDatabase();
connectToDatabase();

const server = express();

server.use(express.json());
server.use('/beer', router);

server.listen(API_PORT, () => console.log(`API running on port ${API_PORT}.`));
