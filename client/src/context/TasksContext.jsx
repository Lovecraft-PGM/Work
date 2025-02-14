import { useContext, createContext, useState } from "react";
import { createTaskRequest,getTasksRequest } from "../api/tasks"

const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context) throw new Error("Error");
    return context;
};

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([]);

    const createTask = async (task) => {
        const res = await createTaskRequest(task);
        console.log(res);
    }
    const getTasks = async () => {
        const res = await getTasksRequest();
        setTasks(res.data);
      };
    return (
        <TaskContext.Provider
            value={{
                tasks,
                createTask,
                getTasks,
            }}>
            {children}
        </TaskContext.Provider>
    )
}