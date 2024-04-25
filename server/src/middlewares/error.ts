import { NextFunction, Request, Response } from 'express';
import ErrorHandler from '../utils/ErrorHandler';

export function errorMiddleware(
  err: ErrorHandler,
  res: Response,
  req: Request,
  next: NextFunction
) {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || 'Internal Server Error';

  res.status(err.statusCode).json({
    success: false,
    error: err.message,
  });
}
