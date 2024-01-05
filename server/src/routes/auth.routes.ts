import express from "express";

import {
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/auth.controller";
import { validate } from "../utils/validator";
import { signInValidation, signUpValidation } from "../utils/validationSchema";

const router = express.Router();

router.post("/register", signUpValidation(), validate, registerUser);
router.post("/login", signInValidation(), validate, loginUser);
router.get("/logout", logoutUser);

export default router;
