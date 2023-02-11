import { BeerService } from '@modules/Beer/beer.service';

describe('BeerService', () => {
  let beerService: BeerService;

  beforeEach(() => {
    beerService = new BeerService({
      name: 'service-mock',
      repository: {
        find: jest.fn(),
        count: () => new Promise((resolve) => resolve(2)),
      } as unknown as any,
    });
  });

  describe('list', () => {
    it('should return a list of beers', async () => {
      const items = [{ name: 'Pilsner' }, { name: 'IPA' }];

      beerService.repository.find = jest.fn().mockResolvedValue(items);

      const result = await beerService.list(2, 0);

      expect(result).toEqual({
        items,
        _opt: {
          currentPage: 1,
          hasMore: false,
          nextPage: null,
          prevPage: null,
          total: 2,
          totalPages: 1,
        },
      });
    });
  });
});
