import {
  InternalServerError,
  InvalidArgumentError
} from '../../services/err/Errors';

export default function cacthErrosFunctions<T>(error: T): void {
  if (error instanceof InvalidArgumentError) {
    throw new InvalidArgumentError(error.message);
  }

  console.log(error);
  if (error) {
    throw new InternalServerError(error as string);
  }
}
