import { Router } from "express";
import {authRequired} from "../middlewares/validateToken.js"
import { validateSchema } from "../middlewares/validatorMiddleware.js";
import {getTask,getTasks,createTask,updateTask,deleteTask} from "../controllers/tasksController.js"
import { createTaskSchema } from "../schemas/taskSchema.js";
const router = Router();

router.get("/tasks",authRequired,getTasks);
router.get("/task/:id",authRequired,getTask);
router.post("/tasks",authRequired,validateSchema(createTaskSchema),createTask);
router.delete("/tasks/:id",authRequired,deleteTask);
router.put("/tasks/:id",authRequired,updateTask);

export default router

