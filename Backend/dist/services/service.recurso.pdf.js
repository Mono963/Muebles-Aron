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
const recurso_repositories_1 = require("../repositories/recurso.repositories");
const resursoPdfService = (recurso) => __awaiter(void 0, void 0, void 0, function* () {
    if (recurso.imageUrl.startsWith("uploads/") ||
        recurso.pdfUrl.startsWith("uploads/")) {
        throw new Error("Las URLs no deben comenzar con 'uploads/'");
    }
    const NuevoRescursoPdf = recurso_repositories_1.recursoRespository.create(recurso);
    const recursoPdf = yield recurso_repositories_1.recursoRespository.save(NuevoRescursoPdf);
    return recursoPdf;
});
exports.default = resursoPdfService;
