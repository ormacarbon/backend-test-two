import { LoadBreweries } from '../../domain/usecases/load-breweries'
import { Controller } from '../abstract/controller'
import { HttpResponse } from '../abstract/http'
import { ok, serverError } from '../helpers/http-helper'

export class LoadBreweriesController implements Controller {
  constructor (private readonly loadBreweries: LoadBreweries) {}
  async handle (): Promise<HttpResponse> {
    try {
      const breweries = await this.loadBreweries.handle()
      return ok(breweries)
    } catch (error: any) {
      return serverError(error)
    }
  }
}
