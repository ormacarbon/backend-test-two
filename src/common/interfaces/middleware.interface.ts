import { NextFunction, Request, Response } from 'express';
import { debug, Debugger } from 'debug';

export interface IMiddleware {
  signature:
    | ((
        req: Request,
        res: Response,
        next: NextFunction,
      ) => Promise<Response | undefined>)
    | Debugger;
  props: {
    name: string;
  };
}

export type IMiddlewareFat<T> = T extends BaseMiddleware ? T : never;

export abstract class BaseMiddleware {
  [key: string]: IMiddleware['signature'];

  log: Debugger;

  constructor(props: IMiddleware['props']) {
    this.log = debug(`app:${props.name}-middleware`);
  }
}
