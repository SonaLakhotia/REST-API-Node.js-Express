import express, { Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import configuration from "./configuration";

export const createServer = () => {
  const app = express();
  app
     .use(express.urlencoded({ extended: true}))
     .disable("x-powered-by")
     .use(express.json())
     .use(morgan("dev"))
     .use(cors())
  
  app.get("/health", (req:Request, res:Response) => {
    res.json({ status: "ok", environment: configuration.developemt });
  })

  return app;
}