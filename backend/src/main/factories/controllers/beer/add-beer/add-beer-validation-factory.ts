import { Validation } from '../../../../../presentation/protocols'
import { RequiredFieldsValidation } from '../../../../../validations/validators/required-fields-validation'
import { ValidationComposite } from '../../../../../validations/validators/validation-composite'

export const makeAddBeerValidation = (): ValidationComposite => {
	// removing category and description because both fields are optional
	const validations: Validation[] = []
	for (const field of ['abv', 'address', 'city', 'coordinates', 'country', 'ibu', 'name', 'state']) {
		validations.push(new RequiredFieldsValidation(field))
	}
	return new ValidationComposite(validations)
}
