import { BreweryEntity } from '../../domain/entities/brewery'
import { AddBrewery } from '../../domain/usecases/add-brewery'
import { Controller } from '../abstract/controller'
import { HttpResponse } from '../abstract/http'
import { noContent, serverError } from '../helpers/http-helper'

export class AddBreweryController implements Controller {
  constructor (private readonly addBrewery: AddBrewery) {}
  async handle (request: AddBreweryControllerRequest): Promise<HttpResponse> {
    try {
      await this.addBrewery.handle(request)
      return noContent()
    } catch (error: any) {
      return serverError(error)
    }
  }
}

export type AddBreweryControllerRequest = Omit<BreweryEntity, 'id'>
