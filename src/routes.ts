import { Router } from "express";

import { CreateClientController } from "./controllers/CreateClientController";
import { DetailsClientController } from "./controllers/DetailsClientController";
import { AllClientsController } from "./controllers/AllClientsController.ts";

const router = Router();

router.post("/client", new CreateClientController().handle);

router.get("/detail", new DetailsClientController().handle);

router.get("/clients", new AllClientsController().handle);

export { router };
