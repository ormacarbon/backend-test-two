import { UpdateBrewery, UpdateBreweryParams } from '../../domain/usecases/update-brewery'
import { Controller } from '../abstract/controller'
import { HttpResponse } from '../abstract/http'
import { noContent } from '../helpers/http-helper'

export class UpdateBreweryController implements Controller {
  constructor (private readonly udpateBrewery: UpdateBrewery) {}
  async handle (request: UpdateBreweryControllerRequest): Promise<HttpResponse> {
    await this.udpateBrewery.handle(request)
    return noContent()
  }
}

export type UpdateBreweryControllerRequest = UpdateBreweryParams
