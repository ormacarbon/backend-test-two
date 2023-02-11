import autoBind from 'auto-bind';
import express, { Request, Response } from 'express';
import 'express-async-errors';
import { createServer, Server as HttpServer } from 'http';
import { AddressInfo } from 'net';
import { inject, injectable } from 'tsyringe';

import type { IErrorHandlerMiddleware } from '#/middlewares/error-handler.middleware.js';
import type { IOpenApiMiddleware } from '#/middlewares/openapi.middleware.js';
import type { IBeerRouter } from '#/modules/beer/beer.router.js';
import type { IEnvService } from '#/modules/shared/env.service.js';

@injectable()
export class Server {
  private app = express();

  private httpServer: HttpServer;

  constructor(
    @inject('IEnvService') private readonly envService: IEnvService,
    @inject('IOpenApiMiddleware') private readonly openApiMw: IOpenApiMiddleware,
    @inject('IErrorHandlerMiddleware') private readonly errorHandlerMw: IErrorHandlerMiddleware,
    @inject('IBeerRouter') private readonly beerRouter: IBeerRouter,
  ) {
    autoBind(this);

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    this.app.use('/docs', this.openApiMw.server, this.openApiMw.docs);
    this.app.use('/beer', this.beerRouter.router);
    this.app.use('/', (_req: Request, res: Response) => res.redirect('/docs'));
    this.app.use(this.errorHandlerMw.handle);

    this.httpServer = createServer(this.app);
    this.httpServer.on('listening', () => {
      // eslint-disable-next-line no-console
      console.log(`server up @${(this.httpServer.address() as AddressInfo).port}`);
    });
  }

  start() {
    return this.httpServer.listen(process.env.PORT || this.envService.get('API_PORT'));
  }
}
