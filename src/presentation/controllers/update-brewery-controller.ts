import { UpdateBrewery, UpdateBreweryParams } from '../../domain/usecases/update-brewery'
import { Controller } from '../abstract/controller'
import { HttpResponse } from '../abstract/http'
import { noContent, serverError } from '../helpers/http-helper'

export class UpdateBreweryController implements Controller {
  constructor (private readonly udpateBrewery: UpdateBrewery) {}
  async handle (request: UpdateBreweryControllerRequest): Promise<HttpResponse> {
    try {
      await this.udpateBrewery.handle(request)
      return noContent()
    } catch (error: any) {
      return serverError(error)
    }
  }
}

export type UpdateBreweryControllerRequest = UpdateBreweryParams
