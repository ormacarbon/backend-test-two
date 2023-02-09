import { AddBeer } from '../../../../domain/use-cases/add-beer'
import {
	badRequest,
	noContent,
	serverError
} from '../../../../presentation/helpers/http/http-helper'

import {
	Validation,
	Controller,
	HttpRequest,
	HttpResponse
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

			// Getting data from request

			const {
				abv,
				address,
				category,
				city,
				coordinates,
				country,
				description,
				ibu,
				name,
				state,
				website
			} = httpRequest.body

			await this.addBeer.add({
				abv,
				address,
				category,
				city,
				coordinates,
				country,
				description,
				ibu,
				name,
				state,
				website,
				created_at: new Date()
			})

			return noContent()
		} catch (err: any) {
			return serverError(err)
		}
	}
}
