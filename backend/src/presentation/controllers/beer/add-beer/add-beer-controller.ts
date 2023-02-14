import { AddBeer } from '../../../../domain/use-cases/add-beer'
import {
	badRequest, ok,
	serverError
} from '../../../../presentation/helpers/http/http-helper'

import {
	Controller,
	HttpRequest,
	HttpResponse, Validation
} from '../../../protocols'

export class AddBeerController implements Controller {
	private readonly validation: Validation
	private readonly addBeer: AddBeer

	constructor (validation: Validation, addBeer: AddBeer) {
		this.validation = validation
		this.addBeer = addBeer
	}

	async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const error = this.validation.validate(httpRequest.body)
			if (error) {
				return badRequest(error)
			}

			const beerRequest = httpRequest.body

			const beer = await this.addBeer.add(beerRequest)

			return ok(beer)
		} catch (err: any) {
			return serverError(err)
		}
	}
}
