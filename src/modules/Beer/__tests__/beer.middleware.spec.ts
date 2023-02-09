/* eslint-disable @typescript-eslint/no-empty-function */
import { Request, Response, NextFunction } from 'express';
import BeerMiddleware from '../beer.middleware';

const handlers = new BeerMiddleware({
  name: 'beer',
});

const mockResponse = (function () {
  const res = {} as any;

  res.status = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);

  return res;
})();

describe('BeerMiddleware', () => {
  const nextFunction: NextFunction = jest.fn();

  it('should be defined', () => {
    expect(handlers.validateBodyFields).toBeDefined();
  });

  it('should validate name field', async () => {
    await handlers.validateBodyFields(
      { body: {} } as Request,
      mockResponse as Response,
      nextFunction,
    );

    expect(mockResponse.status).toHaveBeenCalledWith(400);
    expect(mockResponse.send).toHaveBeenCalledWith({
      error: 'Missing Password Field',
    });
  });
});
