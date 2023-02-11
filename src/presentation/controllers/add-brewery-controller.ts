import { AddBrewery } from '../../domain/usecases/add-brewery'
import { Controller } from '../abstract/controller'
import { HttpResponse } from '../abstract/http'
import { noContent } from '../helpers/http-helper'

export class AddBreweryController implements Controller {
  constructor (private readonly addBrewery: AddBrewery) {}
  async handle (request: any): Promise<HttpResponse> {
    await this.addBrewery.handle(request)
    return noContent()
  }
}
