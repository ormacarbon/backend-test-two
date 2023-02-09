import { LoadBeerById } from '../../../../domain/use-cases/load-beer-by-id'
import { ok, serverError } from '../../../helpers/http/http-helper'
import { Controller } from '../../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../../protocols/http'

export class LoadBeerByIdController implements Controller {
	private readonly loadBeerById: LoadBeerById

	constructor (loadBeerById: LoadBeerById) {
		this.loadBeerById = loadBeerById
	}

	async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const { id } = httpRequest.params
			const beer = await this.loadBeerById.loadById(id)

			return ok(beer)
		} catch (err: any) {
			return serverError(err)
		}
	}
}
