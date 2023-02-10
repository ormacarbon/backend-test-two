import mockdate from 'mockdate'
import { mockUpdateBeerByIdParams } from '../../../domain/test/mock-beer'
import { UpdateBeerByIdRepository } from '../../protocols/db/update-beer-by-id-repository'
import { mockUpdateBeerByIdRepository } from '../../test/mock-db-beer'
import { throwError } from '../../test/test-helper'
import { DbUpdateBeerById } from './db-update-beer-by-id'

type SutTypes = {
  sut: DbUpdateBeerById
  UpdateBeerByIdRepositoryStub: UpdateBeerByIdRepository
}

const makeSut = (): SutTypes => {
	const UpdateBeerByIdRepositoryStub = mockUpdateBeerByIdRepository()
	const sut = new DbUpdateBeerById(UpdateBeerByIdRepositoryStub)

	return {
		sut,
		UpdateBeerByIdRepositoryStub
	}
}

describe('DbUpdateBeerById Usecase', () => {
	beforeAll(() => {
		mockdate.set(new Date())
	})

	afterAll(() => {
		mockdate.reset()
	})
	test('Should call UpdateBeerByIdRepository with correct values', async () => {
		const { sut, UpdateBeerByIdRepositoryStub } = makeSut()
		const addSpy = jest.spyOn(UpdateBeerByIdRepositoryStub, 'update')
		await sut.update('any_id', mockUpdateBeerByIdParams())
		expect(addSpy).toHaveBeenCalledWith('any_id', mockUpdateBeerByIdParams())
	})

	test('Should throws if UpdateBeerByIdRepository throws', async () => {
		const { sut, UpdateBeerByIdRepositoryStub } = makeSut()
		jest.spyOn(UpdateBeerByIdRepositoryStub, 'update').mockImplementationOnce(throwError)

		const promise = sut.update('any_id', mockUpdateBeerByIdParams())
		// espera que o metodo encrypt lanse um erro
		await expect(promise).rejects.toThrow()
	})
})
