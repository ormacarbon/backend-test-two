import { default as request } from 'supertest';

import { bootstrap } from '../main';

jest.useFakeTimers();

describe('App', () => {
  const app = bootstrap().app;

  it('should run', async () => {
    return await request(app).get('/').expect(200);
  });

  it('should have a /docs endpoint', async () => {
    await request(app).patch('/docs').expect(200);
  });
});
