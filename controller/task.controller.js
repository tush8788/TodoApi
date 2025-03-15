import taskService from "../services/task.service.js"
import getUserIdFromHeader from '../utils/getUserIdFromHeader.js'

const getAllTasks = async (req,res) => {
    try{
        let userId = getUserIdFromHeader(req)
        let resp = await taskService.getTask(userId);
        return res.status(200).json(resp);
    }
    catch(err){
        return res.status(500).json({message:err.message})
    }
}

const createTask = async (req,res) => {
    try{
        let userId = getUserIdFromHeader(req)
        let {name,desc,url} = req.body
        let resp = await taskService.createTask(name,desc,userId,url);
        return res.status(200).json(resp);
    }
    catch(err){
        return res.status(500).json({message:err.message})
    }
}

const deleteTask = async (req,res) => {
    try{
        let userId = getUserIdFromHeader(req);
        let resp = await taskService.deleteTask(req.body.taskId,userId)
        return res.status(200).json(resp);
    }
    catch(err){
        return res.status(500).json(res)
    }
}

const updateTask = async (req,res) => {
    try{
        let userId = getUserIdFromHeader(req);
        let {taskId,data} = req.body;
        let resp = await taskService.updateTask(taskId,userId,data);
        return res.status(200).json(resp);
    }
    catch(err){
        return res.status(500).json(err);
    }
}

export default {
    getAllTasks,
    createTask,
    deleteTask,
    updateTask
}