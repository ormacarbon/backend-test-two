import express from "express";
import beers from "./beersRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send("Beer api")
    })

    app.use(
        express.json(), beers
    )
}

export default routes;