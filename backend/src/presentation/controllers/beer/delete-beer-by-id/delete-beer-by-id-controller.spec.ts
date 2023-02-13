import mockdate from 'mockdate'
import { throwError } from '../../../../data/test/test-helper'
import { DeleteBeerById } from '../../../../domain/use-cases/delete-beer-by-id'
import { noContent, serverError } from '../../../../presentation/helpers/http/http-helper'
import { mockDeleteBeerById } from '../../../../presentation/test'
import { HttpRequest } from '../../../protocols'
import { DeleteBeerByIdController } from './delete-beer-by-id-controller'

const makeFakeRequest = (): HttpRequest => ({
	params: 'any_id'
})

type SutTypes = {
  sut: DeleteBeerByIdController
  deleteBeerByIdStub: DeleteBeerById
}

const makeSut = (): SutTypes => {
	const deleteBeerByIdStub = mockDeleteBeerById()
	const sut = new DeleteBeerByIdController(deleteBeerByIdStub)

	return {
		sut,
		deleteBeerByIdStub
	}
}

describe('DeleteBeerById Controller', () => {
	beforeAll(() => {
		mockdate.set(new Date())
	})

	afterAll(() => {
		mockdate.reset()
	})

	test('Should call DeleteBeerById with correct values', async () => {
		const { sut, deleteBeerByIdStub } = makeSut()
		const addSpy = jest.spyOn(deleteBeerByIdStub, 'deleteById')
		const httpRequest = makeFakeRequest()
		await sut.handle(httpRequest)
		expect(addSpy).toHaveBeenCalledWith(httpRequest.body)
	})

	test('Should return 500 if DeleteBeerById throws', async () => {
		const { sut, deleteBeerByIdStub } = makeSut()
		jest.spyOn(deleteBeerByIdStub, 'deleteById').mockImplementationOnce(throwError)
		const httpRequest = makeFakeRequest()
		const httpResponse = await sut.handle(httpRequest)
		expect(httpResponse).toEqual(serverError(new Error()))
	})

	test('Should return 204 on success', async () => {
		const { sut } = makeSut()
		const httpResponse = await sut.handle(makeFakeRequest())
		expect(httpResponse).toEqual(noContent())
	})
})
