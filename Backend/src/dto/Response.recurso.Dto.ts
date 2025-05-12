import { TargetPdf } from "../entities/TagetPdf"

export class ResponseRecursoDto {
  static toDTO(recurso: TargetPdf) {
    return {
      id: recurso.id,
      title: recurso.title,
      imageUrl: `uploads/${recurso.imageUrl}`, // sin path completo
      pdfUrl: `uploads/${recurso.pdfUrl}`      // sin path completo
    };
  }

  static toDTOList(recursos: TargetPdf[]) {
    return recursos.map(this.toDTO);
  }
}