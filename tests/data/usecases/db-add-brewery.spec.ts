import { DbAddBrewery } from '../../../src/data/usecases/db-add-brewery'
import { mockAddBreweryParams } from '../../domain/mocks/mock-brewery'
import { throwError } from '../../domain/mocks/test-helpers'
import { AddBreweryRepositorySpy } from '../mocks/mock-db-brewery'

type SutTypes = {
  sut: DbAddBrewery
  addBreweryRepositorySpy: AddBreweryRepositorySpy
}

const makeSut = (): SutTypes => {
  const addBreweryRepositorySpy = new AddBreweryRepositorySpy()
  const sut = new DbAddBrewery(addBreweryRepositorySpy)
  return { sut, addBreweryRepositorySpy }
}

describe('DbAddBrewery Usecase', () => {
  it('Should call AddBreweryRepository with correct values', async () => {
    const { sut, addBreweryRepositorySpy } = makeSut()
    const params = mockAddBreweryParams()
    await sut.handle(params)
    expect(addBreweryRepositorySpy.params).toBe(params)
  })

  it('Should throw if AddBreweryRepository throws', async () => {
    const { sut, addBreweryRepositorySpy } = makeSut()
    jest.spyOn(addBreweryRepositorySpy, 'handle').mockImplementationOnce(throwError)
    const result = sut.handle(mockAddBreweryParams())
    await expect(result).rejects.toThrow()
  })
})
