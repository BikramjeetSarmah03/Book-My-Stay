import { NextFunction, Request, Response } from 'express';
import { comparePasswords, hashPassword } from '../utils/password';
import prisma from '../utils/prisma';
import ErrorHandler from '../utils/ErrorHandler';
import { catchAsyncErrors } from '../middlewares/catchAsyncErrors';

export const registerUser = catchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
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
      message: 'User Registration Successfull',
      user,
    });
  }
);

export const loginUser = catchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    const userExist = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!userExist) return new ErrorHandler('Invalid credentials', 401);

    const passwordMatch = comparePasswords(
      password,
      userExist.salt,
      userExist.password
    );

    if (!passwordMatch) return new ErrorHandler('Invalid Credentials', 401);
  }
);

export const logoutUser = catchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    res.clearCookie('book-my-stay-token');

    res.status(200).json({
      success: true,
      message: 'Logout Successfully',
    });
  }
);
