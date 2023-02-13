import { BeerController } from '../beer.controller';
import { Request, Response } from '@types';

describe('BeerController', () => {
  let controller: BeerController;
  let mockResponse: Response;

  beforeEach(() => {
    mockResponse = (function () {
      const res = {} as any;

      res.status = jest.fn().mockReturnValue(res);
      res.send = jest.fn().mockReturnValue(res);
      res.next = jest.fn().mockReturnValue(res);

      return res;
    })();

    controller = new BeerController({
      name: 'controller-mock',
      service: {
        list: jest.fn(),
      } as unknown as any,
    });
  });

  it('should create a beer', async () => {
    const req = { body: { name: 'Pilsner' } } as unknown as Request;
    const res = mockResponse as Response;

    controller.service.create = jest
      .fn()
      .mockResolvedValue({ name: 'Pilsner' });

    await controller.create(req, res);

    expect(res.send).toHaveBeenCalledWith({ beer: { name: 'Pilsner' } });
  });

  it('should return a list of beers', async () => {
    const items = [{ name: 'Pilsner' }, { name: 'IPA' }];
    const req = { query: {} } as unknown as Request;
    const res = mockResponse as Response;

    controller.service.list = jest.fn().mockResolvedValue({ items, _opt: {} });

    await controller.list(req, res);

    expect(res.send).toHaveBeenCalledWith({ items, _opt: {} });
  });

  it('should delete a beer', async () => {
    const req = { params: { id: '1' } } as unknown as Request;
    const res = mockResponse as Response;

    controller.service.delete = jest.fn().mockResolvedValue({});

    await controller.delete(req, res);

    expect(res.send).toHaveBeenCalledWith();
  });
});
