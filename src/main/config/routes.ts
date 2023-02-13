import { Express, Router } from "express"
import beerRoutes from "../routes/beer-routes";

export default (app: Express): void => {
  const router = Router();
  app.use("/api", router);
  beerRoutes(router);
}
