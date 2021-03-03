import { Router } from "express";
const router = Router();

import * as usersCtrl from "../controllers/user.controller";
import { authJwt, verifySignup } from "../middlewares";

router.post(
  "/",
  [
    authJwt.verifyToken,
    authJwt.isAdmin,
    verifySignup.checkDuplicateUsernameOrEmail,
  ],
  usersCtrl.createUser
);

// d obtener todos los usuarios
router.get("/", usersCtrl.getUsers)



// d actualizar ususario
router.put('/:userId',
  [
    authJwt.verifyToken,
  ],
  usersCtrl.actualizarUsuario

)






export default router;

