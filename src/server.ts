import * as dotenv from 'dotenv'
dotenv.config()
import express from "express";
import "express-async-errors";
import "reflect-metadata";
import "./shared/container";
import { router } from './routes';

const app = express();

app.use(express.json());

app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, () => { console.log("APPLICATION UP") });