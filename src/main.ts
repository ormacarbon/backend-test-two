require('./common/config/env');
require('./common/config/db');

import { registerAppController } from './app.controller';
import { registerAppMiddleware } from './app.middleware';
import { registerAppService } from './app.service';

import { App, HttpServer } from '@types';
import { AppServer, debug, CreateHttpServer } from '@utils';

export function bootstrap() {
  const app: App = AppServer();
  const server: HttpServer = CreateHttpServer(app);

  const log = debug('Server:bootstrap');
  const port = process.env.PORT || 8080;

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
