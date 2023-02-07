import { MissingParamError } from "../../erros/missing-param-error";
import { badRequest } from "../../helpers/http-helpers";
import { Controller } from "../../protocols/controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";

export class AddBeerController implements Controller {
  handle(httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ["abv", "address", "category", "city", "coordinates", "country", "description", "ibu", "name", "state", "website"];
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }
  }
}
