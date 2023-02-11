import { OpenApiMiddleware } from '#/middlewares/openapi.middleware.js';

describe('openapi.middleware.ts', () => {
  const middleware = new OpenApiMiddleware();

  test('defined', async () => {
    expect(middleware).toBeDefined();
  });
});
