import { BeerUpdateDto } from '#/modules/beer/dtos/update.dto.js';

describe('update.dto.ts', () => {
  const dto = new BeerUpdateDto();

  test('defined', async () => {
    expect(dto).toBeDefined();
  });
});
