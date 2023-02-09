import { InvalidParamError } from '../../presentation/errors/invalid-param-error'
import { Validation } from '../../presentation/protocols/validation'

export class CompareFieldsValidation implements Validation {
  constructor (
    private readonly fieldName: string,
    private readonly fieldtoCompare: string
  ) {}

  validate (input: any): Error {
    if (input[this.fieldName] !== input[this.fieldtoCompare]) {
      return new InvalidParamError(this.fieldtoCompare)
    }
  }
}
