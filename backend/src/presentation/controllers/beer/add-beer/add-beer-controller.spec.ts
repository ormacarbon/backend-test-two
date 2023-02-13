import mockdate from 'mockdate'
import { throwError } from '../../../../data/test/test-helper'
import { AddBeer } from '../../../../domain/use-cases/add-beer'
import { badRequest, ok, serverError } from '../../../../presentation/helpers/http/http-helper'
import { mockAddBeer, mockValidation } from '../../../../presentation/test'
import { HttpRequest, Validation } from '../../../protocols'
import { AddBeerController } from './add-beer-controller'

const makeFakeRequest = (): HttpRequest => ({
	body: {
		abv: 8.918797384901016,
		address: 'any_address',
		category: 'any_category',
		city: 'any_city',
		coordinates: [
			41.0638,
			-80.0556
		],
		country: 'any_country',
		description: 'any_description',
		ibu: 104,
		name: 'any_name',
		state: 'any_state',
		website: 'any_state',
		created_at: new Date()
	}
})

type SutTypes = {
  sut: AddBeerController
  validationStub: Validation
  addBeerStub: AddBeer
}

const makeSut = (): SutTypes => {
	const validationStub = mockValidation()
	const addBeerStub = mockAddBeer()
	const sut = new AddBeerController(validationStub, addBeerStub)

	return {
		sut,
		validationStub,
		addBeerStub
	}
}

describe('AddBeer Controller', () => {
	beforeAll(() => {
		mockdate.set(new Date())
	})

	afterAll(() => {
		mockdate.reset()
	})

	test('Should call Validation with correct values', async () => {
		const { sut, validationStub } = makeSut()
		const validateSpy = jest.spyOn(validationStub, 'validate')
		const httpRequest = makeFakeRequest()
		await sut.handle(httpRequest)
		expect(validateSpy).toHaveBeenCalledWith(httpRequest.body)
	})

	test('Should return 400 with if Validation fails', async () => {
		const { sut, validationStub } = makeSut()
		jest.spyOn(validationStub, 'validate').mockReturnValueOnce(new Error())
		const httpResponse = await sut.handle(makeFakeRequest())
		expect(httpResponse).toEqual(badRequest(new Error()))
	})

	test('Should call AddBeer with correct values', async () => {
		const { sut, addBeerStub } = makeSut()
		const addSpy = jest.spyOn(addBeerStub, 'add')
		const httpRequest = makeFakeRequest()
		await sut.handle(httpRequest)
		expect(addSpy).toHaveBeenCalledWith(httpRequest.body)
	})

	test('Should return 500 if AddBeer throws', async () => {
		const { sut, addBeerStub } = makeSut()
		jest.spyOn(addBeerStub, 'add').mockImplementationOnce(throwError)
		const httpRequest = makeFakeRequest()
		const httpResponse = await sut.handle(httpRequest)
		expect(httpResponse).toEqual(serverError(new Error()))
	})

	test('Should return 200 on success', async () => {
		const { sut } = makeSut()
		const httpResponse = await sut.handle(makeFakeRequest())
		expect(httpResponse).toEqual(ok(httpResponse))
	})
})
