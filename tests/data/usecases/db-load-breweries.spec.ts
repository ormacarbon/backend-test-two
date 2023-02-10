import { DbLoadBreweries } from '../../../src/data/usecases/db-load-breweries'
import { LoadBreweriesRepositorySpy } from '../mocks/mock-db-brewery'

describe('DbLoadBreweries Usecase', () => {
  it('Should call LoadBreweriesRepository', async () => {
    const loadBreweriesRepositorySpy = new LoadBreweriesRepositorySpy()
    const sut = new DbLoadBreweries(loadBreweriesRepositorySpy)
    await sut.handle()
    expect(loadBreweriesRepositorySpy.call).toBe(true)
  })
})
