import { Request, Response } from "express";
import getAllRecursosService from "../services/service.recursos";
import { ResponseRecursoDto } from "../dto/Response.recurso.Dto";
import { TargetPdf } from "../entities/TagetPdf";

const getRecursosPdfController = async (req: Request, res: Response) => {
  try {
    const recursos:TargetPdf[] = await getAllRecursosService();
    const listRecursos = ResponseRecursoDto.toDTOList(recursos);
    res.status(200).json(listRecursos);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener los recursos",
      error: error instanceof Error ? error.message : error,
    });
  }
};

export default getRecursosPdfController;