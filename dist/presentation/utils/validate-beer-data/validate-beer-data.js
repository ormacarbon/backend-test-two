"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateBeerBody = void 0;
class ValidateBeerBody {
    validate(body) {
        const requiredFields = ["abv", "address", "category", "city", "coordinates", "country", "ibu", "name", "state", "website"];
        for (const field of requiredFields) {
            if (!body[field]) {
                return field;
            }
        }
    }
}
exports.ValidateBeerBody = ValidateBeerBody;
//# sourceMappingURL=validate-beer-data.js.map