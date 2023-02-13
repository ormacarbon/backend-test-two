import {container} from "tsyringe";
import { BeerRepository } from "../../repositories/BeerRepository";
import { IBeerRepository } from "../../repositories/IBeerRepository";


container.registerSingleton<IBeerRepository>(
    "BeerRepository",
    BeerRepository
)