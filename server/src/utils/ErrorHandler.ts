import { StatusCodes } from 'http-status-codes';

class ErrorHandler extends Error {
  constructor(message: string, public statusCode: StatusCodes) {
    super(message);
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}
export default ErrorHandler;
