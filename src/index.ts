import { PrismaClient } from '@prisma/client';
import 'reflect-metadata';
import { container } from 'tsyringe';

import { Server } from '#/api/server.js';
import { ErrorHandlerMiddleware } from '#/middlewares/error-handler.middleware.js';
import { ValidatorMiddleware } from '#/middlewares/validator.middleware.js';
import { BeerController } from '#/modules/beer/beer.controller.js';
import { BeerRouter } from '#/modules/beer/beer.router.js';
import { BeerServiceCreate } from '#/modules/beer/services/create.service.js';
import { BeerServiceGetMany } from '#/modules/beer/services/get-many.service.js';
import { BeerServiceGetOne } from '#/modules/beer/services/get-one.service.js';
import { BeerServiceSeed } from '#/modules/beer/services/seed.service.js';
import { EnvService } from '#/modules/shared/env.service.js';

// middlewares
container.register('IErrorHandlerMiddleware', { useClass: ErrorHandlerMiddleware });
container.register('IValidatorMiddleware', { useClass: ValidatorMiddleware });

// shared services
container.register('IEnvService', { useClass: EnvService });
container.register('IPrismaService', { useValue: new PrismaClient() });

// modules
container.register('IBeerServiceSeed', { useClass: BeerServiceSeed });
container.register('IBeerServiceCreate', { useClass: BeerServiceCreate });
container.register('IBeerServiceGetOne', { useClass: BeerServiceGetOne });
container.register('IBeerServiceGetMany', { useClass: BeerServiceGetMany });
container.register('IBeerController', { useClass: BeerController });
container.register('IBeerRouter', { useClass: BeerRouter });

const server = container.resolve(Server);

server.start();
