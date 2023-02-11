import { createMock } from '@golevelup/ts-jest';
import { IsDefined, IsString, Length } from 'class-validator';
import { Request, Response } from 'express';

import { AppError } from '#/api/app-error.js';
import { RequestSchema } from '#/api/request-schema.js';
import { IValidatorMiddleware, ValidatorMiddleware } from '#/middlewares/validator.middleware.js';

describe('validator.middleware.ts', () => {
  const middleware: IValidatorMiddleware = new ValidatorMiddleware();

  class MockDto {
    @Length(2)
    @IsString()
    @IsDefined()
    test!: string;
  }

  test('validation passes', async () => {
    const req = createMock<Request>({
      body: { test: 'valid string' },
      query: { test: 'also valid' },
    });
    const res = createMock<Response>();
    const next = jest.fn();

    const act = middleware.validate(new RequestSchema(MockDto, MockDto));
    await act(req, res, next);

    expect(next).toHaveBeenCalledWith();
  });

  test('validation fails', async () => {
    const req = createMock<Request>({
      body: { test: 0, invalid: true },
      query: { test: '' },
    });
    const res = createMock<Response>();
    const next = jest.fn();

    const act = middleware.validate(new RequestSchema(MockDto, MockDto));

    await expect(act(req, res, next)).rejects.toMatchObject<AppError>({
      name: 'AppError',
      type: 'BAD_REQUEST',
      statusCode: 400,
      message: 'validation error(s)',
      details: [
        'property invalid should not exist',
        'test must be a string',
        'test must be longer than or equal to 2 characters',
      ],
    });
  });
});
