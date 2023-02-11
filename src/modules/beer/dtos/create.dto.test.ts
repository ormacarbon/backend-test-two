import { BeerCreateDto } from '#/modules/beer/dtos/create.dto.js';

describe('create.dto.ts', () => {
  const dto = new BeerCreateDto();

  test('defined', async () => {
    expect(dto).toBeDefined();
  });
});
