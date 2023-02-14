"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadAllController = void 0;
const read_all_protocols_1 = require("./read-all-protocols");
class ReadAllController {
    constructor(readAll) {
        this.readAll = readAll;
    }
    async handle(_httpRequest) {
        try {
            const beers = await this.readAll.read();
            return (0, read_all_protocols_1.ok)(beers);
        }
        catch (error) {
            return (0, read_all_protocols_1.serverError)();
        }
    }
}
exports.ReadAllController = ReadAllController;
//# sourceMappingURL=read-all.js.map