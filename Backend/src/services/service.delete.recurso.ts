import { recursoRespository } from "../repositories/recurso.repositories";
import { supabase } from "../supabase/client";

const deleteRecurso = async (id: string) => {

  const recurso = await recursoRespository.findOneById(id);

  if (!recurso) {
    throw new Error("Recurso no encontrado");
  }

  const imagePathMatch = recurso.imageUrl.match(/proyectimg\/(.+)$/);
  const pdfPathMatch = recurso.pdfUrl.match(/proyectimg\/(.+)$/);

  const imagePath = imagePathMatch?.[1];
  const pdfPath = pdfPathMatch?.[1];

  if (imagePath) {
    const { error: imageError } = await supabase.storage
      .from("proyectimg")
      .remove([imagePath]);

    if (imageError) {
      console.error("Error al eliminar imagen:", imageError.message);
    }
  } else {
    console.warn("No se pudo determinar la ruta de la imagen.");
  }

  if (pdfPath) {
    const { error: pdfError } = await supabase.storage
      .from("proyectimg")
      .remove([pdfPath]);

    if (pdfError) {
      console.error("Error al eliminar PDF:", pdfError.message);
    }
  } else {
    console.warn("No se pudo determinar la ruta del PDF.");
  }

  await recursoRespository.delete(id);
};

export default deleteRecurso;