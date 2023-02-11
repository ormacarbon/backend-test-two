import { BeerGetManyDto } from '#/modules/beer/dtos/get-many.dto.js';

describe('get-many.dto.ts', () => {
  const dto = new BeerGetManyDto();

  test('defined', async () => {
    expect(dto).toBeDefined();
  });
});
