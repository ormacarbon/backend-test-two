import { Controller, HttpRequest, HttpResponse, MissingParamError, ReadOne, UpdateBeer, ValidateBody, badRequest, noContent, notFound, serverError } from "./update-beer-protocols";

export class UpdateBeerController implements Controller {
  constructor(
    private updateBeer: UpdateBeer,
    private readOne: ReadOne,
    private validateBody: ValidateBody
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      if (!httpRequest.params.name) {
        return badRequest(new MissingParamError("name"));
      }

      const { name } = httpRequest.params;
      const beer = await this.readOne.read(name);
      if (!beer) {
        return notFound();
      }

      const validate = this.validateBody.validate(httpRequest.body);
      if (typeof validate === "string") {
        return badRequest(new MissingParamError(validate));
      }

      const beerData = httpRequest.body;
      await this.updateBeer.update(name, beerData);

      return noContent();
    } catch (error) {
      return serverError();
    }
  }
}
