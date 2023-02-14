import { AddBeer, Controller, HttpRequest, HttpResponse, MissingParamError, ValidateBody, badRequest, created, serverError } from "./add-beer-protocols";

export class AddBeerController implements Controller {
  constructor(
    private addBeer: AddBeer, 
    private validateBeerBody: ValidateBody
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const validate = this.validateBeerBody.validate(httpRequest.body);
      if (typeof validate === "string") {
        return badRequest(new MissingParamError(validate));
      }

      const data = httpRequest.body;

      const beer = await this.addBeer.add(data);
      return created(beer);
    } catch (error) {
      return serverError();
    }
  }
}
