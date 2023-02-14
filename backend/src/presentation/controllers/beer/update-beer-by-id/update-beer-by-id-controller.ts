import { UpdateBeerById } from '../../../../domain/use-cases/update-beer-by-id'
import { noContent, serverError } from '../../../helpers/http/http-helper'
import { Controller } from '../../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../../protocols/http'

export class UpdateBeerByIdController implements Controller {
	private readonly updateBeer: UpdateBeerById

	constructor (updateBeer: UpdateBeerById) {
		this.updateBeer = updateBeer
	}

	async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const {
				id
			} = httpRequest.params

			const beerCreateRequest = httpRequest.body
			console.log(beerCreateRequest)
			await this.updateBeer.update(id, beerCreateRequest)

			return noContent()
		} catch (err: any) {
			return serverError(err)
		}
	}
}
