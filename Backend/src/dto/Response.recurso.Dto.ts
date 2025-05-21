import { TargetPdf } from "../entities/TagetPdf"

export class ResponseRecursoDto {
  static toDTO(recurso: TargetPdf) {
    return {
      id: recurso.id,
      title: recurso.title,
      imageUrl: recurso.imageUrl,
      pdfUrl:  recurso.pdfUrl      
    };
  }

  static toDTOList(recursos: TargetPdf[]) {
    return recursos.map(this.toDTO);
  }
}