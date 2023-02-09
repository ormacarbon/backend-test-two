import { ValidateBody } from "../../protocols/beer-body-validator";

export class ValidateBeerBody implements ValidateBody {
  validate(body: any): string | void {
    const requiredFields = ["abv", "address", "category", "city", "coordinates", "country", "description", "ibu", "name", "state", "website"];
    for (const field of requiredFields) {
      if (!body[field]) {
        return field;
      }
    }
  }
}
