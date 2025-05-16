import { Router } from "express";
import  formPage from "../controllers/post.form";
import subirRecursosPdfContreller from "../controllers/post.recurso.pdf";
import getRecursosPdfController from "../controllers/get.recursos";
import deleteRecursoControllers from "../controllers/delete.recurso.delete";
import { uploadField } from "../utils/multer";
import { checkRecursoDuplicado } from "../middlewares/recurso.middleware.pdf";
import auth from "../middlewares/auth.recurso.create";
import authController from "../controllers/post.auth.token.controllers";

const router: Router = Router();

router.post("/auth", authController)
router.post("/formulario", formPage); 
router.post("/recurso", auth, uploadField, checkRecursoDuplicado,  subirRecursosPdfContreller);
router.get("/recursos", getRecursosPdfController);
router.delete("/recurso/:id", auth, deleteRecursoControllers);

export default router;