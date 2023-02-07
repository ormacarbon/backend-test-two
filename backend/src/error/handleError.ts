export class CustomError extends Error {
    constructor(statusCode: number, message: string) {
      super(message);
    }
  }
  
  export class MissingCredentials extends CustomError {
    constructor() {
      super(422, 'abv, name, ibu and country information must be filled');
    }
  }

  export class ProductExists extends CustomError {
    constructor() {
      super(400, 'Name property should be unique.');
    }
  }

  
  export class ProductNotFound extends CustomError {
    constructor() {
      super(404, 'Product not found.');
    }
  }
  