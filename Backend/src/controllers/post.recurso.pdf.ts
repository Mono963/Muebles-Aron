import { Request, Response } from "express";
import recursoPdfService from "../services/service.recurso.pdf";
import { TargetPdf } from "../entities/TagetPdf";
import { ResponseRecursoDto } from "../dto/Response.recurso.Dto";
import { limpiarArchivosSubidos } from "../utils/multer";

const subirRecursosPdfContreller = async (req: Request, res: Response) => {
  const image = (req.files as any)?.["image"]?.[0]?.filename;
  const pdf = (req.files as any)?.["pdf"]?.[0]?.filename;
  const { title } = req.body;

  try {
    if (!title || !image || !pdf) {
      limpiarArchivosSubidos(image, pdf);
      res.status(400).json({ message: "Datos incompletos: asegúrese de enviar título, imagen y PDF." });
    } else {
      const newRecurso: TargetPdf = await recursoPdfService({
        title,
        imageUrl: image,
        pdfUrl: pdf,
      });

      const newRecursoDto = ResponseRecursoDto.toDTO(newRecurso);
      res.status(201).json(newRecursoDto);
    }
  } catch (error) {
    limpiarArchivosSubidos(image, pdf);

    if (error instanceof Error) {
      res.status(400).json({
        message: "Error al guardar el recurso",
        error: error.message,
      });
    } else {
      res.status(500).json({
        message: "Error desconocido, inténtelo más tarde",
      });
    }
  }
};


export default subirRecursosPdfContreller;
