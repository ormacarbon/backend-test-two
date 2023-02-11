import { createMock } from '@golevelup/ts-jest';
import { Request, Response } from 'express';

import { AppError, AppErrorType } from '#/api/app-error.js';
import {
  ErrorHandlerMiddleware,
  IErrorHandlerMiddleware,
} from '#/middlewares/error-handler.middleware.js';

describe('error-handler.middleware.ts', () => {
  const middleware: IErrorHandlerMiddleware = new ErrorHandlerMiddleware();

  test('handles', async () => {
    const err = new AppError(AppErrorType.INTERNAL, 'test exploded');
    const req = createMock<Request>();
    // https://mattiaerre.medium.com/express-req-res-and-chaining-1a9da1dc00e0
    const res: Response = createMock<Response>({ json: jest.fn(), status: jest.fn(() => res) });
    const next = jest.fn();

    middleware.handle(err, req, res, next);

    expect(next).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith<[Partial<AppError>]>({
      statusCode: 500,
      type: 'INTERNAL',
      message: 'test exploded',
      details: null,
    });
  });
});
