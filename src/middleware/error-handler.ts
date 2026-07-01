import { Request, Response, NextFunction } from "express";
import CustomError from "../errors/CustomError";

export const errorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
  if(res.headersSent){
    next(error);
    return;
  }

  if(error instanceof CustomError){
    res.status(error.statusCode).json({
        message: error.message,
        code: error.code,
        statusCode: error.statusCode
    })
  }
  
  res.status(500).json({ error: {
    message: error.message || "An error occurred, please check logs"
  }})
}