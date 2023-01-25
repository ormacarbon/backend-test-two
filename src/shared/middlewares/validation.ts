import { RequestHandler } from 'express';
import { ValidationError, SchemaOf } from "yup";
import { IValidation } from '../../types/validation.types';

export const validation: IValidation = (field, scheme) => async (req, res, next) => {
  try {
    await scheme.validate(req[field]);
    next();
  } catch (err) {
    const yupError = err as ValidationError;
    res.status(500).json({
      errors: {
        default: yupError.message
      }
    });
  }
};