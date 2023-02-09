import { Router } from 'express';
import { Server } from 'http';
import { debug, Debugger } from 'debug';

import { IService, IServiceFat } from '@interfaces/service.interface';
import { IController, IControllerFat } from '@interfaces/controller.interface';
import { IMiddleware, IMiddlewareFat } from '@interfaces/middleware.interface';

export interface IModule<M, C, S> {
  props: {
    name: string;
    server: Server;
    service: new (props: IService['props']) => IServiceFat<S>;
    middleware: new (props: IMiddleware['props']) => IMiddlewareFat<M>;
    controller: new (props: IController<S>['props']) => IControllerFat<C, S>;
  };
}

export abstract class BaseModule<M, C, S> {
  name: string;
  router: Router;
  server: Server;
  middleware: IMiddlewareFat<M>;
  controller: IControllerFat<C, S>;

  log: Debugger;

  constructor(props: IModule<M, C, S>['props']) {
    this.name = props.name;
    this.router = Router();

    const service = new props.service({
      name: props.name,
    });

    this.controller = new props.controller({
      name: props.name,
      service,
    });

    this.middleware = new props.middleware({
      name: props.name,
    });

    if (props.server) this.server = props.server;

    this.log = debug(`app:${props.name}-module`);

    this.routes();
  }

  abstract routes(): Promise<void>;
}
