import mockdate from 'mockdate'
import { throwError } from '../../../../data/test/test-helper'
import { mockBeerModel } from '../../../../domain/test/mock-beer'
import { LoadBeerById } from '../../../../domain/use-cases/load-beer-by-id'
import { serverError } from '../../../../presentation/helpers/http/http-helper'
import { mockLoadBeerById } from '../../../../presentation/test'
import { HttpRequest } from '../../../protocols'
import { LoadBeerByIdController } from './load-beer-by-id-controller'

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
  sut: LoadBeerByIdController
  loadBeerByIdStub: LoadBeerById
}

const makeSut = (): SutTypes => {
	const loadBeerByIdStub = mockLoadBeerById()
	const sut = new LoadBeerByIdController(loadBeerByIdStub)

	return {
		sut,
		loadBeerByIdStub
	}
}

describe('LoadBeerById Controller', () => {
	beforeAll(() => {
		mockdate.set(new Date())
	})

	afterAll(() => {
		mockdate.reset()
	})

	test('Should call LoadBeerById with correct values', async () => {
		const { sut, loadBeerByIdStub } = makeSut()
		const addSpy = jest.spyOn(loadBeerByIdStub, 'loadById')
		const httpRequest = makeFakeRequest()
		await sut.handle(httpRequest)
		expect(addSpy).toHaveBeenCalledWith(httpRequest.body)
	})

	test('Should return 500 if LoadBeerById throws', async () => {
		const { sut, loadBeerByIdStub } = makeSut()
		jest.spyOn(loadBeerByIdStub, 'loadById').mockImplementationOnce(throwError)
		const httpRequest = makeFakeRequest()
		const httpResponse = await sut.handle(httpRequest)
		expect(httpResponse).toEqual(serverError(new Error()))
	})

	test('Should return 204 on success', async () => {
		const { sut } = makeSut()
		const httpResponse = await sut.handle(makeFakeRequest())
		expect(httpResponse).toEqual(mockBeerModel())
	})
})
