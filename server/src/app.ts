import express, { Application } from 'express';
import appConfig from './config';

import * as dotenv from 'dotenv';
dotenv.config();

import connection from './config/database/connection';
const app: Application = express();

(async () => {
  /**
   * Database connection function.
   * @returns {void}
   */

  await connection();
})();

/**
 * @name appConfig
 * @param {app} Express.APP
 *
 * Make initial configs for application Ex: cors, routes...
 *
 */
appConfig(app);

export default app;
