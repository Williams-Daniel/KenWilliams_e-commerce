import { Response } from "express";
import { HTTP, mainError } from "./mainError";

const preparedError = (err: mainError, res: Response) => {
  res.status(HTTP.NOT_FOUND).json({
    name: err.name,
    message: err.message,
    status: err.status,
    success: err.success,
    stack: err.stack,
    err,
  });
};

export const ErrorHolder = (err, res) => {
  preparedError(err, res);
};
