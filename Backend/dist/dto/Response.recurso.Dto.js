"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseRecursoDto = void 0;
class ResponseRecursoDto {
    static toDTO(recurso) {
        return {
            id: recurso.id,
            title: recurso.title,
            imageUrl: recurso.imageUrl,
            pdfUrl: recurso.pdfUrl
        };
    }
    static toDTOList(recursos) {
        return recursos.map(this.toDTO);
    }
}
exports.ResponseRecursoDto = ResponseRecursoDto;
