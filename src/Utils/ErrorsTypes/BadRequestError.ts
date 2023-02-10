import AbstractHTTPException from './AbstractHttpException';

class BadRequestError extends AbstractHTTPException {
  public statusCode = 400;
}

export default BadRequestError;
