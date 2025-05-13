import { recursoRespository } from "../repositories/recurso.repositories"

const deleteRecurso = async (id: string) => {
 await recursoRespository.delete(id);
}

export default deleteRecurso;