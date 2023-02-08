import { Router } from "express";

import { CreateClientController } from "./controllers/CreateClientController";
import { DetailsClientController } from "./controllers/DetailsClientController";
import { AllClientsController } from "./controllers/AllClientsController.ts";
import { UpdateClientController } from "./controllers/UpdateClientController";
import { DeleteClientController } from "./controllers/DeleteClientController";

const router = Router();

router.post("/client", new CreateClientController().handle);

router.get("/detail", new DetailsClientController().handle);

router.get("/clients", new AllClientsController().handle);

router.put("/update", new UpdateClientController().handle);

router.delete("/remove", new DeleteClientController().handle);

export { router };
