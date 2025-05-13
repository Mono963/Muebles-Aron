import { AppDataSource } from "../config/data-source";
import { TargetPdf } from "../entities/TagetPdf";

export const recursoRespository = AppDataSource.getRepository<TargetPdf>(TargetPdf).extend ({
    checkExist: async function (imageUrl: string, pdfUrl: string, title: string) {
        const recurso = await this.findOne({
            where: [
                { imageUrl },
                { pdfUrl },
                { title }
            ]
        });

        return recurso;
    },
    findByIdTarget: async function (id: string) {
        const recurso = await this.findOne({
            where: { id }
        });

        return recurso;
    },
});