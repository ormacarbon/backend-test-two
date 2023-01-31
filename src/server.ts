import express from 'express';
import 'dotenv/config';
import connect from './database/connect';

const API_PORT = process.env.API_PORT || 3001;

const server = express();

connect();

server.listen(API_PORT, () => console.log(`API running on port ${API_PORT}.`));
