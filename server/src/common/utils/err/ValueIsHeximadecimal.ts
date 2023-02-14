import { InvalidArgumentError } from '../../../services/err/Errors';
import catchErrorsFunctions from './catchErrorsFunction';

export default function ValueIsHeximaDecimal(data: string) {
  try {
    /**
     * @var regex   Check if id param is hexadecimal
     * @default
     * @type {RegExp}
     */

    const regex = /[0-9A-Fa-f]{6}/g;
    if (!regex.test(data)) {
      throw new InvalidArgumentError(
        'Error: not-valid-param; hexadecimal neccessity'
      );
    }
  } catch (error) {
    catchErrorsFunctions(error);
  }
}
