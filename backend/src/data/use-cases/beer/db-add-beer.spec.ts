import mockdate from 'mockdate'
import { mockAddBeerParams, mockBeerModel } from '../../../domain/test/mock-beer'
import { AddBeerRepository } from '../../protocols/db/add-beer-repository'
import { mockAddBeerRepository } from '../../test/mock-db-beer'
import { throwError } from '../../test/test-helper'
import { DbAddBeer } from './db-add-beer'

type SutTypes = {
  sut: DbAddBeer
  addBeerRepositoryStub: AddBeerRepository
}

const makeSut = (): SutTypes => {
	const addBeerRepositoryStub = mockAddBeerRepository()
	const sut = new DbAddBeer(addBeerRepositoryStub)

	return {
		sut,
		addBeerRepositoryStub
	}
}

describe('DbAddBeer Usecase', () => {
	beforeAll(() => {
		mockdate.set(new Date())
	})

	afterAll(() => {
		mockdate.reset()
	})
	test('Should call AddBeerRepository with correct values', async () => {
		const { sut, addBeerRepositoryStub } = makeSut()
		const addSpy = jest.spyOn(addBeerRepositoryStub, 'add')
		await sut.add(mockAddBeerParams())
		expect(addSpy).toHaveBeenCalledWith(mockAddBeerParams())
	})

	test('Should return a beer on success ', async () => {
		const { sut } = makeSut()
		const beer = await sut.add(mockAddBeerParams())
		expect(beer).toEqual(mockBeerModel())
	})

	test('Should throws if AddBeerRepository throws', async () => {
		const { sut, addBeerRepositoryStub } = makeSut()
		jest.spyOn(addBeerRepositoryStub, 'add').mockImplementationOnce(throwError)

		const promise = sut.add(mockAddBeerParams())
		// espera que o metodo encrypt lanse um erro
		await expect(promise).rejects.toThrow()
	})
})
