import mockdate from 'mockdate'
import { mockBeerModel } from '../../../domain/test/mock-beer'
import { LoadBeerByIdRepository } from '../../protocols/db/load-beer-by-id-repository'
import { mockLoadBeerByIdRepository } from '../../test/mock-db-beer'
import { throwError } from '../../test/test-helper'
import { DbLoadBeerById } from './db-load-beer-by-id'

type SutTypes = {
  sut: DbLoadBeerById
  LoadBeerByIdRepositoryStub: LoadBeerByIdRepository
}

const makeSut = (): SutTypes => {
	const LoadBeerByIdRepositoryStub = mockLoadBeerByIdRepository()
	const sut = new DbLoadBeerById(LoadBeerByIdRepositoryStub)

	return {
		sut,
		LoadBeerByIdRepositoryStub
	}
}

describe('DbLoadBeerById Usecase', () => {
	beforeAll(() => {
		mockdate.set(new Date())
	})

	afterAll(() => {
		mockdate.reset()
	})
	test('Should call LoadBeerByIdRepository with correct values', async () => {
		const { sut, LoadBeerByIdRepositoryStub } = makeSut()
		const addSpy = jest.spyOn(LoadBeerByIdRepositoryStub, 'loadById')
		await sut.loadById('any_id')
		expect(addSpy).toHaveBeenCalledWith('any_id')
	})

	test('Should return a beer on success ', async () => {
		const { sut } = makeSut()
		const beer = await sut.loadById('any_id')
		expect(beer).toEqual(mockBeerModel())
	})

	test('Should throws if LoadBeerByIdRepository throws', async () => {
		const { sut, LoadBeerByIdRepositoryStub } = makeSut()
		jest.spyOn(LoadBeerByIdRepositoryStub, 'loadById').mockImplementationOnce(throwError)

		const promise = sut.loadById('any_id')
		// espera que o metodo encrypt lanse um erro
		await expect(promise).rejects.toThrow()
	})
})
