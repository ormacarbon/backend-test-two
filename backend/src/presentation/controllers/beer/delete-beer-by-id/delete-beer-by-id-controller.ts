import { DeleteBeerById } from '../../../../domain/use-cases/delete-beer-by-id'
import { noContent, serverError } from '../../../helpers/http/http-helper'
import { Controller } from '../../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../../protocols/http'

export class DeleteBeerByIdController implements Controller {
	private readonly deleteBeer: DeleteBeerById

	constructor (deleteBeer: DeleteBeerById) {
		this.deleteBeer = deleteBeer
	}

	async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const {
				id
			} = httpRequest.params

			await this.deleteBeer.deleteById(id)

			return noContent()
		} catch (err: any) {
			return serverError(err)
		}
	}
}
