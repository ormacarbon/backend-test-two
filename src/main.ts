import * as http from 'http';
import express from 'express';
import debug from 'debug';

import { registerAppController } from './app.controller';
import { registerAppMiddleware } from './app.middleware';
import { registerAppService } from './app.service';

require('./common/config/env');

export function bootstrap() {
  const app: express.Application = express();
  const server: http.Server = http.createServer(app);
  const log: debug.IDebugger = debug('app');
  const port = process.env.PORT || 3000;

  if (process.env.NODE_ENV !== 'test') {
    server.listen(port, () =>
      log(`Server running at http://localhost:${port}`),
    );
  }

  registerAppMiddleware({ app });
  registerAppController({ app, server });
  registerAppService({ app });

  return { app, server };
}

bootstrap();
