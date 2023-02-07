import express from 'express';
import appConfig from './config';

import * as dotenv from 'dotenv';
dotenv.config();

import connection from './config/database/connection';
const app = express();

const PORT = process.env.PORT || 3000;

(async () => {
  /**
   * Database connection function.
   * @returns {void}
   */

  await connection();
})();

appConfig(app);

app.listen(PORT, async () => {
  console.log(`Listening port ${PORT}`);
});