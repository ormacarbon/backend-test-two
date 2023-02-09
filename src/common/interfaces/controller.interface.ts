import { NextFunction, Request, Response } from 'express';
import { debug, Debugger } from 'debug';

import { IServiceFat } from '@core';

export interface IController<T> {
  signature:
    | ((req: Request, res: Response, next: NextFunction) => Promise<Response>)
    | Debugger
    | T;
  props: {
    service: IServiceFat<T>;
    name: string;
  };
}

export type IControllerFat<T, U> = T extends BaseController<U> ? T : never;

export abstract class BaseController<T> {
  [key: string]: IController<T>['signature'];

  log: Debugger;
  service: IServiceFat<T>;

  constructor(props: IController<T>['props']) {
    this.log = debug(`app:${props.name}-controller`);
    this.service = props.service;
  }
}
