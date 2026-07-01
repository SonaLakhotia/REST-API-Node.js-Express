import { Router } from "express";
import { getAllProjects, getProjectById, getTasksByProjectId } from "./projectsController";

const projects:Router = Router();

projects.get("/", getAllProjects);
projects.get("/:id", getProjectById);
projects.get("/:id/tasks", getTasksByProjectId);

export default projects;