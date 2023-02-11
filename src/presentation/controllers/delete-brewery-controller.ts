import { DeleteBrewery } from '../../domain/usecases/delete-brewery'
import { Controller } from '../abstract/controller'
import { HttpResponse } from '../abstract/http'
import { noContent } from '../helpers/http-helper'

export class DeleteBreweryController implements Controller {
  constructor (private readonly deleteBrewery: DeleteBrewery) {}
  async handle (request: DeleteBreweryControllerRequest): Promise<HttpResponse> {
    await this.deleteBrewery.handle(request)
    return noContent()
  }
}

export type DeleteBreweryControllerRequest = {
  id: string
}
