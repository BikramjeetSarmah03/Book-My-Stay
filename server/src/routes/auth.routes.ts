import express from "express";

import {
  loginUser,
  logoutUser,
  registerUser,
  validateToken,
} from "../controllers/auth.controller";
import { validate } from "../utils/validator";
import { signInValidation, signUpValidation } from "../utils/validationSchema";
import { verifyToken } from "../middleware/auth";

const router = express.Router();

router.post("/register", signUpValidation(), validate, registerUser);
router.post("/login", signInValidation(), validate, loginUser);
router.get("/logout", logoutUser);

router.get("/validate-token", verifyToken, validateToken);

export default router;
