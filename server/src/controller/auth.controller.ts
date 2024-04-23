import { NextFunction, Request, Response } from "express";
import { comparePasswords, hashPassword } from "../utils/password";
import prisma from "../utils/prisma";

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, email, password } = req.body;

    const { hash, salt } = hashPassword(password);

    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hash,
        salt: salt,
      },
    });

    res.status(201).json({
      success: true,
      message: "User Registration Successfull",
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server error",
    });
  }
};

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  const userExist = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!userExist)
    return res.status(404).json({
      success: false,
      message: "Invalid credentials",
    });

  const passwordMatch = comparePasswords(
    password,
    userExist.salt,
    userExist.password
  );

  if (!passwordMatch)
    return res.status(500).json({
      success: false,
      message: "Invalid Credentials",
    });

  res.status(200).json({
    success: true,
    message: "Login Sucessfully",
  });
};

export const logoutUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).json({
    success: true,
    message: "Logout Successfully",
  });
};
