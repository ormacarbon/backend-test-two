import { RequestHandler } from 'express';
import * as yup from "yup";

type IValidation =
  (field: "body" | "headers" | "params" | "query", scheme: yup.SchemaOf<any>) => RequestHandler;

export const validation: IValidation = (field, scheme) => async (req, res, next) => {
  try {
    await scheme.validate(req[field]);
    next();
  } catch (err) {
    const yupError = err as yup.ValidationError;
    res.status(500).json({
      errors: {
        default: yupError.message
      }
    });
  }
};