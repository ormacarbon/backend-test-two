import { DbLoadBreweries } from '../../../src/data/usecases/db-load-breweries'
import { LoadBreweriesRepositorySpy } from '../mocks/mock-db-brewery'

type SutTypes = {
  loadBreweriesRepositorySpy: LoadBreweriesRepositorySpy
  sut: DbLoadBreweries
}

const makeSut = (): SutTypes => {
  const loadBreweriesRepositorySpy = new LoadBreweriesRepositorySpy()
  const sut = new DbLoadBreweries(loadBreweriesRepositorySpy)
  return { sut, loadBreweriesRepositorySpy }
}

describe('DbLoadBreweries Usecase', () => {
  it('Should call LoadBreweriesRepository', async () => {
    const { sut, loadBreweriesRepositorySpy } = makeSut()
    await sut.handle()
    expect(loadBreweriesRepositorySpy.call).toBe(true)
  })
})
