import { Request, Response, NextFunction } from "express";
import { recursoRespository } from "../repositories/recurso.repositories";

export const checkRecursoDuplicado = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const imageFile = (req.files as any)?.["image"]?.[0];
    const pdfFile = (req.files as any)?.["pdf"]?.[0];

    if (!imageFile || !pdfFile) {
      res.status(400).json({ message: "Archivos no válidos o faltantes" });
      return; 
    }

    const existente = await recursoRespository.checkExist(
      imageFile.originalname,
      pdfFile.originalname,
      req.body.title
    );

    if (existente) {
       res.status(400).json({
        message: "Ya existe un recurso con el mismo archivo de imagen o PDF",
      });
      return;
    }

    next();
  } catch (error) {
      res.status(500).json({
      message: "Error al verificar duplicados",
      error: error instanceof Error ? error.message : error,
    });
    return
  }
};