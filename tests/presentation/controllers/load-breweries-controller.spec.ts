import { LoadBreweriesController } from '../../../src/presentation/controllers/load-breweries-controller'
import { serverError } from '../../../src/presentation/helpers/http-helper'
import { throwError } from '../../domain/mocks/test-helpers'
import { LoadBreweriesSpy } from '../mocks/mock-brewery'

type SutTypes = {
  sut: LoadBreweriesController
  loadBreweriesSpy: LoadBreweriesSpy
}

const makeSut = (): SutTypes => {
  const loadBreweriesSpy = new LoadBreweriesSpy()
  const sut = new LoadBreweriesController(loadBreweriesSpy)
  return { sut, loadBreweriesSpy }
}

describe('LoadBreweries Controller', () => {
  it('Should call LoadBreweries', async () => {
    const { sut, loadBreweriesSpy } = makeSut()
    await sut.handle()
    expect(loadBreweriesSpy.call).toBe(true)
  })

  it('Should return 500 if LoadBreweries throws', async () => {
    const { sut, loadBreweriesSpy } = makeSut()
    jest.spyOn(loadBreweriesSpy, 'handle').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle()
    expect(httpResponse).toEqual(serverError(new Error()))
  })
})
