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
const client_1 = require("../supabase/client");
const deleteRecurso = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const recurso = yield recurso_repositories_1.recursoRespository.findOneById(parseInt(id));
    if (!recurso) {
        throw new Error("Recurso no encontrado");
    }
    // Extraer rutas relativas para eliminar archivos en el mismo bucket
    const imagePath = recurso.imageUrl.split("/proyectimg/")[1];
    const pdfPath = recurso.pdfUrl.split("/proyectimg/")[1];
    // Eliminar imagen
    const { error: imageError } = yield client_1.supabase.storage
        .from("proyectimg")
        .remove([imagePath]);
    if (imageError) {
        console.error("Error al eliminar imagen:", imageError.message);
    }
    // Eliminar PDF
    const { error: pdfError } = yield client_1.supabase.storage
        .from("proyectimg")
        .remove([pdfPath]);
    if (pdfError) {
        console.error("Error al eliminar PDF:", pdfError.message);
    }
    // Finalmente borrar el registro en la base de datos
    yield recurso_repositories_1.recursoRespository.delete(id);
});
exports.default = deleteRecurso;
