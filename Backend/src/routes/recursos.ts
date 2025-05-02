import { Router } from "express";
import { formPage } from "../controllers/post.form";

const router: Router = Router();

router.use("/formulario", formPage); 

export default router;