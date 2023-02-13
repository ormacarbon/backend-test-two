import { HttpResponse } from '../abstract/http'
import { ServerError } from '../errors/server-error'

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack)
})

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  body: null
})

export const forbidden = (error: Error): HttpResponse => ({
  statusCode: 403,
  body: error
})
