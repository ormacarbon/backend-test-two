"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteClientController = void 0;
const DeleteClientService_1 = require("../services/DeleteClientService");
class DeleteClientController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.query;
            const deleteClientService = yield new DeleteClientService_1.DeleteClientService();
            const client = yield deleteClientService.execute({ id });
            res.json(client);
        });
    }
}
exports.DeleteClientController = DeleteClientController;
