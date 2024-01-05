import jwt from "jsonwebtoken";

import { UserType } from "../models/user.modal";
import { CookieOptions, Response } from "express";

export const sendToken = (user: UserType, res: Response) => {
  const token = jwt.sign(
    { userId: user._id },
    process.env.JWT_SECRET as string,
    { expiresIn: "1d" }
  );

  const cookieOptions: CookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 1000 * 60 * 60 * 24 * 1,
  };

  return res.cookie("auth_token", token, cookieOptions).status(201).json({
    success: true,
    message: "User registered",
    user,
  });
};
