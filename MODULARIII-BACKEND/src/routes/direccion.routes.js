import { Router } from "express";
import upload from "../middlewares/upload";
const router = Router();
import * as direccionController from  "../controllers/direccion.controller";
import { authJwt } from "../middlewares";

router.get('/', direccionController.listarDirecciones)
router.post('/', direccionController.crearDireccion)



export default router;