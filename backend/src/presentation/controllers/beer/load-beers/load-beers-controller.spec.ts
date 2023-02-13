import { LoadBeers } from '../../../../domain/use-cases/load-beers'
import { mockLoadBeers } from '../../../test'
import { LoadBeersController } from './load-beers-controller'

type SutTypes = {
  sut: LoadBeersController
  LoadBeersStub: LoadBeers
}

const makeSut = (): SutTypes => {
	const LoadBeersStub = mockLoadBeers()
	const sut = new LoadBeersController(LoadBeersStub)

	return {
		LoadBeersStub,
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
		const { sut, LoadBeersStub } = makeSut()
		const loadSpy = jest.spyOn(LoadBeersStub, 'load')
		await sut.handle({})
		expect(loadSpy).toHaveBeenCalled()
	})

	test('Should return 200 on success', async () => {
		const { sut } = makeSut()
		const httpResponse = await sut.handle({})
		expect(httpResponse).toEqual(ok(mockSurveys()))
	})

	test('Should return 204 if LoadBeers returns empty', async () => {
		const { sut, LoadBeersStub } = makeSut()
		jest.spyOn(LoadBeersStub, 'load').mockReturnValueOnce(Promise.resolve([]))
		const httpResponse = await sut.handle({})
		expect(httpResponse).toEqual(noContent())
	})

	test('Should return 500 if LoadSurvey throws', async () => {
		const { sut, LoadBeersStub } = makeSut()
		jest.spyOn(LoadBeersStub, 'load').mockImplementationOnce(throwError)
		const httpResponse = await sut.handle({})
		expect(httpResponse).toEqual(serverError(new Error()))
	})
})
