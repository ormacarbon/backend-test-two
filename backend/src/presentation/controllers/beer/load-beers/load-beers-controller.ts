import { LoadBeers } from '../../../../domain/use-cases/load-beers'
import { ok, serverError } from '../../../helpers/http/http-helper'
import { Controller } from '../../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../../protocols/http'

export class LoadBeersController implements Controller {
	private readonly loadBeers: LoadBeers

	constructor (loadBeers: LoadBeers) {
		this.loadBeers = loadBeers
	}

	async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const beers = await this.loadBeers.loadAll()

			return ok(beers)
		} catch (err: any) {
			return serverError(err)
		}
	}
}
