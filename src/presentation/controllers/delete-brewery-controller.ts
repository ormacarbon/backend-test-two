import { DeleteBrewery } from '../../domain/usecases/delete-brewery'
import { Controller } from '../abstract/controller'
import { HttpResponse } from '../abstract/http'
import { InvalidParamError } from '../errors/invalid-param-error'
import { forbidden, noContent, serverError } from '../helpers/http-helper'

export class DeleteBreweryController implements Controller {
  constructor (private readonly deleteBrewery: DeleteBrewery) {}
  async handle (request: DeleteBreweryControllerRequest): Promise<HttpResponse> {
    try {
      const result = await this.deleteBrewery.handle(request)
      if (!result) {
        return forbidden(new InvalidParamError('breweryId'))
      }
      return noContent()
    } catch (error: any) {
      return serverError(error)
    }
  }
}

export type DeleteBreweryControllerRequest = {
  id: string
}
