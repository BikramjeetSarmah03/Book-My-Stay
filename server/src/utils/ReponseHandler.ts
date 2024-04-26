import { User } from '@prisma/client';
import { Response } from 'express';
import jwt from 'jsonwebtoken';

export const sendCookie = (user: User, res: Response, message?: string) => {
  const age = 1000 * 60 * 60 * 24 * 7;

  const token = jwt.sign(
    {
      id: user.id,
    },
    process.env.JWT_SECRET_KEY || '',
    { expiresIn: age }
  );

  return res
    .cookie('book-my-stay-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production' ? true : false,
      maxAge: age,
    })
    .status(200)
    .json({
      success: true,
      message,
    });
};
