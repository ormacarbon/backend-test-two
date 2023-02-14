import { LoadBreweries } from '../../domain/usecases/load-breweries'
import { Controller } from '../abstract/controller'
import { HttpResponse } from '../abstract/http'
import { noContent, ok, serverError } from '../helpers/http-helper'

export class LoadBreweriesController implements Controller {
  constructor (private readonly loadBreweries: LoadBreweries) {}
  async handle (): Promise<HttpResponse> {
    try {
      const breweries = await this.loadBreweries.handle()
      if (breweries.length) {
        return ok(breweries)
      }
      return noContent()
    } catch (error: any) {
      return serverError(error)
    }
  }
}
