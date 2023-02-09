import { errorCatalog, ErrorTypes } from '../errors/ErrorTypes';
import { ErrorRequestHandler } from 'express';

import { ZodError } from 'zod';

const errorHandler: ErrorRequestHandler = (err: Error | ZodError, _req, res,) => {
  if (err instanceof ZodError) {
    return res.status(400).json({ error: err.issues[0].message });
  }

  const messageAsErrorType = err.message as keyof typeof ErrorTypes;

  const mappedError = errorCatalog[messageAsErrorType];
  
  if (mappedError) {
    const { httpStatus, error } = mappedError;
    return res.status(httpStatus).json({ error });
  }

  // eslint-disable-next-line no-console
  console.error(err);
  return res.status(500).json({ message: 'internal error' });
};

export default errorHandler;