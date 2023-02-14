import { Validation } from '../protocols/validation'

export const mockValidation = (): Validation => {
	class ValidationStub implements Validation {
		/*
      we return null because if there is no error,
      the method does not return anything, if there
      is an error it will be returned
    */
		validate (input: any): Error | null {
			return null
		}
	}

	return new ValidationStub()
}
