import * as dotenv from 'dotenv'
dotenv.config()
import express from "express";
import { router } from './routes';

const app = express();

app.use(express.json());

app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, () => { console.log("APPLICATION UP") });