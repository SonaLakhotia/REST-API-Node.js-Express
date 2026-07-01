import { Request, Response } from "express";
import EntityNotFoundError from "../../errors/EntityNotFound";

export const getAllTasks = (req: Request, res: Response) => {
  res.json({ message: "Get all tasks" });
}

// Express5 onwards (package.json has the version), async await operations do not need try catch blocks
// for error handling, the default express error handler will catch the error and pass it to the error handling middleware
// Hence we made a custom handler to handle the errors and send a proper response to the client
export const getTaskById = async (req: Request, res: Response) => {
  //throw new EntityNotFoundError("Task not found", 404, "NOT_FOUND");
  res.status(200).json({ id: 1, name: "Read a book" })
}