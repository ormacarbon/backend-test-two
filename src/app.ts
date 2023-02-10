import express from "express";
import beersRoute from "./routes/Beers.route";

const app = express();

app.use(express.json());

app.use("/beers", beersRoute);

export default app;
