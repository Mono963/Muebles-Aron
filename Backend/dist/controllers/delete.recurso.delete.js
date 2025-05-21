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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_delete_recurso_1 = __importDefault(require("../services/service.delete.recurso"));
const deleteRecursoControllers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield (0, service_delete_recurso_1.default)(id);
        res.status(200).json({ message: "Usuario eliminado con éxito" });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(404).json({
                message: "El ID introducido no es correcto, no se ha eliminado",
                error: error.message,
            });
        }
        else {
            res.status(500).json({
                message: "Error desconocido, inténtelo más tarde",
            });
        }
    }
});
exports.default = deleteRecursoControllers;
