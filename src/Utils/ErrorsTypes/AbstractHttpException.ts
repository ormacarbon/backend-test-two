abstract class AbstractHTTPException extends Error {
  public abstract statusCode: number;
}

export default AbstractHTTPException;
