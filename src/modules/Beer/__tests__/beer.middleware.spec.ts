/* eslint-disable @typescript-eslint/no-empty-function */
import { BeerMiddleware } from '../beer.middleware';
import { Request, Response } from '@types';

const handlers = new BeerMiddleware({
  name: 'beer',
  controller: {
    service: {
      findById: (id: any) => {
        if (id === '123') {
          return Promise.resolve({ name: 'beer' });
        } else {
          return Promise.resolve(null);
        }
      },
    } as any,
  } as any,
});

describe('BeerMiddleware', () => {
  let handler: any;

  beforeEach(() => {
    handler = (function () {
      const res = {} as any;

      res.status = jest.fn().mockReturnValue(res);
      res.send = jest.fn().mockReturnValue(res);
      res.next = jest.fn().mockReturnValue(res);

      return res;
    })();
  });

  it('should be defined', () => {
    expect(handlers.valiateIdQuery).toBeDefined();
  });

  it('should validate create body', async () => {
    await handlers.validateCreateBody(
      {
        body: { name: 'beer', description: 'beer', price: 10 },
      } as unknown as Request,
      handler as Response,
      handler.next,
    );

    expect(handler.status).toHaveBeenCalledWith(400);
  });

  it('should validate beer exists', async () => {
    await handlers.validateBeerExists(
      { params: { id: '123' } } as unknown as Request,
      handler as Response,
      handler.next,
    );

    expect(handler.next).toHaveBeenCalled();
  });

  it('should validate beer not exists', async () => {
    await handlers.validateBeerExists(
      { params: { id: '456' } } as unknown as Request,
      handler as Response,
      handler.next,
    );

    expect(handler.status).toHaveBeenCalledWith(404);
  });

  it('should validate update body', async () => {
    await handlers.validateUpdateBody(
      {
        body: { name: 'beer', description: 21312 },
      } as unknown as Request,
      handler as Response,
      handler.next,
    );

    expect(handler.status).toHaveBeenCalledWith(400);
    expect(handler.send).toHaveBeenCalledWith([
      {
        children: [],
        constraints: { isString: 'description must be a string' },
        property: 'description',
        target: { description: 21312, name: 'beer' },
        value: 21312,
      },
    ]);
  });

  it('should validate list query limit field', async () => {
    await handlers.validateListQuery(
      { params: { limit: 'abc', offset: 0 } } as unknown as Request,
      handler as Response,
      handler.next,
    );

    expect(handler.status).toHaveBeenCalledWith(400);
  });

  it('should validate list query offset field', async () => {
    await handlers.validateListQuery(
      { params: { limit: 10, offset: 'abc' } } as unknown as Request,
      handler as Response,
      handler.next,
    );

    expect(handler.status).toHaveBeenCalledWith(400);
  });

  it('should validate id query field', async () => {
    await handlers.valiateIdQuery(
      { params: { id: '123' } } as unknown as Request,
      handler as Response,
      handler.next,
    );

    expect(handler.status).toHaveBeenCalledWith(400);
  });
});
