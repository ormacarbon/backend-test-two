import { RequestHandler } from 'express';
import { serve, setup } from 'swagger-ui-express';

import openapi from '#/api/openapi.json' assert { type: 'json' };

export interface IOpenApiMiddleware {
  openapi: any;
  // swager-ui-express handler signature is slightly off
  server: RequestHandler & any;
  docs: RequestHandler;
}

export class OpenApiMiddleware implements IOpenApiMiddleware {
  openapi: any;

  constructor() {
    this.openapi = openapi;
  }

  server = serve;

  docs = setup(openapi, {
    customSiteTitle: openapi.info.title,
    customCss: '.swagger-ui .topbar { display: none }',
  });
}
