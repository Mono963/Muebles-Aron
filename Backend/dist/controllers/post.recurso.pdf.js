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
const service_recurso_pdf_1 = __importDefault(require("../services/service.recurso.pdf"));
const Response_recurso_Dto_1 = require("../dto/Response.recurso.Dto");
const client_1 = require("../supabase/client");
const subirRecursosPdfContreller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    try {
        const bucketNames = ["proyectimg"];
        yield (0, client_1.checkBucketsExist)(bucketNames);
        const { title } = req.body;
        const imageFile = (_b = (_a = req.files) === null || _a === void 0 ? void 0 : _a["image"]) === null || _b === void 0 ? void 0 : _b[0];
        const pdfFile = (_d = (_c = req.files) === null || _c === void 0 ? void 0 : _c["pdf"]) === null || _d === void 0 ? void 0 : _d[0];
        if (!title || !imageFile || !pdfFile) {
            res.status(400).json({ message: "Datos incompletos: título, imagen y PDF son obligatorios." });
            return;
        }
        const imagePath = `imagenes/${Date.now()}_${imageFile.originalname}`;
        const pdfPath = `pdfs/${Date.now()}_${pdfFile.originalname}`;
        // Subir imagen
        const { error: imageError } = yield client_1.supabase.storage
            .from("proyectimg")
            .upload(imagePath, imageFile.buffer, {
            contentType: imageFile.mimetype,
        });
        if (imageError)
            throw imageError;
        // Subir PDF
        const { error: pdfError } = yield client_1.supabase.storage
            .from("proyectimg")
            .upload(pdfPath, pdfFile.buffer, {
            contentType: pdfFile.mimetype,
        });
        if (pdfError)
            throw pdfError;
        // Obtener URLs públicas
        const { data: { publicUrl: imageUrl }, } = client_1.supabase.storage.from("proyectimg").getPublicUrl(imagePath);
        const { data: { publicUrl: pdfUrl }, } = client_1.supabase.storage.from("proyectimg").getPublicUrl(pdfPath);
        // Guardar en DB con el servicio, pasando las URLs
        const newRecurso = yield (0, service_recurso_pdf_1.default)({
            title,
            imageUrl,
            pdfUrl,
        });
        const newRecursoDto = Response_recurso_Dto_1.ResponseRecursoDto.toDTO(newRecurso);
        res.status(201).json(newRecursoDto);
    }
    catch (error) {
        console.error("Error al subir a Supabase Storage:", error);
        res.status(500).json({ message: "Error al subir archivos", error });
    }
});
exports.default = subirRecursosPdfContreller;
