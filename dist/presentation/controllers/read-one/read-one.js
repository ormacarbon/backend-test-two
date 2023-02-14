"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadOneController = void 0;
const read_one_protocols_1 = require("./read-one-protocols");
class ReadOneController {
    constructor(readOne) {
        this.readOne = readOne;
    }
    async handle(httpRequest) {
        try {
            if (!httpRequest.query.name) {
                return (0, read_one_protocols_1.badRequest)(new read_one_protocols_1.MissingParamError("name"));
            }
            const { name } = httpRequest.query;
            const beer = await this.readOne.read(name);
            if (!beer) {
                return (0, read_one_protocols_1.notFound)();
            }
            return (0, read_one_protocols_1.ok)(beer);
        }
        catch (error) {
            return (0, read_one_protocols_1.serverError)();
        }
    }
}
exports.ReadOneController = ReadOneController;
//# sourceMappingURL=read-one.js.map