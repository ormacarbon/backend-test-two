import express from 'express';
import swaggerUi from 'swagger-ui-express';

import debug from 'debug';

export class AppService {
  log = debug('app:service');

  constructor(private app: express.Application) {
    this.buildStaticFiles();
    this.buildDocs();
  }

  buildStaticFiles() {
    this.app.use(express.static('public'));

    this.log('Static files served from public folder');
  }

  buildDocs() {
    this.app.use(
      '/docs',
      swaggerUi.serve,
      swaggerUi.setup(undefined, { swaggerOptions: { url: '/swagger.json' } }),
    );

    this.log('Swagger docs served from /docs');
  }
}

export function registerAppService(props: { app: express.Application }) {
  return new AppService(props.app);
}
