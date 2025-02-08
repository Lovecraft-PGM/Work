import { Router } from "express";
import {authRequired} from "../middlewares/validateToken.js"
import {getTask,getTasks,createTask,updateTask,deleteTasks} from "../controllers/tasksController.js"

const router = Router();

router.get("/tasks",authRequired,getTasks);
router.get("/task/:id",authRequired,getTask);
router.post("/tasks",authRequired,createTask);
router.delete("/tasks/:id",authRequired,deleteTasks);
router.put("/tasks/:id",authRequired,updateTask);

export default router

