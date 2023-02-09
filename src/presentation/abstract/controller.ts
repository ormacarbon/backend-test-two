import { HttpResponse } from './http'

export interface Controller<Input=any> {
  handle: (request: Input) => Promise<HttpResponse>
}
