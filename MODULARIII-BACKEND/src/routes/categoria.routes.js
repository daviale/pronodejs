import { Router } from "express";
const router = Router();

import * as categoriaControll from "../controllers/categoria.controller";

import { authJwt } from "../middlewares";
import { checkDuplicateNameCategoria } from "../middlewares/verifyCategoria";

router.get("/", categoriaControll.obtenerCategorias);


router.get("/:categoriaId", categoriaControll.obtenerCategoriaporID);


router.post(
  "/",
  [authJwt.verifyToken, authJwt.isModerator,checkDuplicateNameCategoria],
  categoriaControll.crearCategoria
);


router.put(
  "/:categoriaId",
  [authJwt.verifyToken, authJwt.isModerator],
  categoriaControll.actualizarCategoriaporID
);


router.delete(
  "/:categoriaId",
  [authJwt.verifyToken, authJwt.isAdmin],
  categoriaControll.eliminarCategoria
);

export default router;
