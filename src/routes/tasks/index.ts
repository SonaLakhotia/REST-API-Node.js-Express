import { Router } from "express";
import { getAllTasks, getTaskById } from "./tasksController";

const tasks:Router = Router();

tasks.get("/", getAllTasks);
tasks.get("/:id", getTaskById);

export default tasks;