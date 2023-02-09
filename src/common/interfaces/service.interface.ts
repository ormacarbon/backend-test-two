import { debug, Debugger } from 'debug';

export interface IService {
  props: {
    name: string;
  };
}

export type IServiceFat<T> = T extends BaseService ? T : never;

export abstract class BaseService {
  log: Debugger;

  constructor(props: IService['props']) {
    this.log = debug(`app:${props.name}-service`);
  }
}
