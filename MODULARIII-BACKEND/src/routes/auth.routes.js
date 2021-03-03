import { Router } from "express";


const router = Router();

import * as authCtrl from "../controllers/auth.controller";
import { authJwt, verifySignup } from "../middlewares";

router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.post(
  "/signup",
  [verifySignup.checkDuplicateUsernameOrEmail, verifySignup.checkRolesExisted],
  authCtrl.signUp
);

router.post(
  "/signinadmin",
  [authJwt.isHaveRolAccess],
  authCtrl.signin
);

router.post("/signin", authCtrl.signin);


// obtiene el ususario autenticado
router.get('/',
  [authJwt.verifyToken],
  authCtrl.usuarioAutenticado
)

export default router;
