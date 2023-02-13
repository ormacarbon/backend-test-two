import { Controller, HttpRequest, HttpResponse, MissingParamError, ReadOne, badRequest, notFound, ok, serverError } from "./read-one-protocols";

export class ReadOneController implements Controller {
  constructor(private readOne: ReadOne) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      if (!httpRequest.query.name) {
        return badRequest(new MissingParamError("name"));
      }

      const { name } = httpRequest.query;
      const beer = await this.readOne.read(name);

      if (!beer) {
        return notFound();
      }

      return ok(beer);
    } catch (error) {
      return serverError();
    }
  }
}