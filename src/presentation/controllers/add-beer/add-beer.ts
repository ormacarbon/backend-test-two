import { AddBeer } from "../../../domain/useCases/add-beer";
import { MissingParamError } from "../../erros/missing-param-error";
import { badRequest, created, serverError } from "../../helpers/http-helpers";
import { Controller } from "../../protocols/controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";

export class AddBeerController implements Controller {
  constructor(private addBeer: AddBeer) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredFields = ["abv", "address", "category", "city", "coordinates", "country", "description", "ibu", "name", "state", "website"];
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field));
        }
      }

      const data = httpRequest.body;

      const beer = await this.addBeer.add(data);
      return created(beer);
    } catch (error) {
      return serverError();
    }
  }
}
