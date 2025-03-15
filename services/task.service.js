import TaskModel from "../models/task.model.js";
import _ from 'lodash'
const createTask = async (name,desc,userId,url=null) => {
    try{
        let task = await new TaskModel().createTask(name,desc,userId,url);
        return task
    }
    catch(err){
        console.log(err);
        throw err;
    }
}

const getTask = async (userId) => {
    try{
        const allTasks = await new TaskModel().getTasks(userId); 
        return allTasks || [];
    }
    catch(err){
        throw err;
    }
}

const deleteTask = async (taskId,userId) => {
    try{
        let task = await new TaskModel().getTaskGivenId(taskId);

        if(_.isEmpty(task)) throw new Error('Task not found')
        if(task.user != userId) throw new Error("No Access")
        await task.deleteOne()
        return{
            message:"task deleted successfully"
        }
    }
    catch(err){
        throw err;
    }
}

const updateTask = async (taskId,userId,data) => {
    try{
        console.log(taskId,userId,data)
        let task = await new TaskModel().updateTaskById(taskId,userId,data);
        console.log("task ",task);
        return task;
    }
    catch(err){
        throw err;
    }
}


export default {
    createTask,
    getTask,
    deleteTask,
    updateTask
}