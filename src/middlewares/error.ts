import { Request, Response, NextFunction } from "express";
import ErrorResponse from "../utils/customError";

export const errorHandler = (
  err: Error & {statusCode?: number; value?: string; name?: string },
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let error = {...err} as ErrorResponse;
  error.message = err.message;

  if(err.name === 'CastError') {
    const message = `Resource not found with id of ${JSON.stringify(err.value)}`
    error = new ErrorResponse(message, 404);
  }

  console.error(err.stack?.red);

//   const statusCode = err instanceof ErrorResponse ? error.statusCode : 500;
//   const message = error.message || 'Server Error'

  res
    .status(error.statusCode || 500)
    .json({ success: false, error: error.message || 'Server Error' });
};


