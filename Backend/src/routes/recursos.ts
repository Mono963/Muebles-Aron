import { Router } from "express";
import  formPage from "../controllers/post.form";
import subirRecursosPdfContreller from "../controllers/post.recurso.pdf";
import getRecursosPdfController from "../controllers/get.recursos";
import { uploadField } from "../utils/multer";
import { checkRecursoDuplicado } from "../middlewares/recurso.middleware.pdf";

const router: Router = Router();

router.post("/formulario", formPage); 
router.post("/recurso", uploadField, checkRecursoDuplicado,  subirRecursosPdfContreller);
router.get("/recursos", getRecursosPdfController);

export default router;