import { Router } from "express";
import {register, login, profile, logout} from "../controllers/authController.js"
import {authRequired} from "../middlewares/validateToken.js"
import { validateSchema } from "../middlewares/validatorMiddleware.js";
import { registerSchema, loginSchema } from "../schemas/authSchema.js";
const router = Router();

router.post("/register",validateSchema(registerSchema),register);
router.post("/login",validateSchema(loginSchema),login);
router.get("/profile",authRequired,profile);
router.post("/logout",logout);


export default router