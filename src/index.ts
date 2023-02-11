import { PrismaClient } from '@prisma/client';
import 'reflect-metadata';
import { container } from 'tsyringe';

import { Server } from '#/api/server.js';
import { ErrorHandlerMiddleware } from '#/middlewares/error-handler.middleware.js';
import { OpenApiMiddleware } from '#/middlewares/openapi.middleware.js';
import { ValidatorMiddleware } from '#/middlewares/validator.middleware.js';
import { BeerController } from '#/modules/beer/beer.controller.js';
import { BeerRouter } from '#/modules/beer/beer.router.js';
import { BeerService } from '#/modules/beer/beer.service.js';
import { EnvService } from '#/modules/shared/env.service.js';
import { SeedService } from '#/modules/shared/seed.service.js';

// middlewares
container.register('IOpenApiMiddleware', { useClass: OpenApiMiddleware });
container.register('IErrorHandlerMiddleware', { useClass: ErrorHandlerMiddleware });
container.register('IValidatorMiddleware', { useClass: ValidatorMiddleware });

// shared services
container.register('IEnvService', { useClass: EnvService });
container.register('IPrismaService', { useValue: new PrismaClient() });

// modules
container.register('IBeerService', { useClass: BeerService });
container.register('ISeedService', { useClass: SeedService });
container.register('IBeerController', { useClass: BeerController });
container.register('IBeerRouter', { useClass: BeerRouter });

const server = container.resolve(Server);

server.start();
