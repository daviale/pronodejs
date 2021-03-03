import { Router } from "express";
import upload from "../middlewares/upload";
const router = Router();

import * as productoController from "../controllers/productos.controller";
import { authJwt } from "../middlewares";

router.get("/", productoController.obtenerProductos);


// router.get("/:productoId", productoController.obtenerProducto);



router.get('/:categoriaId', productoController.obtenerProductosporCategoria);



router.post(
  "/",
  upload,
  [
    authJwt.verifyToken,
    authJwt.isModerator,
  ],
  productoController.crearProducto
);


router.put(
  "/:productoId",
  [authJwt.verifyToken, authJwt.isModerator],
  productoController.actualizarProducto
);


router.delete(
  "/:productoId",
  [authJwt.verifyToken, authJwt.isAdmin],
  productoController.eliminarProduct
);

export default router;
