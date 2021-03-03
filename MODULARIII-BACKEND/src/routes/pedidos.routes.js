import { Router } from "express";
import upload from "../middlewares/upload";
const router = Router();

import * as pedidoController from "../controllers/pedido.controller";
import { authJwt } from "../middlewares";

router.get('/', pedidoController.listaProductos)
router.post('/', pedidoController.crearPedido)



export default router;







