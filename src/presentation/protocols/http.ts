export interface HttpRequest {
  body: any,
  params?: string
}

export interface HttpResponse {
  statusCode: number,
  body: any
}
