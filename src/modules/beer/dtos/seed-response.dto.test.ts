import { SeedResponseDto } from '#/modules/beer/dtos/seed-response.dto.js';

describe('seed-response.dto.ts', () => {
  const dto = new SeedResponseDto(3);

  test('defined', async () => {
    expect(dto).toBeDefined();
    expect(dto).toMatchObject<SeedResponseDto>({ success: true, count: 3 });
  });
});
