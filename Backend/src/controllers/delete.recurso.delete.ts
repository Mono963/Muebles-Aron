
import { Request, Response } from "express";
import deleteRecurso from "../services/service.delete.recurso";

const deleteRecursoControllers = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        await deleteRecurso(id);
        res.status(200).json({ message: "Usuario eliminado con éxito" });
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).json({
                message: "El ID introducido no es correcto, no se ha eliminado",
                error: error.message,
            });
        } else {
            res.status(500).json({
                message: "Error desconocido, inténtelo más tarde",
            });
        }
    }
};

export default deleteRecursoControllers;
