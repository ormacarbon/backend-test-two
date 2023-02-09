import {
  InternalServerError,
  InvalidArgumentError
} from '../../services/err/Errors';

export default function catchErrorsFunctions<T>(error: T) {
  if (error instanceof SyntaxError) {
    if (error.message.includes('JSON')) {
      throw new InvalidArgumentError(`Verify integrations of your file.`);
    }
  }

  if (error instanceof InvalidArgumentError) {
    throw new InvalidArgumentError(error.message);
  }

  if (error) {
    console.log(error);
    throw new InternalServerError('unexpected error');
  }
}
