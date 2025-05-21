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
exports.checkRecursoDuplicado = void 0;
const recurso_repositories_1 = require("../repositories/recurso.repositories");
const checkRecursoDuplicado = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    try {
        const imageFile = (_b = (_a = req.files) === null || _a === void 0 ? void 0 : _a["image"]) === null || _b === void 0 ? void 0 : _b[0];
        const pdfFile = (_d = (_c = req.files) === null || _c === void 0 ? void 0 : _c["pdf"]) === null || _d === void 0 ? void 0 : _d[0];
        if (!imageFile || !pdfFile) {
            res.status(400).json({ message: "Archivos no válidos o faltantes" });
            return;
        }
        const existente = yield recurso_repositories_1.recursoRespository.checkExist(imageFile.originalname, pdfFile.originalname, req.body.title);
        if (existente) {
            res.status(400).json({
                message: "Ya existe un recurso con el mismo archivo de imagen o PDF",
            });
            return;
        }
        next();
    }
    catch (error) {
        res.status(500).json({
            message: "Error al verificar duplicados",
            error: error instanceof Error ? error.message : error,
        });
        return;
    }
});
exports.checkRecursoDuplicado = checkRecursoDuplicado;
