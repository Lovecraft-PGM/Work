import { useEffect } from "react";
import { useTasks } from "../context/TasksContext"

function TasksPage() {
    const { getTasks, tasks } = useTasks();

    useEffect(() => {
        getTasks();
    }, []);
    if (tasks.length === 0)return(<h1>Aún no hay tareas</h1>)
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
            {tasks.map((task) => (
                <div key={task._id}>
                    <h1>{task.title}</h1>
                    <h1>{task.description}</h1>
                    <h1>{task.status}</h1>
                    <h1>{task.priority}</h1>
                    <h1>{task.endDate}</h1>
                </div>
            ))}
        </div>
    );
}

export default TasksPage
