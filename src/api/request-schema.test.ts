import { RequestSchema } from '#/api/request-schema.js';

describe('request-schema.ts', () => {
  test('defined', () => {
    const schema = new RequestSchema();

    expect(schema).toBeDefined();
  });
});
