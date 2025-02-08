import Task from "../models/taskModel.js"


export const getTasks = async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
}

export const createTask = async (req, res) => {
    const { title, description, date } = req.body;

    // console.log(req.user);
    const newTask = new Task({
        title, 
        description, 
        date, 
        user:req.user.id
    });
    await newTask.save();
    res.json(newTask)
    
    return res.status(500).json({ message: error.message });
}

export const getTask = async (req, res) => {
    const taskFound = await Task.findById(req.params.id);
    if (!taskFound) return res.status(404).json({ message: "The task not found" });
    res.json(taskFound)
}

export const updateTask = async (req, res) => {
    const taskUpdate = await Task.findByIdAndUpdate(req.params.id, req.body,{new:true});
    if (!taskUpdate) return res.status(404).json({ message: "The task not found" });
    res.json(taskUpdate)
 }

export const deleteTasks = async (req, res) => {
    const taskDelete = await Task.findByIdAndDelete(req.params.id);
    if (!taskDelete) return res.status(404).json({ message: "The task not found" });
    res.json(taskDelete)
 }
