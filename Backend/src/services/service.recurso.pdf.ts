import IRecursoPdfDto from "../dto/Recurso.pdf.Dto";
import { TargetPdf } from "../entities/TagetPdf";
import { recursoRespository } from "../repositories/recurso.repositories";

const resursoPdfService = async (recurso: IRecursoPdfDto): Promise<TargetPdf> => {
    const NuevoRescursoPdf: TargetPdf = recursoRespository.create(recurso);
    const recursoPdf = await recursoRespository.save(NuevoRescursoPdf);
    return recursoPdf;
};


export default resursoPdfService;