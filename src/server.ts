import * as dotenv from 'dotenv'
dotenv.config()
import express from "express";
import { Request, Response, NextFunction } from "express";
import "express-async-errors";
import "reflect-metadata";
import "./shared/container";
import { router } from './routes';
import { ApplicationError } from './error/ApplicationError';

const app = express();

app.use(express.json());

app.use(router);

const port = process.env.PORT || 3000;

app.use((err: Error, request: Request, res: Response, next: NextFunction) => {
    if (err instanceof ApplicationError) {
        return res.status(err.statusCode).json({ message: err.message })
    }

    return res.status(500).json({ status: "error", message: `Internal Server Error - ${err.message}` })
})

app.listen(port, () => { console.log("APPLICATION UP") });