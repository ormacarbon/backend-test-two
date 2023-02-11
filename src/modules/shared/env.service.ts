import { config as dotenvConfig } from 'dotenv';
import { singleton } from 'tsyringe';

export interface IEnvService {
  keys: { [key: string]: string };
  get(key: string): string;
}

@singleton()
export class EnvService implements IEnvService {
  keys: { [key: string]: string } = {};

  constructor() {
    const env = dotenvConfig();
    Object.assign(this.keys, env.parsed);
  }

  get(key: string): string {
    return this.keys[key];
  }
}
