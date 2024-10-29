import { Router } from "express";
import { login, logout, profile, register,valid } from "../controllers/controllers.js";
import { validatetoken } from "../token/validate.js";
const router = Router();

router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)
router.get("/validate", valid)
router.get("/profile", validatetoken ,profile)

export default router