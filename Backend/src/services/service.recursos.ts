import { recursoRespository } from "../repositories/recurso.repositories";
import { TargetPdf } from "../entities/TagetPdf";

const getAllRecursosService = async (): Promise<TargetPdf[]> => {
  return await recursoRespository.find();
};

export default getAllRecursosService;