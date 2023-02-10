import mockdate from 'mockdate'
import { mockBeers } from '../../../domain/test/mock-beer'
import { LoadBeersRepository } from '../../protocols/db/load-beers-repository'
import { mockLoadBeersRepository } from '../../test/mock-db-beer'
import { throwError } from '../../test/test-helper'
import { DbLoadBeers } from './db-load-beers'

type SutTypes = {
  sut: DbLoadBeers
  LoadBeersRepositoryStub: LoadBeersRepository
}

const makeSut = (): SutTypes => {
	const LoadBeersRepositoryStub = mockLoadBeersRepository()
	const sut = new DbLoadBeers(LoadBeersRepositoryStub)

	return {
		sut,
		LoadBeersRepositoryStub
	}
}

describe('DbLoadBeers Usecase', () => {
	beforeAll(() => {
		mockdate.set(new Date())
	})

	afterAll(() => {
		mockdate.reset()
	})
	test('Should call LoadBeersRepository with correct values', async () => {
		const { sut, LoadBeersRepositoryStub } = makeSut()
		const addSpy = jest.spyOn(LoadBeersRepositoryStub, 'loadAll')
		await sut.loadAll()
		expect(addSpy).toHaveBeenCalledWith()
	})

	test('Should return a list of beers on success ', async () => {
		const { sut } = makeSut()
		const beers = await sut.loadAll()
		expect(beers).toEqual(mockBeers())
	})

	test('Should throws if LoadBeersRepository throws', async () => {
		const { sut, LoadBeersRepositoryStub } = makeSut()
		jest.spyOn(LoadBeersRepositoryStub, 'loadAll').mockImplementationOnce(throwError)

		const promise = sut.loadAll()
		// espera que o metodo encrypt lanse um erro
		await expect(promise).rejects.toThrow()
	})
})
