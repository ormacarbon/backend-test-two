import express from "express";
import beers from "./beersRoutes.js";
import swaggerUi from "swagger-ui-express"
// to import JSON file
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const swaggerDocs = require("../src/docs/swagger.json");

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send("Beer api - go to '/api-docs'")
    })

    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs)) 

    app.use(
        express.json(), beers
    )
}

export default routes;