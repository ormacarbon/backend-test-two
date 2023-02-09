import { Controller, DeleteBeer, HttpRequest, HttpResponse, MissingParamError, ReadOne, badRequest, noContent, notFound, serverError } from "./delete-beer-protocols";

export class DeleteBeerController implements Controller {
  constructor(
    private deleteBeer: DeleteBeer,
    private readOne: ReadOne
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

      await this.deleteBeer.delete(name);
      return noContent();
    } catch (error) {
      return serverError();
    }
  }
}
