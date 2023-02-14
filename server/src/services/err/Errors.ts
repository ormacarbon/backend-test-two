export class InvalidArgumentError extends Error {
  statusCode: number;
  constructor(mensage: string) {
    super(mensage);
    this.name = 'InvalidArgumentError';
    this.statusCode = 403;
  }
}
export class InternalServerError extends Error {
  statusCode: number;
  constructor(message: string) {
    super(message);
    this.message = message;
    this.name = 'InternalServerError';
    this.statusCode = 500;
  }
}
export class ValueNotFound extends Error {
  statusCode: number;
  constructor(message: string) {
    super(message);
    this.message = message;
    this.statusCode = 404;
    this.name = 'ValueNotFound';
  }
}

export class ValueAlreadyExists extends Error {
  statusCode: number;
  constructor(message: string) {
    super(message);
    this.message = message;
    this.name = 'ValueAlreadyExists';
    this.statusCode = 403;
  }
}

export class SyntaxError extends Error {
  statusCode: number;
  constructor(message: string) {
    super(message);
    this.message = message;
    this.name = 'SyntaxError';
    this.statusCode = 401;
  }
}
