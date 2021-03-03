import { Router } from "express";
const router = Router();

import * as listaController from "../controllers/lista.Contoller";

import { authJwt } from "../middlewares";

// router.get("/", listaController.obtenerListas);


router.get("/:listaId", listaController.obtenerLista);


router.post(
  "/",
  [
    authJwt.verifyToken,
  ],
  listaController.crearLista
);


router.put(
  "/:listaId",
  [authJwt.verifyToken],
  listaController.actualizarLista
);

router.delete(
  "/:listaId",
  [authJwt.verifyToken],
  listaController.eliminarLista
);


router.get(
  '/',
  [authJwt.verifyToken],
  listaController.obtenerListasUser
);



export default router;
