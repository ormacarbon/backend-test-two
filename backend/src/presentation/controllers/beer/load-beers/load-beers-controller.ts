import { LoadBeers } from '../../../../domain/use-cases/load-beers'
import { noContent, ok, serverError } from '../../../helpers/http/http-helper'
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

			return beers.length ? ok(beers) : noContent()
		} catch (err: any) {
			return serverError(err)
		}
	}
}
