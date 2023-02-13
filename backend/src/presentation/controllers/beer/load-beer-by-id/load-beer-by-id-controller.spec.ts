import mockdate from 'mockdate'
import { throwError } from '../../../../data/test/test-helper'
import { mockBeerModel } from '../../../../domain/test/mock-beer'
import { LoadBeerById } from '../../../../domain/use-cases/load-beer-by-id'
import { ok, serverError } from '../../../../presentation/helpers/http/http-helper'
import { mockLoadBeerById } from '../../../../presentation/test'
import { HttpRequest } from '../../../protocols'
import { LoadBeerByIdController } from './load-beer-by-id-controller'

const makeFakeRequest = (): HttpRequest => ({
	params: {
		id: 'any_id'
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
		const loadByIdSpy = jest.spyOn(loadBeerByIdStub, 'loadById')
		const httpRequest = makeFakeRequest()
		await sut.handle(httpRequest)
		expect(loadByIdSpy).toHaveBeenCalledWith('any_id')
	})

	test('Should return 500 if LoadBeerById throws', async () => {
		const { sut, loadBeerByIdStub } = makeSut()
		jest.spyOn(loadBeerByIdStub, 'loadById').mockImplementationOnce(throwError)
		const httpRequest = makeFakeRequest()
		const httpResponse = await sut.handle(httpRequest)
		expect(httpResponse).toEqual(serverError(new Error()))
	})

	test('Should return 200 on success', async () => {
		const { sut } = makeSut()
		const httpResponse = await sut.handle(makeFakeRequest())
		expect(httpResponse).toEqual(ok(mockBeerModel()))
	})
})
