import { BreweryEntity } from '../../domain/entities/brewery'
import { AddBrewery } from '../../domain/usecases/add-brewery'
import { Controller } from '../abstract/controller'
import { HttpResponse } from '../abstract/http'
import { noContent } from '../helpers/http-helper'

export class AddBreweryController implements Controller {
  constructor (private readonly addBrewery: AddBrewery) {}
  async handle (request: AddBreweryControllerRequest): Promise<HttpResponse> {
    await this.addBrewery.handle(request)
    return noContent()
  }
}

export type AddBreweryControllerRequest = Omit<BreweryEntity, 'id'>
