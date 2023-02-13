import { Router } from "express";
import { adapterRoute } from '../adapter/express-router-adapter';
import { makeAddBeerController } from '../factories/add-beer';
import { makeReadOneController } from "../factories/read-one";
import { makeUpdateBeerController } from "../factories/update-beer";
import { makeDeleteBeerController } from "../factories/delete-beer";

export default (router: Router): void => {
  router.post("/beer/", adapterRoute(makeAddBeerController()));
  router.get("/beer/", adapterRoute(makeReadOneController()));
  router.put("/beer/", adapterRoute(makeUpdateBeerController()));
  router.delete("/beer/", adapterRoute(makeDeleteBeerController()));
}
