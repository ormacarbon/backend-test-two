import AbstractHTTPException from './AbstractHttpException';

class NotFoundError extends AbstractHTTPException {
  public statusCode = 404;
}

export default NotFoundError;
