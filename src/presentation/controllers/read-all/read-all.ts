import { Controller, HttpRequest, HttpResponse, ReadAll, ok, serverError } from "./read-all-protocols";

export class ReadAllController implements Controller {
  constructor(private readAll: ReadAll) {}

  async handle(_httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const beers = await this.readAll.read();

      return ok(beers);
    } catch (error) {
      return serverError();
    }
  }
}