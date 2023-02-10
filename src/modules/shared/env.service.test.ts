import * as dotenv from 'dotenv';

import { EnvService, IEnvService } from '#/modules/shared/env.service.js';

describe('env.service.ts', () => {
  let service: IEnvService;

  test('is defined', async () => {
    jest.spyOn(dotenv, 'config').mockReturnValue({ parsed: { test: 'test' } });

    service = new EnvService();
    const result = service.get('test');

    expect(service).toBeDefined();
    expect(service.keys).toEqual({ test: 'test' });
    expect(result).toBe('test');
  });
});
