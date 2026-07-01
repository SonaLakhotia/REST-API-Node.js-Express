import { Request, Response } from "express";

export const getAllTasks = (req: Request, res: Response) => {
  res.json({ message: "Get all tasks" });
}

export const getTaskById = (req: Request, res: Response) => {
  res.send({ message: "Get task by ID"})
}