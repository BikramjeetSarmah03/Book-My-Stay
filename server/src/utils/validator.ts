import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) return next();

  const extractErrors: any[] = [];
  errors.array().map((err: any) => {
    extractErrors.push({ [err.path]: err.msg });
  });

  return res.status(422).json({
    success: false,
    errors: extractErrors,
  });
};
