import { faker } from '@faker-js/faker'
import { DeleteBreweryController, DeleteBreweryControllerRequest } from '../../../src/presentation/controllers/delete-brewery-controller'
import { DeleteBrewerySpy } from '../mocks/mock-brewery'
import { forbidden, noContent, serverError } from '../../../src/presentation/helpers/http-helper'
import { throwError } from '../../domain/mocks/test-helpers'
import { InvalidParamError } from '../../../src/presentation/errors/invalid-param-error'

const mockRequest = (): DeleteBreweryControllerRequest => ({
  id: faker.datatype.uuid()
})

type SutTypes = {
  deleteBrewerySpy: DeleteBrewerySpy
  sut: DeleteBreweryController
}

const makeSut = (): SutTypes => {
  const deleteBrewerySpy = new DeleteBrewerySpy()
  const sut = new DeleteBreweryController(deleteBrewerySpy)
  return { deleteBrewerySpy, sut }
}

describe('DeleteBrewery Controller', () => {
  it('Should call DeleteBrewery with correct values', async () => {
    const { sut, deleteBrewerySpy } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    expect(deleteBrewerySpy.params).toBe(request)
  })

  it('Should return 204 on success', async () => {
    const { sut } = makeSut()
    const result = await sut.handle(mockRequest())
    expect(result).toEqual(noContent())
  })

  it('Should return 403 if not exists brewery in database', async () => {
    const { sut, deleteBrewerySpy } = makeSut()
    deleteBrewerySpy.result = false
    const result = await sut.handle(mockRequest())
    expect(result).toEqual(forbidden(new InvalidParamError('breweryId')))
  })

  it('Should return 500 if DeleteBrewery throws', async () => {
    const { sut, deleteBrewerySpy } = makeSut()
    jest.spyOn(deleteBrewerySpy, 'handle').mockImplementationOnce(throwError)
    const result = await sut.handle(mockRequest())
    expect(result).toEqual(serverError(new Error()))
  })
})
