import { Router } from "express";
import { CreateClientController } from "./controllers/CreateClientController";
import { DetailsClientController } from "./controllers/DetailsClientController";

const router = Router();

router.post("/client", new CreateClientController().handle);

router.get("/detail", new DetailsClientController().handle);

export { router };
