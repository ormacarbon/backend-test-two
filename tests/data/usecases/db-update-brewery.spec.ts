import { DbUpdateBrewery } from '../../../src/data/usecases/db-update-brewery'
import { mockUpdateBreweryParams } from '../../domain/mocks/mock-brewery'
import { LoadBreweryRepositorySpy, UpdateBreweryRepositorySpy } from '../mocks/mock-db-brewery'

type SutTypes = {
  loadBreweryRepositorySpy: LoadBreweryRepositorySpy
  updateBrewerySpy: UpdateBreweryRepositorySpy
  sut: DbUpdateBrewery
}

const makeSut = (): SutTypes => {
  const loadBreweryRepositorySpy = new LoadBreweryRepositorySpy()
  const updateBrewerySpy = new UpdateBreweryRepositorySpy()
  const sut = new DbUpdateBrewery(updateBrewerySpy, loadBreweryRepositorySpy)
  return {
    sut,
    updateBrewerySpy,
    loadBreweryRepositorySpy
  }
}

describe('DbUpdateBrewery Usecase', () => {
  it('Should call UpdateBreweryRepository with correct values', async () => {
    const { sut, updateBrewerySpy } = makeSut()
    const params = mockUpdateBreweryParams()
    await sut.handle(params)
    expect(updateBrewerySpy.params).toBe(params)
  })

  it('Should call LoadBreweryRepository with correct values', async () => {
    const { sut, loadBreweryRepositorySpy } = makeSut()
    const params = mockUpdateBreweryParams()
    await sut.handle(params)
    expect(loadBreweryRepositorySpy.params).toEqual({ id: params.id })
  })
})
