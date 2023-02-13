import debug from 'debug';
import { DataSource } from 'typeorm';

import { IS_TEST_ENV } from '@constants';

const debugLog: debug.IDebugger = debug('Database:data-source');

const AppDataSource = new DataSource({
  type: 'mongodb',
  database: IS_TEST_ENV ? 'orma-carbon-tests' : 'orma-carbon',
  host: process.env.DATABASE_HOST || 'localhost',
  port: process.env.DATABASE_PORT ? parseInt(process.env.DATABASE_PORT) : 27017,
  entities: [__dirname + '/entity/*.entity.{js,ts}'],
  migrations: [__dirname + '/migrations/*.{js,ts}'],
  useUnifiedTopology: true,
});

AppDataSource.initialize()
  .then(() => debugLog('Data Source has been initialized!'))
  .catch((err) => debugLog('Error during Data Source initialization: ', err));

export { AppDataSource };
