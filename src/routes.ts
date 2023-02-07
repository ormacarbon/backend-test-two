import { Router } from "express";
import { CreateClientController } from "./controllers/CreateClientController";

const router = Router();

router.post("/client", new CreateClientController().handle);

export { router };
