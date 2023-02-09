import { LoadBreweries } from '../../domain/usecases/load-breweries'
import { Controller } from '../abstract/controller'
import { HttpResponse } from '../abstract/http'

export class LoadBreweriesController implements Controller {
  constructor (private readonly loadBreweries: LoadBreweries) {}
  async handle (): Promise<HttpResponse> {
    await this.loadBreweries.handle()
    return {
      statusCode: 200,
      body: {}
    }
  }
}
