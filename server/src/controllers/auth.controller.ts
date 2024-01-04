import { NextFunction, Request, Response } from "express";
import User from "../models/user.modal";

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const body = req.body;
  try {
    const userExist = await User.findOne({
      email: body.email,
    });

    if (userExist)
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });

    const user = await User.create({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      password: body.password,
    });

    res.status(201).json({
      success: true,
      message: "User registered",
      user,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
