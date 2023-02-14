import mockdate from 'mockdate'
import { DeleteBeerByIdRepository } from '../../protocols/db/delete-beer-by-id-repository'
import { mockDeleteBeerByIdRepository } from '../../test/mock-db-beer'
import { throwError } from '../../test/test-helper'
import { DbDeleteBeerById } from './db-delete-beer-by-id'

type SutTypes = {
  sut: DbDeleteBeerById
  deleteBeerByIdRepositoryStub: DeleteBeerByIdRepository
}

const makeSut = (): SutTypes => {
	const deleteBeerByIdRepositoryStub = mockDeleteBeerByIdRepository()
	const sut = new DbDeleteBeerById(deleteBeerByIdRepositoryStub)

	return {
		sut,
		deleteBeerByIdRepositoryStub
	}
}

describe('DbDeleteBeerById Usecase', () => {
	beforeAll(() => {
		mockdate.set(new Date())
	})

	afterAll(() => {
		mockdate.reset()
	})
	test('Should call DeleteBeerByIdRepository with correct values', async () => {
		const { sut, deleteBeerByIdRepositoryStub } = makeSut()
		const addSpy = jest.spyOn(deleteBeerByIdRepositoryStub, 'deleteById')
		await sut.deleteById('any_id')
		expect(addSpy).toHaveBeenCalledWith('any_id')
	})

	test('Should throws if DeleteBeerByIdRepository throws', async () => {
		const { sut, deleteBeerByIdRepositoryStub } = makeSut()
		jest.spyOn(deleteBeerByIdRepositoryStub, 'deleteById').mockImplementationOnce(throwError)

		const promise = sut.deleteById('any_id')
		// espera que o metodo encrypt lanse um erro
		await expect(promise).rejects.toThrow()
	})
})
