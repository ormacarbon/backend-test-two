import { plainToInstance } from 'class-transformer';
import { validate as classValidate, ValidationError, ValidatorOptions } from 'class-validator';
import { NextFunction, Request, RequestHandler, Response } from 'express';

import { AppError, AppErrorType } from '#/api/app-error.js';
import { RequestSchema } from '#/api/request-schema.js';

export interface IValidatorMiddleware {
  validate(schema: RequestSchema): RequestHandler;
}

export class ValidatorMiddleware implements IValidatorMiddleware {
  validate(schema: RequestSchema): RequestHandler {
    return async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
      const errors: ValidationError[] = [];
      const options: ValidatorOptions = {
        whitelist: true,
        forbidNonWhitelisted: true,
      };

      if (schema.body) {
        const { body } = req;
        const bodyObj = plainToInstance(schema.body, body);
        const bodyErrors = await classValidate(bodyObj, options);
        errors.push(...bodyErrors);
      }

      if (schema.query) {
        const { query } = req;
        const queryObj = plainToInstance(schema.query, query);
        const queryErrors = await classValidate(queryObj as object, options);
        errors.push(...queryErrors);
      }

      if (errors.length) {
        const details = errors.map(
          (error) => error.constraints![Object.keys(error.constraints!)[0]],
        );
        throw new AppError(AppErrorType.BAD_REQUEST, 'validation error(s)', details);
      }

      return next();
    };
  }
}
