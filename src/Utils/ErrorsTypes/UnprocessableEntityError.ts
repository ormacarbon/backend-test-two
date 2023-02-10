import AbstractHTTPException from './AbstractHttpException';

class UnprocessableEntityError extends AbstractHTTPException {
  public statusCode = 422;
}

export default UnprocessableEntityError;
