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
const service_recursos_1 = __importDefault(require("../services/service.recursos"));
const Response_recurso_Dto_1 = require("../dto/Response.recurso.Dto");
const getRecursosPdfController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recursos = yield (0, service_recursos_1.default)();
        const listRecursos = Response_recurso_Dto_1.ResponseRecursoDto.toDTOList(recursos);
        res.status(200).json(listRecursos);
    }
    catch (error) {
        res.status(500).json({
            message: "Error al obtener los recursos",
            error: error instanceof Error ? error.message : error,
        });
    }
});
exports.default = getRecursosPdfController;
