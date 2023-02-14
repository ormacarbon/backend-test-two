export interface Usecase<Input, Output> {
  handle: (params?: Input) => Promise<Output>
}
