import mockdate from 'mockdate'
import { throwError } from '../../../../data/test/test-helper'
import { mockBeers } from '../../../../domain/test/mock-beer'
import { LoadBeers } from '../../../../domain/use-cases/load-beers'
import { noContent, ok, serverError } from '../../../helpers/http/http-helper'
import { mockLoadBeers } from '../../../test'
import { LoadBeersController } from './load-beers-controller'

type SutTypes = {
  sut: LoadBeersController
  loadBeersStub: LoadBeers
}

const makeSut = (): SutTypes => {
	const loadBeersStub = mockLoadBeers()
	const sut = new LoadBeersController(loadBeersStub)

	return {
		loadBeersStub,
		sut
	}
}

describe('LoadBeers Controller', () => {
	beforeAll(() => {
		mockdate.set(new Date())
	})

	afterAll(() => {
		mockdate.reset()
	})
	test('Should call LoadBeers', async () => {
		const { sut, loadBeersStub } = makeSut()
		const loadAllSpy = jest.spyOn(loadBeersStub, 'loadAll')
		await sut.handle({})
		expect(loadAllSpy).toHaveBeenCalled()
	})

	test('Should return 200 on success', async () => {
		const { sut } = makeSut()
		const httpResponse = await sut.handle({})
		expect(httpResponse).toEqual(ok(mockBeers()))
	})

	test('Should return 204 if LoadBeers returns empty', async () => {
		const { sut, loadBeersStub } = makeSut()
		jest.spyOn(loadBeersStub, 'loadAll').mockReturnValueOnce(Promise.resolve([]))
		const httpResponse = await sut.handle({})
		expect(httpResponse).toEqual(noContent())
	})

	test('Should return 500 if LoadSurvey throws', async () => {
		const { sut, loadBeersStub } = makeSut()
		jest.spyOn(loadBeersStub, 'loadAll').mockImplementationOnce(throwError)
		const httpResponse = await sut.handle({})
		expect(httpResponse).toEqual(serverError(new Error()))
	})
})
