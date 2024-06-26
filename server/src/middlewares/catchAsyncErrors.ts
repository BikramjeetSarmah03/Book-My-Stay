import { NextFunction, Request, Response } from 'express';

export const catchAsyncErrors =
  (theFunc: Function) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(theFunc(req, res, next)).catch(next);
  };
