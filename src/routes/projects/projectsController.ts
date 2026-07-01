import { Request, Response } from "express";

export const getAllProjects = (req: Request, res: Response) => {
  res.json({ message: "Get all projects" });
}

export const getProjectById = (req: Request, res: Response) => {
  res.send("Get project by ID")
}

export const getTasksByProjectId = (req: Request, res: Response) => {
  res.send("Get tasks by project ID")
}
