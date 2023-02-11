import { createMock } from '@golevelup/ts-jest';
import { Server as HttpServer } from 'http';

import { Server } from '#/api/server.js';
import { IEnvService } from '#/modules/shared/env.service.js';

describe('server.ts', () => {
  let started: HttpServer;
  const server = new Server(
    createMock<IEnvService>({
      get: jest.fn().mockReturnValue('9000'),
    }),
    createMock(),
    createMock(),
    createMock(),
  );

  afterAll(() => {
    started.close();
  });

  test('starts', async () => {
    started = server.start();

    expect(server).toBeDefined();
    expect(started).toBeInstanceOf(HttpServer);
  });
});
