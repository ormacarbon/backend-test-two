import mockdate from 'mockdate'
import { throwError } from '../../../../data/test/test-helper'
import { UpdateBeerById } from '../../../../domain/use-cases/update-beer-by-id'
import { noContent, serverError } from '../../../helpers/http/http-helper'
import { HttpRequest } from '../../../protocols'
import { mockUpdateBeerById } from '../../../test'
import { UpdateBeerByIdController } from './update-beer-by-id-controller'

const makeFakeRequest = (): HttpRequest => ({
	params: 'any_id',
	body: {
		name: 'other_name',
		state: 'other_state'
	}
})

type SutTypes = {
  sut: UpdateBeerByIdController
  updateBeerByIdStub: UpdateBeerById
}

const makeSut = (): SutTypes => {
	const updateBeerByIdStub = mockUpdateBeerById()
	const sut = new UpdateBeerByIdController(updateBeerByIdStub)

	return {
		updateBeerByIdStub,
		sut
	}
}

describe('UpdateBeerById Controller', () => {
	beforeAll(() => {
		mockdate.set(new Date())
	})

	afterAll(() => {
		mockdate.reset()
	})
	test('Should call UpdateBeerById', async () => {
		const { sut, updateBeerByIdStub } = makeSut()
		const updateSpy = jest.spyOn(updateBeerByIdStub, 'update')
		await sut.handle(makeFakeRequest())
		expect(updateSpy).toHaveBeenCalled()
	})

	test('Should return 204 if UpdateBeerById succeds', async () => {
		const { sut } = makeSut()
		const httpResponse = await sut.handle(makeFakeRequest())
		expect(httpResponse).toEqual(noContent())
	})

	test('Should return 500 if LoadSurvey throws', async () => {
		const { sut, updateBeerByIdStub } = makeSut()
		jest.spyOn(updateBeerByIdStub, 'update').mockImplementationOnce(throwError)
		const httpResponse = await sut.handle({})
		expect(httpResponse).toEqual(serverError(new Error()))
	})
})
