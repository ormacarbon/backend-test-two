import {
  InternalServerError,
  InvalidArgumentError
} from '../../services/err/Errors';

export default function cacthErrosFunctions<T>(error: T): void {
  if (error instanceof SyntaxError) {
    console.log(error.message);

    if (error.message.includes('JSON')) {
      throw new InvalidArgumentError(`Verify integrations of your file.`);
    }
  }

  if (error instanceof InvalidArgumentError) {
    throw new InvalidArgumentError(error.message);
  }

  if (error) {
    throw new InternalServerError(error as string);
  }
}
