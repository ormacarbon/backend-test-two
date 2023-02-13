import { DbDeleteBrewery } from '../../../src/data/usecases/db-delete-brewery'
import { mockDeleteBreweryParams } from '../../domain/mocks/mock-brewery'
import { throwError } from '../../domain/mocks/test-helpers'
import { DeleteBreweryRepositorySpy, LoadBreweryRepositorySpy } from '../mocks/mock-db-brewery'

type SutTypes = {
  sut: DbDeleteBrewery
  deleteBreweryRepositorySpy: DeleteBreweryRepositorySpy
  loadBreweryRepositorySpy: LoadBreweryRepositorySpy
}

const makeSut = (): SutTypes => {
  const loadBreweryRepositorySpy = new LoadBreweryRepositorySpy()
  const deleteBreweryRepositorySpy = new DeleteBreweryRepositorySpy()
  const sut = new DbDeleteBrewery(deleteBreweryRepositorySpy, loadBreweryRepositorySpy)
  return { deleteBreweryRepositorySpy, sut, loadBreweryRepositorySpy }
}

describe('DbDeleteBrewery Usecase', () => {
  it('Should call DeleteBreweryRepository with correct values', async () => {
    const { sut, deleteBreweryRepositorySpy } = makeSut()
    const params = mockDeleteBreweryParams()
    await sut.handle(params)
    expect(deleteBreweryRepositorySpy.params).toBe(params)
  })

  it('Should call LoadBreweryRepository with correct values', async () => {
    const { sut, loadBreweryRepositorySpy } = makeSut()
    const params = mockDeleteBreweryParams()
    await sut.handle(params)
    expect(loadBreweryRepositorySpy.params).toEqual({ id: params.id })
  })

  it('Should throw if DeleteBreweryRepository throws', async () => {
    const { sut, deleteBreweryRepositorySpy } = makeSut()
    jest.spyOn(deleteBreweryRepositorySpy, 'handle').mockImplementationOnce(throwError)
    const response = sut.handle(mockDeleteBreweryParams())
    await expect(response).rejects.toThrow()
  })

  it('Should throw if LoadBreweryRepository throws', async () => {
    const { sut, loadBreweryRepositorySpy } = makeSut()
    jest.spyOn(loadBreweryRepositorySpy, 'handle').mockImplementationOnce(throwError)
    const response = sut.handle(mockDeleteBreweryParams())
    await expect(response).rejects.toThrow()
  })

  it('Should return true on success', async () => {
    const { sut } = makeSut()
    const response = await sut.handle(mockDeleteBreweryParams())
    expect(response).toBe(true)
  })
})
