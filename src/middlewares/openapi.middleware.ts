import { RequestHandler } from 'express';
import swaggerJSDoc, { Options } from 'swagger-jsdoc';
import { serve, setup } from 'swagger-ui-express';

export interface IOpenApiMiddleware {
  options: Options;
  // swager-ui-express handler signature is slightly off
  server: RequestHandler & any;
  docs: RequestHandler;
}

export class OpenApiMiddleware implements IOpenApiMiddleware {
  options: Options = {
    definition: {
      openapi: '3.0.3',
      info: {
        title: 'mkvlrn@gmail.com - ormacarbon beers',
        description: 'backend-test',
        version: '1.0.0',
      },
      servers: [{ description: 'localhost', url: 'http://localhost:4000' }],
    },
    apis: ['**/*.router.ts', '**/*.router.js'],
  };

  server = serve;

  docs = setup(swaggerJSDoc(this.options));
}
