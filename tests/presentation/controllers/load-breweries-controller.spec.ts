import { LoadBreweriesController } from '../../../src/presentation/controllers/load-breweries-controller'
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
})
