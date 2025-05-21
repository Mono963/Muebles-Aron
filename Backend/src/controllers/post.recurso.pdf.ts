import { Request, Response } from "express";
import recursoPdfService from "../services/service.recurso.pdf";
import { ResponseRecursoDto } from "../dto/Response.recurso.Dto";
import { checkBucketsExist, supabase } from "../supabase/client";

const subirRecursosPdfContreller = async (req: Request, res: Response) => {
  try {
    const bucketName = "proyectimg";
    await checkBucketsExist([bucketName]);

    const { title } = req.body;
    const imageFile = (req.files as any)?.["image"]?.[0];
    const pdfFile = (req.files as any)?.["pdf"]?.[0];

    if (!title || !imageFile || !pdfFile) {
      res.status(400).json({
        message: "Datos incompletos: título, imagen y PDF son obligatorios.",
      });
      return;
    }

    const timestamp = Date.now();
    const imagePath = `imagenes/${timestamp}_${imageFile.originalname}`;
    const pdfPath = `pdfs/${timestamp}_${pdfFile.originalname}`;

    // Subir imagen
    const { error: imageError } = await supabase.storage
      .from(bucketName)
      .upload(imagePath, imageFile.buffer, {
        contentType: imageFile.mimetype,
      });

    if (imageError) {
      console.error("Error al subir imagen:", imageError.message);
      res.status(500).json({ message: "Error al subir imagen" });
      return;
    }

    // Subir PDF
    const { error: pdfError } = await supabase.storage
      .from(bucketName)
      .upload(pdfPath, pdfFile.buffer, {
        contentType: pdfFile.mimetype,
      });

    if (pdfError) {
      console.error("Error al subir PDF:", pdfError.message);
      res.status(500).json({ message: "Error al subir PDF" });
      return;
    }

    // Obtener URLs públicas
    const {
      data: { publicUrl: imageUrl },
    } = supabase.storage.from(bucketName).getPublicUrl(imagePath);

    const {
      data: { publicUrl: pdfUrl },
    } = supabase.storage.from(bucketName).getPublicUrl(pdfPath);

    // Guardar en la DB
    const newRecurso = await recursoPdfService({
      title,
      imageUrl,
      pdfUrl,
    });

    const newRecursoDto = ResponseRecursoDto.toDTO(newRecurso);
    res.status(201).json(newRecursoDto);
  } catch (error: any) {
    console.error("Error en subirRecursosPdfContreller:", error.message);
    res.status(500).json({
      message: "Error al procesar la solicitud",
      error: error.message || error,
    });
  }
};

export default subirRecursosPdfContreller;