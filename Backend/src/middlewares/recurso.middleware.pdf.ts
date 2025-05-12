import { Request, Response, NextFunction } from "express";
import { recursoRespository } from "../repositories/recurso.repositories";
import { limpiarArchivosSubidos } from "../utils/multer";

export const checkRecursoDuplicado = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const image = (req.files as any)?.["image"]?.[0]?.filename;
    const pdf = (req.files as any)?.["pdf"]?.[0]?.filename;

    if (!image || !pdf) {
      limpiarArchivosSubidos(image, pdf);
      return void res.status(400).json({ message: "Archivos no válidos o faltantes" });
    }

    const existente = await recursoRespository.checkExist(
      image,
      pdf,
      req.body.title
    );
        

    if (existente) {
      limpiarArchivosSubidos(image, pdf);
      return void res.status(400).json({
        message: "Ya existe un recurso con el mismo archivo de imagen o PDF",
      });
    }

    next();
  } catch (error) {
    limpiarArchivosSubidos(
      (req.files as any)?.["image"]?.[0]?.filename,
      (req.files as any)?.["pdf"]?.[0]?.filename
    );

    return void res.status(500).json({
      message: "Error al verificar duplicados",
      error: error instanceof Error ? error.message : error,
    });
  }
};